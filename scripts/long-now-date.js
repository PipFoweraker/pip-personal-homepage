/**
 * Long Now Foundation Date Utilities
 * Converts standard dates to 5-digit year format (02025)
 * Following Long Now Foundation's 10,000 Year Clock methodology
 */

class LongNowDate {
    /**
     * Convert a standard date to Long Now format
     * @param {Date|string} date - Date object or ISO string
     * @returns {string} - Date in Long Now format (02025-09-14)
     */
    static toLongNow(date) {
        const d = new Date(date);
        const year = d.getFullYear().toString().padStart(5, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const day = d.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    /**
     * Convert Long Now format back to standard date
     * @param {string} longNowDate - Date in Long Now format (02025-09-14)
     * @returns {Date} - Standard Date object
     */
    static fromLongNow(longNowDate) {
        const [year, month, day] = longNowDate.split('-');
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }

    /**
     * Get current date in Long Now format
     * @returns {string} - Today's date in Long Now format
     */
    static today() {
        return this.toLongNow(new Date());
    }

    /**
     * Format a Long Now date for display
     * @param {string} longNowDate - Date in Long Now format
     * @param {Object} options - Formatting options
     * @returns {string} - Formatted date string
     */
    static format(longNowDate, options = {}) {
        const date = this.fromLongNow(longNowDate);
        const { style = 'full', includeYear = true } = options;
        
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        const year = longNowDate.split('-')[0];
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        
        switch (style) {
            case 'full':
                return includeYear ? `${month} ${day}, ${year}` : `${month} ${day}`;
            case 'short':
                return longNowDate;
            case 'medium':
                return includeYear ? `${month} ${year}` : month;
            default:
                return longNowDate;
        }
    }

    /**
     * Convert all dates in an object to Long Now format
     * @param {Object} obj - Object containing date fields
     * @param {Array} dateFields - Array of field names containing dates
     * @returns {Object} - Object with converted dates
     */
    static convertObjectDates(obj, dateFields = ['date', 'created', 'updated', 'published']) {
        const converted = { ...obj };
        
        dateFields.forEach(field => {
            if (converted[field]) {
                converted[field] = this.toLongNow(converted[field]);
            }
        });
        
        return converted;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LongNowDate;
}

// Global availability for browser use
if (typeof window !== 'undefined') {
    window.LongNowDate = LongNowDate;
}
