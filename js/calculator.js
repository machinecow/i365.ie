// js/calculator.js

document.addEventListener('DOMContentLoaded', function () {
    // Existing calculator code
    // ...

    // Get references to calculator inputs
    const siteInput = document.getElementById('sites');
    const serverInput = document.getElementById('servers');
    const pcInput = document.getElementById('pcs');

    // Disable calculator inputs initially
    siteInput.disabled = true;
    serverInput.disabled = true;
    pcInput.disabled = true;

    // Handle the user info modal
    const modal = document.getElementById('user-info-modal');
    const userInfoForm = document.getElementById('user-info-form');

    // Show the modal when the page loads
    modal.style.display = 'block';

    // Handle form submission
    userInfoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get user input values
        const userName = document.getElementById('user-name').value.trim();
        const userEmail = document.getElementById('user-email').value.trim();

        // Simple validation (already required in HTML)
        if (userName && userEmail) {
            // Hide the modal
            modal.style.display = 'none';

            // Enable calculator inputs
            siteInput.disabled = false;
            serverInput.disabled = false;
            pcInput.disabled = false;

            // Optionally, store the user info or send it to a server here

            // Initialize calculation now that inputs are enabled
            calculateTotal();
        } else {
            // Display an error message if needed
            alert('Please fill in both your name and email address.');
        }
    });

    // Existing event listeners and functions
    // ...

    // Modify calculateTotal function to check if inputs are disabled
    function calculateTotal() {
        // Prevent calculation if inputs are disabled
        if (siteInput.disabled) {
            return;
        }

        // Existing calculation code
        // ...
    }

    // No need to call calculateTotal() on page load since inputs are disabled
});
