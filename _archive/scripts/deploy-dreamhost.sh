#!/bin/bash

# Dreamhost SSH Deployment Script
# This script deploys your personal homepage to Dreamhost via SSH

# Configuration
DREAMHOST_USER="your_dreamhost_username"
DREAMHOST_DOMAIN="your_domain.com"
DREAMHOST_PATH="/home/$DREAMHOST_USER/$DREAMHOST_DOMAIN"
LOCAL_BUILD_DIR="."
EXCLUDE_FILE="deploy-exclude.txt"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Dreamhost Deployment Script${NC}"
echo "=================================="

# Check if SSH key is set up
echo -e "${YELLOW}Checking SSH connection...${NC}"
if ! ssh -o BatchMode=yes -o ConnectTimeout=5 $DREAMHOST_USER@$DREAMHOST_DOMAIN exit 2>/dev/null; then
    echo -e "${RED}❌ SSH connection failed${NC}"
    echo "Please ensure:"
    echo "1. SSH key is added to Dreamhost"
    echo "2. Update DREAMHOST_USER and DREAMHOST_DOMAIN in this script"
    echo "3. Run: ssh-copy-id $DREAMHOST_USER@$DREAMHOST_DOMAIN"
    exit 1
fi

echo -e "${GREEN}✅ SSH connection successful${NC}"

# Create backup of current deployment
echo -e "${YELLOW}Creating backup...${NC}"
ssh $DREAMHOST_USER@$DREAMHOST_DOMAIN "cd $DREAMHOST_PATH && tar -czf backup-\$(date +%Y%m%d-%H%M%S).tar.gz * 2>/dev/null || true"

# Sync files using rsync
echo -e "${YELLOW}Syncing files...${NC}"
rsync -avz --delete \
    --exclude-from="$EXCLUDE_FILE" \
    --progress \
    "$LOCAL_BUILD_DIR/" \
    "$DREAMHOST_USER@$DREAMHOST_DOMAIN:$DREAMHOST_PATH/"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "🌐 Your site should be live at: https://$DREAMHOST_DOMAIN"
    
    # Optional: Run post-deployment commands
    echo -e "${YELLOW}Running post-deployment tasks...${NC}"
    ssh $DREAMHOST_USER@$DREAMHOST_DOMAIN "cd $DREAMHOST_PATH && chmod -R 755 . && find . -name '*.html' -exec chmod 644 {} \;"
    
    echo -e "${GREEN}🎉 Deployment complete!${NC}"
else
    echo -e "${RED}❌ Deployment failed${NC}"
    exit 1
fi
