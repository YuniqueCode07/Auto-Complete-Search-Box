import { countries } from './data.js';

const input = document.getElementById("autocomplete");
const suggestions = document.getElementById("suggestions");

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD") // si j'ai une lettre avec un accent comme "é" ou "è" alors il retourne un "e" avec un autre caractère devant normalement
        .replace(/[\u0300-\u036f]/g, "") // transforme le nouveau caractère en qlq chose de readable
        .replace(/['’‘`´]/g, "") // le nouveau caractère readable devient alors empty donc est effacé
        .trim(); // enlève les espaces début et fin
}

// Normalize country names only once
const normalizedCountries = countries.map(country => ({
    ...country,
    normalizedName: normalizeText(country.name)
}));

input.addEventListener("input", () => {

    const query = normalizeText(input.value);

    suggestions.innerHTML = "";

    if (query === "") return;

    const filtered = normalizedCountries.filter(country =>
        country.normalizedName.includes(query)
    );

    filtered.forEach(country => {
        const li = document.createElement("li");
        li.textContent = country.name;

        li.addEventListener("click", () => {
            input.value = country.name;
            suggestions.innerHTML = "";
        });

        suggestions.appendChild(li);
    });

});