// js/calculator.js

document.addEventListener('DOMContentLoaded', function () {
    // Define price constants in a PRICES object for easy updates
    const PRICES = {
        site: 100,
        server: 30,
        pc: 12
    };

    // Get the total element and store the original color
    const totalElement = document.getElementById('total');
    const originalColor = window.getComputedStyle(totalElement).color;
    let colorTimeout; // Variable to keep track of the timeout

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
     * Updates the displayed cost breakdown and total on the webpage.
     * @param {object} costs - An object containing individual costs.
     */
    function updateDisplay(costs) {
        let total = costs.siteCost + costs.serverCost + costs.pcCost;

        // Format options for currency display
        const formatOptions = { style: 'currency', currency: 'EUR' };

        // Update the DOM with formatted cost values
        document.getElementById('siteCost').textContent = costs.siteCost.toLocaleString('en-IE', formatOptions);
        document.getElementById('serverCost').textContent = costs.serverCost.toLocaleS
