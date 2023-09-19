let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    })
})
function showMensual() {
    document.getElementById("unicaVez").style.display = "none";
    document.getElementById("unicaVezx").style.display = "none";
    document.getElementById("cardDonation").style.display = "block";
    document.getElementById("cardDonationx").style.display = "block";
    document.getElementById("mensual").style.display = "block";
    document.getElementById("mensualx").style.display = "block";
}
function showUnicaVez() {
    document.getElementById("mensual").style.display = "none";
    document.getElementById("mensualx").style.display = "none";
    document.getElementById("cardDonation").style.display = "block";
    document.getElementById("cardDonationx").style.display = "block";
    document.getElementById("unicaVez").style.display = "block";
    document.getElementById("unicaVezx").style.display = "block";
}