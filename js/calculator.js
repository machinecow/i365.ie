// js/calculator.js

document.addEventListener('DOMContentLoaded', function () {
    // Define price constants in a PRICES object for easy updates
    const PRICES = {
        site: 100,
        server: 30,
        pc: 12
    };

    /**
     * Retrieves and validates the numerical input from a specified element ID.
     * @param {string} id - The ID of the input element.
     * @returns {number} - The validated numerical value or 0 if invalid.
     */
    function getInputValue(id) {
        const value = Number(document.getElementById(id).value);
        return isNaN(value) || value < 0 ? 0 : value;
    }

    /**
     * Calculates individual costs based on quantities and unit prices.
     * @param {number} sites - The number of sites.
     * @param {number} servers - The number of servers.
     * @param {number} pcs - The number of PCs/Laptops/VMs.
     * @returns {object} - An object containing the calculated costs.
     */
    function calculateCosts(sites, servers, pcs) {
        return {
            siteCost: sites * PRICES.site,
            serverCost: servers * PRICES.server,
            pcCost: pcs * PRICES.pc,
        };
    }

    /**
     * Generates a random color in hexadecimal format.
     * @returns {string} - A string representing a hex color code.
     */
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /**
     * Updates the displayed cost breakdown and total on the webpage.
     * @param {object} costs - An object containing individual costs.
     */
    function updateDisplay(costs) {
        let total = costs.siteCost + costs.serverCost + costs.pcCost;

        // Format options for currency display
        const formatOptions = { style: 'currency', currency: 'EUR' };

        // Update the DOM with formatted cost values
        document.getElementById('siteCost').textContent = costs.siteCost.toLocaleString('en-IE', formatOptions);
        document.getElementById('serverCost').textContent = costs.serverCost.toLocaleString('en-IE', formatOptions);
        document.getElementById('pcCost').textContent = costs.pcCost.toLocaleString('en-IE', formatOptions);
        document.getElementById('total').textContent = total.toLocaleString('en-IE', formatOptions);

        // Change the color of the total to a random color for one second
        const totalElement = document.getElementById('total');
        const originalColor = window.getComputedStyle(totalElement).color;
        const randomColor = getRandomColor();

        totalElement.style.color = randomColor;

        // Revert back to the original color after one second
        setTimeout(() => {
            totalElement.style.color = originalColor;
        }, 1000);
    }

    /**
     * Main function to calculate the total cost and update the display.
     */
    function calculateTotal() {
        const sites = getInputValue('sites');
        const servers = getInputValue('servers');
        const pcs = getInputValue('pcs');

        // Input validation and error handling
        if (sites === 0 && servers === 0 && pcs === 0) {
            document.getElementById('error-message').textContent = 'Please enter at least one quantity.';
            return;
        } else {
            document.getElementById('error-message').textContent = '';
        }

        const costs = calculateCosts(sites, servers, pcs);
        updateDisplay(costs);
    }

    // Event listeners for real-time calculation
    document.getElementById('sites').addEventListener('input', calculateTotal);
    document.getElementById('servers').addEventListener('input', calculateTotal);
    document.getElementById('pcs').addEventListener('input', calculateTotal);

    // Initialize calculation on page load
    calculateTotal();
});
