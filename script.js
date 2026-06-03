const search = document.getElementById("search");

search.addEventListener("keyup", () => {
const termo = search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card => {
const texto = card.innerText.toLowerCase();

card.style.display =
texto.includes(termo) ? "block" : "none";
});
});
