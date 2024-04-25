import React, { useState } from 'react';

function MonetaryFormatter() {
    function formatMonetaryValue(number) {
        if (isNepali) {
            const parts = number.toFixed(2).toString().split('.');
            const integerPart = parts[0];

            let formattedIntegerPart = '';

            // Format the first three digits
            const firstThreeDigits = integerPart.substring(0, integerPart.length - 3);
            if (integerPart.length < 3 || integerPart.length === 3) {
                formattedIntegerPart += firstThreeDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + '';
            } else {
                formattedIntegerPart += firstThreeDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + ',';
            }

            // Format the remaining digits with commas every two digits
            const remainingDigits = integerPart.substring(integerPart.length - 3);
            formattedIntegerPart += remainingDigits.replace(/\B(?=(\d{2})+(?!\d))/g, "");

            return formattedIntegerPart + '.' + parts[1];
        } else {
            const formatted = number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            return formatted;
        }
    }

    const [number, setNumber] = useState(0);
    const [isNepali, setIsNepali] = useState(false);

    function handleInputChange(event) {
        setNumber(parseFloat(event.target.value));
    }

    function handleToggleUnits() {
        setIsNepali(!isNepali);
    }

    return (
        <div>
            <h2>Monetary Formatter</h2>
            <input type="number" value={number} onChange={handleInputChange} />
            <button onClick={handleToggleUnits}>Toggle Units</button>
            <p>{formatMonetaryValue(number)}</p>
            <p>Format: {isNepali ? 'Nepali' : 'International'}</p>
        </div>
    );
}

export default MonetaryFormatter;
