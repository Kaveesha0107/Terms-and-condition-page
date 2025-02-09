document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.parentElement.nextElementSibling;
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            this.textContent = "−"; // Change to minus
        } else {
            content.style.display = "none";
            this.textContent = "+"; // Change to plus
        }
    });
});
