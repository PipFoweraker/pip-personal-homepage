# Dreamhost SSH Deployment Setup

## Quick Setup Guide

### 1. Configure Your Details
Edit `scripts/deploy-dreamhost.sh` and update:
```bash
DREAMHOST_USER="your_dreamhost_username"  # Your Dreamhost username
DREAMHOST_DOMAIN="your_domain.com"        # Your domain name
```

### 2. Set Up SSH Key Authentication
```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Copy SSH key to Dreamhost
ssh-copy-id your_username@your_domain.com

# Test SSH connection
ssh your_username@your_domain.com
```

### 3. Dreamhost Panel Configuration
1. Log into Dreamhost panel
2. Go to **Manage Domains** → **Add Hosting to a Domain**
3. Set your domain to point to the correct directory
4. Enable SSH access for your user

### 4. Deploy Your Site
```bash
# Make deployment script executable
chmod +x scripts/deploy-dreamhost.sh

# Run deployment
./scripts/deploy-dreamhost.sh
```

## SSH Key Setup (Detailed)

### Option 1: Using ssh-copy-id (Recommended)
```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub username@domain.com
```

### Option 2: Manual Setup
```bash
# Copy your public key
cat ~/.ssh/id_rsa.pub

# SSH to Dreamhost and add to authorized_keys
ssh username@domain.com
mkdir -p ~/.ssh
echo "your_public_key_here" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
exit
```

## Deployment Features

- ✅ **Automatic backup** before each deployment
- ✅ **Rsync synchronization** for efficient transfers
- ✅ **File exclusions** (git files, scripts, etc.)
- ✅ **Permission fixing** for web files
- ✅ **Progress indicators** during transfer
- ✅ **Error handling and rollback** capability

## Troubleshooting

### SSH Connection Issues
```bash
# Test SSH connection
ssh -v username@domain.com

# Check SSH key is loaded
ssh-add -l

# Force SSH key usage
ssh -i ~/.ssh/id_rsa username@domain.com
```

### File Permission Issues
```bash
# Fix permissions manually
ssh username@domain.com
cd /home/username/domain.com
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
```

### Dreamhost-Specific Notes
- Default web directory: `/home/username/domain.com/`
- SSH hostname is usually your domain name
- Enable shell access in Dreamhost panel if needed
- Some shared hosting plans may have SSH restrictions

## Git Integration

### Auto-deploy on push (Optional)
Add to your git workflow:
```bash
# After committing changes
git push origin master && ./scripts/deploy-dreamhost.sh
```

### Create deployment alias
Add to your `.bashrc` or `.zshrc`:
```bash
alias deploy-site="cd /path/to/your/repo && ./scripts/deploy-dreamhost.sh"
```
