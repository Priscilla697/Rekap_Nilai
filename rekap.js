const openBtn = document.getElementById("tombol");
const closeBtn = document.getElementById("tutupTugas");
const tugas = document.getElementById("tugas");

openBtn.addEventListener("click", () => {
    tugas.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    tugas.classList.remove("open");
});

const openBtnProfil = document.getElementById("tombol2");
const closeBtnProfil = document.getElementById("tutupProfil");
const profil = document.getElementById("profil");

openBtnProfil.addEventListener("click", () => {
    profil.classList.add("open");
});

closeBtnProfil.addEventListener("click", () => {
    profil.classList.remove("open");
});


