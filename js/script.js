const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
    // Prevent the default behavior because it is a form submission
    e.preventDefault();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;
    
    if (url === "") {
        alert("Please enter a URL");
    } else {
        console.log(url, size);
        showSpinner();

        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);
        }, 1000);
    }
}

const generateQRCode = (url, size) => {
    // First parameter takes in ID
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size
    })
}

const showSpinner = () => {
    document.getElementById("spinner").style.display = "block";
}

const hideSpinner = () => {
    document.getElementById("spinner").style.display = "none";
}

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
