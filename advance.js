// Function to show a loading spinner
function showLoadingSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    spinner.style.display = "block"; // Show the spinner
}

// Function to hide the loading spinner
function hideLoadingSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    spinner.style.display = "none"; // Hide the spinner
}

// Function to generate QR Code
function generateQRCode() {
    var amount = document.getElementById("money").value;
    var amountError = document.getElementById("amountError");
    var successMessage = document.getElementById("successMessage");

    // Input validation
    if (amount === "" || isNaN(amount) || amount <= 0) {
        amountError.style.display = 'block'; // Show error message
        successMessage.style.display = 'none'; // Hide success message
        return;
    } else {
        amountError.style.display = 'none'; // Hide error message
    }

    // Show loading spinner
    showLoadingSpinner();

    // Clear existing QR code and success message
    document.getElementById("upi").innerHTML = "";
    successMessage.style.display = 'none';

    // Simulate a delay for the QR code generation (for demo purposes)
    setTimeout(() => {
        // Generate the QR code
        var upiUrl = `upi://pay?pa=prince05025646-1@oksbi&pn=PRINCE FONDATION&am=${amount}&cu=INR`;
        new QRCode(document.getElementById("upi"), {
            text: upiUrl,
            width: 150,
            height: 150,
            colorDark: "#000",
            colorLight: "#fff"
        });

        // Hide loading spinner
        hideLoadingSpinner();

        // Show success message
        successMessage.style.display = 'block';
        successMessage.innerText = `QR Code generated successfully! Amount: ₹${amount}`;
    }, 1000); // Simulated delay of 1 second
}

// Function to clear messages and QR code on focus
function clearMessages() {
    document.getElementById("amountError").style.display = 'none';
    document.getElementById("successMessage").style.display = 'none';
}

// Attach event listeners
document.getElementById("money").addEventListener("focus", clearMessages);
