#!/bin/bash

# Dreamhost SSH Setup Helper
# This script helps configure SSH deployment for Dreamhost

echo "🔧 Dreamhost SSH Setup Helper"
echo "============================="

# Get user details
read -p "Enter your Dreamhost username: " DREAMHOST_USER
read -p "Enter your domain (e.g., yourdomain.com): " DREAMHOST_DOMAIN

# Update deployment script
echo "📝 Updating deployment script..."
sed -i "s/DREAMHOST_USER=\"your_dreamhost_username\"/DREAMHOST_USER=\"$DREAMHOST_USER\"/g" scripts/deploy-dreamhost.sh
sed -i "s/DREAMHOST_DOMAIN=\"your_domain.com\"/DREAMHOST_DOMAIN=\"$DREAMHOST_DOMAIN\"/g" scripts/deploy-dreamhost.sh

echo "✅ Configuration updated!"

# Check for SSH key
if [ ! -f ~/.ssh/id_rsa.pub ]; then
    echo "🔑 No SSH key found. Generating one..."
    read -p "Enter your email for SSH key: " EMAIL
    ssh-keygen -t rsa -b 4096 -C "$EMAIL" -f ~/.ssh/id_rsa -N ""
    echo "✅ SSH key generated!"
fi

echo ""
echo "🚀 Next steps:"
echo "1. Copy your SSH key to Dreamhost:"
echo "   ssh-copy-id $DREAMHOST_USER@$DREAMHOST_DOMAIN"
echo ""
echo "2. Test SSH connection:"
echo "   ssh $DREAMHOST_USER@$DREAMHOST_DOMAIN"
echo ""
echo "3. Deploy your site:"
echo "   chmod +x scripts/deploy-dreamhost.sh"
echo "   ./scripts/deploy-dreamhost.sh"
echo ""
echo "📚 See docs/DEPLOYMENT.md for detailed instructions"
