#!/bin/bash

# Navigation Consistency Test Script
# Tests all HTML files for navigation consistency issues
# Run before deployment to catch navigation regressions

echo "🔍 Navigation Consistency Test Suite"
echo "===================================="

# Set colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counters
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# Expected navigation links (in order)
EXPECTED_LINKS=(
    "index.html"
    "blog/index.html"
    "projects.html"
    "essays.html"
    "library.html"
    "memes.html"
    "aphorisms.html"
    "drafts.html"
    "photos.html"
    "art.html"
)

# Function to run a test
run_test() {
    local test_name="$1"
    local command="$2"
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    
    if eval "$command" > /dev/null 2>&1; then
        echo -e "${GREEN}✓${NC} $test_name"
        PASSED_TESTS=$((PASSED_TESTS + 1))
        return 0
    else
        echo -e "${RED}✗${NC} $test_name"
        FAILED_TESTS=$((FAILED_TESTS + 1))
        return 1
    fi
}

# Function to run a test with output
run_test_with_output() {
    local test_name="$1"
    local command="$2"
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    
    local output=$(eval "$command" 2>&1)
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $test_name"
        PASSED_TESTS=$((PASSED_TESTS + 1))
        return 0
    else
        echo -e "${RED}✗${NC} $test_name"
        echo -e "${YELLOW}  Details:${NC} $output"
        FAILED_TESTS=$((FAILED_TESTS + 1))
        return 1
    fi
}

echo ""
echo "📋 Testing HTML File Validity..."

# Skip utility files that don't need full navigation
SKIP_FILES=("contact-snippet.html" "newsletter-signup.html" "blog/building-personal-homepage.html")

should_skip_file() {
    local file="$1"
    for skip in "${SKIP_FILES[@]}"; do
        if [[ "$file" == "$skip" ]]; then
            return 0
        fi
    done
    return 1
}

# Test 1: Check all HTML files have valid DOCTYPE
for file in *.html blog/*.html; do
    if [ -f "$file" ] && ! should_skip_file "$file"; then
        run_test "Valid DOCTYPE in $file" "grep -q '<!DOCTYPE html>' '$file'"
    fi
done

echo ""
echo "🔗 Testing Navigation Link Consistency..."

# Test 2: Check for duplicate navigation links
for file in *.html blog/*.html; do
    if [ -f "$file" ] && ! should_skip_file "$file"; then
        run_test_with_output "No duplicate nav links in $file" "
            # Extract all href attributes from nav-links div
            awk '/<div class=\"nav-links\">/,/<\/div>/' '$file' | \
            grep -o 'href=\"[^\"]*\"' | \
            sort | uniq -d | \
            test ! -s /dev/stdin
        "
    fi
done

echo ""
echo "📐 Testing Navigation Structure..."

# Test 3: Check nav-links div exists
for file in *.html blog/*.html; do
    if [ -f "$file" ] && ! should_skip_file "$file"; then
        run_test "Has nav-links div in $file" "grep -q 'class=\"nav-links\"' '$file'"
    fi
done

# Test 4: Check for broken navigation structure
for file in *.html blog/*.html; do
    if [ -f "$file" ] && ! should_skip_file "$file"; then
        run_test "Valid nav structure in $file" "
            # Check that nav-links div is properly closed
            awk '/<div class=\"nav-links\">/,/<\/div>/' '$file' | \
            grep -q '</div>'
        "
    fi
done

echo ""
echo "🎯 Testing Required Navigation Links..."

# Test 5: Check that essential links exist in all pages
ESSENTIAL_LINKS=("index.html" "blog/index.html" "projects.html")

for file in *.html blog/*.html; do
    if [ -f "$file" ] && ! should_skip_file "$file"; then
        for link in "${ESSENTIAL_LINKS[@]}"; do
            # Adjust relative paths for blog directory
            if [[ "$file" == blog/* ]]; then
                test_link="../$link"
                if [ "$link" == "blog/index.html" ]; then
                    test_link="index.html"
                fi
            else
                test_link="$link"
            fi
            
            run_test "Has $link link in $file" "grep -q 'href=\"$test_link\"' '$file'"
        done
    fi
done

echo ""
echo "🚨 Testing for Known Issues..."

# Test 6: Check for specific known issues
run_test "No Projects link duplicates" "! grep -l 'Projects.*Projects' *.html blog/*.html"
run_test "No malformed DOCTYPE" "! grep -l '<!DOCT' *.html blog/*.html"
run_test "No broken HTML structure" "! grep -l 'heet.*html>' *.html blog/*.html"

echo ""
echo "📊 Test Results Summary"
echo "======================"
echo -e "Total Tests: $TOTAL_TESTS"
echo -e "${GREEN}Passed: $PASSED_TESTS${NC}"
echo -e "${RED}Failed: $FAILED_TESTS${NC}"

if [ $FAILED_TESTS -eq 0 ]; then
    echo -e "\n${GREEN}🎉 All navigation tests passed!${NC}"
    exit 0
else
    echo -e "\n${RED}❌ $FAILED_TESTS navigation tests failed.${NC}"
    echo -e "${YELLOW}Please fix the issues above before deploying.${NC}"
    exit 1
fi
