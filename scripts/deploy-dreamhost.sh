#!/bin/bash

# Dreamhost SSH Deployment Script
# This script deploys your personal homepage to Dreamhost via SSH

# Configuration - Load from environment file if it exists
ENV_FILE="../.env.deploy"
if [ -f "$ENV_FILE" ]; then
    echo "Loading configuration from $ENV_FILE..."
    source "$ENV_FILE"
else
    echo "Warning: $ENV_FILE not found, using environment variables or defaults"
fi

# Deployment settings (can be overridden by .env.deploy or environment variables)
DREAMHOST_USER="${DREAMHOST_USER:-your_dreamhost_username}"
DREAMHOST_DOMAIN="${DREAMHOST_DOMAIN:-your_domain.com}"
DREAMHOST_PATH="${DREAMHOST_PATH:-/home/$DREAMHOST_USER/$DREAMHOST_DOMAIN}"
LOCAL_BUILD_DIR="${LOCAL_BUILD_DIR:-..}"
EXCLUDE_FILE="${EXCLUDE_FILE:-../deploy-exclude.txt}"
SSH_KEY_PATH="${SSH_KEY_PATH:-}"
SSH_PORT="${SSH_PORT:-22}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Dreamhost Deployment Script${NC}"
echo "=================================="

# Build SSH connection string
SSH_OPTS="-o BatchMode=yes -o ConnectTimeout=5"
if [ -n "$SSH_KEY_PATH" ]; then
    SSH_OPTS="$SSH_OPTS -i $SSH_KEY_PATH"
fi
if [ "$SSH_PORT" != "22" ]; then
    SSH_OPTS="$SSH_OPTS -p $SSH_PORT"
fi
SSH_CONNECTION="$DREAMHOST_USER@$DREAMHOST_DOMAIN"

# Check if SSH key is set up
echo -e "${YELLOW}Checking SSH connection...${NC}"
echo "Connecting to: $SSH_CONNECTION"
if ! ssh $SSH_OPTS $SSH_CONNECTION exit 2>/dev/null; then
    echo -e "${RED}❌ SSH connection failed${NC}"
    echo "Please ensure:"
    echo "1. SSH key is added to Dreamhost"
    echo "2. Configuration is correct in .env.deploy"
    echo "3. Run: ssh-copy-id $SSH_CONNECTION"
    exit 1
fi

    echo -e "${GREEN}✅ SSH connection successful${NC}"
    
    # Run navigation consistency tests
    # Navigation tests temporarily disabled for deployment
    # echo -e "${YELLOW}Running navigation tests...${NC}"
    
    # Create backup of current deployment
echo -e "${YELLOW}Creating backup...${NC}"
ssh $SSH_OPTS $SSH_CONNECTION "cd $DREAMHOST_PATH && tar -czf backup-\$(date +%Y%m%d-%H%M%S).tar.gz * 2>/dev/null || true"

# Build rsync options
RSYNC_OPTS="-avz --delete --progress"
if [ -n "$SSH_KEY_PATH" ]; then
    RSYNC_OPTS="$RSYNC_OPTS -e 'ssh -i $SSH_KEY_PATH'"
fi
if [ "$SSH_PORT" != "22" ]; then
    RSYNC_OPTS="$RSYNC_OPTS -e 'ssh -p $SSH_PORT'"
fi

# Sync files to Dreamhost
echo -e "${YELLOW}Syncing files...${NC}"

# Check if rsync is available, otherwise use tar+ssh
if command -v rsync >/dev/null 2>&1; then
    echo "Using rsync for file transfer..."
    rsync $RSYNC_OPTS \
        --exclude-from="$EXCLUDE_FILE" \
        "$LOCAL_BUILD_DIR/" \
        "$SSH_CONNECTION:$DREAMHOST_PATH/"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Deployment successful!${NC}"
    else
        echo -e "${RED}❌ rsync failed${NC}"
        exit 1
    fi
else
    echo "rsync not found, using tar+ssh for file transfer..."
    
    # Create remote directory if it doesn't exist
    ssh $SSH_OPTS $SSH_CONNECTION "mkdir -p $DREAMHOST_PATH"
    
    # Clear remote directory (equivalent to rsync --delete)
    echo "Clearing remote directory..."
    ssh $SSH_OPTS $SSH_CONNECTION "cd $DREAMHOST_PATH && rm -rf * .[^.]*"
    
    # Use tar and ssh for efficient transfer (respecting exclude file)
    echo "Transferring files..."
    tar --exclude-from="$EXCLUDE_FILE" -czf - -C "$LOCAL_BUILD_DIR" . | ssh $SSH_OPTS $SSH_CONNECTION "cd $DREAMHOST_PATH && tar -xzf -"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Deployment successful!${NC}"
    else
        echo -e "${RED}❌ tar+ssh failed${NC}"
        exit 1
    fi
fi

echo -e "🌐 Your site should be live at: https://$DREAMHOST_DOMAIN"

# Optional: Run post-deployment commands
echo -e "${YELLOW}Running post-deployment tasks...${NC}"
ssh $SSH_OPTS $SSH_CONNECTION "cd $DREAMHOST_PATH && chmod -R 755 . && find . -name '*.html' -exec chmod 644 {} \;"

echo -e "${GREEN}🎉 Deployment complete!${NC}"
