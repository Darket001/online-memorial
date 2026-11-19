const namesList = document.querySelector("#names-list");
if (namesList && Array.isArray(biographies)) {
  biographies.forEach((person) => {
    const link = document.createElement("a");
    link.className = "name-link";
    link.href = `biography.html?person=${encodeURIComponent(person.id)}`;
    link.textContent = person.surname;
    namesList.appendChild(link);
  });
}
