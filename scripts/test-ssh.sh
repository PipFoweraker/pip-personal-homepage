#!/bin/bash

# SSH Connection Test for Dreamhost
# Tests your SSH setup before deployment

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Read config from deployment script
DREAMHOST_USER=$(grep 'DREAMHOST_USER=' scripts/deploy-dreamhost.sh | cut -d'"' -f2)
DREAMHOST_DOMAIN=$(grep 'DREAMHOST_DOMAIN=' scripts/deploy-dreamhost.sh | cut -d'"' -f2)

echo -e "${YELLOW}🧪 Testing SSH connection to Dreamhost${NC}"
echo "==========================================="
echo "User: $DREAMHOST_USER"
echo "Domain: $DREAMHOST_DOMAIN"
echo ""

# Test 1: Basic SSH connection
echo -e "${YELLOW}Test 1: Basic SSH connection...${NC}"
if ssh -o BatchMode=yes -o ConnectTimeout=10 $DREAMHOST_USER@$DREAMHOST_DOMAIN exit 2>/dev/null; then
    echo -e "${GREEN}✅ SSH connection successful${NC}"
else
    echo -e "${RED}❌ SSH connection failed${NC}"
    echo "Try: ssh-copy-id $DREAMHOST_USER@$DREAMHOST_DOMAIN"
    exit 1
fi

# Test 2: Check web directory
echo -e "${YELLOW}Test 2: Checking web directory...${NC}"
WEB_DIR="/home/$DREAMHOST_USER/$DREAMHOST_DOMAIN"
if ssh $DREAMHOST_USER@$DREAMHOST_DOMAIN "test -d $WEB_DIR" 2>/dev/null; then
    echo -e "${GREEN}✅ Web directory exists: $WEB_DIR${NC}"
else
    echo -e "${RED}❌ Web directory not found: $WEB_DIR${NC}"
    echo "You may need to create it or check the path"
fi

# Test 3: Check write permissions
echo -e "${YELLOW}Test 3: Testing write permissions...${NC}"
if ssh $DREAMHOST_USER@$DREAMHOST_DOMAIN "touch $WEB_DIR/test_file.tmp && rm $WEB_DIR/test_file.tmp" 2>/dev/null; then
    echo -e "${GREEN}✅ Write permissions OK${NC}"
else
    echo -e "${RED}❌ Cannot write to web directory${NC}"
    echo "Check directory permissions"
fi

# Test 4: Check rsync availability
echo -e "${YELLOW}Test 4: Checking rsync...${NC}"
if ssh $DREAMHOST_USER@$DREAMHOST_DOMAIN "which rsync" >/dev/null 2>&1; then
    echo -e "${GREEN}✅ rsync is available${NC}"
else
    echo -e "${RED}❌ rsync not found${NC}"
    echo "rsync is required for deployment"
fi

echo ""
echo -e "${GREEN}🎉 SSH setup test complete!${NC}"
echo "If all tests passed, you're ready to deploy with:"
echo "./scripts/deploy-dreamhost.sh"
