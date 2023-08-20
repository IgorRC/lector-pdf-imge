document.addEventListener("DOMContentLoaded", () => {
    const imageInput = document.getElementById("imageInput");
    const ocrButton = document.getElementById("ocrButton");
    const ocrResult = document.getElementById("ocrResult");

    ocrButton.addEventListener("click", async () => {
    const file = imageInput.files[0];
    if (file) {
        // Mostrar el modal de carga
        const loadingModal = document.getElementById("loadingModal");
        loadingModal.style.display = "flex";

        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch("/process-image", {
            method: "POST",
            body: formData,
        });

        const text = await response.text();
        ocrResult.textContent = text;

        // Ocultar el modal de carga después de completar la operación
        loadingModal.style.display = "none";
    }
});
    
});


