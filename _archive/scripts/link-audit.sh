#!/bin/bash

# Link Audit Script for Personal Homepage
# Checks for broken internal links and missing files

echo "🔍 Personal Homepage Link Audit"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if a file exists relative to project root
check_file() {
    local file_path="$1"
    local source_file="$2"
    
    # Convert relative paths to absolute from project root
    if [[ "$file_path" == ../* ]]; then
        # Handle paths like ../index.html from blog directory
        file_path=$(echo "$file_path" | sed 's|^../||')
    elif [[ "$file_path" == blog/* ]]; then
        # Paths like blog/index.html are already relative to root
        file_path="$file_path"
    elif [[ "$file_path" != http* ]] && [[ "$file_path" != "#"* ]]; then
        # Regular relative paths like memes.html
        file_path="$file_path"
    fi
    
    if [[ "$file_path" == http* ]] || [[ "$file_path" == "#"* ]]; then
        # Skip external links and anchors
        return 0
    fi
    
    if [ -f "$file_path" ]; then
        echo -e "${GREEN}✓${NC} $file_path (from $source_file)"
        return 0
    else
        echo -e "${RED}✗${NC} Missing: $file_path (referenced in $source_file)"
        return 1
    fi
}

broken_links=0
total_links=0

echo -e "\n📋 Checking HTML files for broken internal links...\n"

# Find all HTML files and extract href attributes
for html_file in $(find . -name "*.html" -not -path "./node_modules/*"); do
    echo -e "${YELLOW}Checking:${NC} $html_file"
    
    # Extract href attributes using grep and sed
    hrefs=$(grep -o 'href="[^"]*"' "$html_file" 2>/dev/null | sed 's/href="//g' | sed 's/"//g')
    
    for href in $hrefs; do
        # Skip empty hrefs, external links, anchors, and javascript
        if [[ -n "$href" ]] && [[ "$href" != http* ]] && [[ "$href" != "#"* ]] && [[ "$href" != "javascript:"* ]]; then
            ((total_links++))
            
            # Adjust path based on source file location
            if [[ "$html_file" == ./blog/* ]]; then
                # For files in blog directory, adjust relative paths
                if [[ "$href" != ../* ]]; then
                    adjusted_href="../$href"
                else
                    adjusted_href="$href"
                fi
            else
                adjusted_href="$href"
            fi
            
            if ! check_file "$adjusted_href" "$html_file"; then
                ((broken_links++))
            fi
        fi
    done
    echo ""
done

echo -e "\n📊 Audit Summary"
echo "=================="
echo -e "Total internal links checked: $total_links"
echo -e "Broken links found: ${RED}$broken_links${NC}"

if [ $broken_links -eq 0 ]; then
    echo -e "${GREEN}🎉 All internal links are working!${NC}"
    exit 0
else
    echo -e "${RED}⚠️  Found $broken_links broken link(s) that need fixing${NC}"
    exit 1
fi
