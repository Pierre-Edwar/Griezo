const cards = document.querySelectorAll(".feature-card");
const modal = document.getElementById("bitModal");
const closeBit = document.getElementById("closeBit");
const bitOptions = document.querySelectorAll(".bit-option");
const downloadBtn = document.getElementById("downloadBtn");

let selected32 = "";
let selected64 = "";
let selectedBit = "";

cards.forEach(card => {
    card.onclick = () => {
        selected32 = card.dataset.link32;
        selected64 = card.dataset.link64;
        modal.style.display = "flex";
    }
});

bitOptions.forEach(opt => {
    opt.onclick = () => {
        bitOptions.forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
        selectedBit = opt.dataset.bit;
        downloadBtn.disabled = false;
    };
});

downloadBtn.onclick = () => {
    if (selectedBit === "32") {
        window.open(selected32, "_blank");
    } else {
        window.open(selected64, "_blank");
    }
};

closeBit.onclick = () => {
    modal.style.display = "none";
};
