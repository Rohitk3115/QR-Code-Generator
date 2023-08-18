document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const qrInput = wrapper.querySelector(".form input");
    const generateBtn = wrapper.querySelector(".form button");
    const qrImg = wrapper.querySelector(".QR img");

    generateBtn.addEventListener("click", () => {
        let qrValue = qrInput.value;
        if (!qrValue) return;
        generateBtn.innerHTML = "Generating QR code...";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
        qrImg.addEventListener("load", () => {
            wrapper.classList.add("active");
            generateBtn.innerHTML = "Generate QR Code";
        });
    });

    qrInput.addEventListener("keyup", () => {
        if (!qrInput.value) {
            wrapper.classList.remove("active");
        }
    });
});

