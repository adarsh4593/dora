
document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("paymentModal");
    const orderButtons = document.querySelectorAll(".order-btn");
    const closeBtn = document.querySelector(".close-modal");
    const summary = document.getElementById("orderSummary");
    const payBtn = document.getElementById("confirmPayment");

    // OPEN MODAL
    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const item = button.dataset.item;
            const price = button.dataset.price;

            summary.innerHTML = `<strong>${item}</strong> – $${price}`;
            modal.style.display = "flex";
        });
    });

    // CLOSE MODAL
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // CLOSE ON BACKDROP CLICK
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // PAYMENT ACTION
    if (payBtn) {
        payBtn.addEventListener("click", () => {
            payBtn.innerText = "Processing...";
            payBtn.disabled = true;

            setTimeout(() => {
                alert("Payment Successful! 🥞✨ Thank you for ordering.");
                modal.style.display = "none";
                payBtn.innerText = "Pay Securely";
                payBtn.disabled = false;
            }, 2000);
        });
    }

});
