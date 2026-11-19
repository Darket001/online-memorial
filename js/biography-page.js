const params = new URLSearchParams(window.location.search);
const personId = params.get("person");
const person = biographies.find((item) => item.id === personId);

if (person) {
  document.title = `${person.fullName} | Онлайн-мемориал`;
  document.querySelector("#person-name").textContent = person.fullName;
  document.querySelector("#person-years").textContent = person.years;

  if (person.photo) {
    const photo = document.querySelector("#person-photo");
    photo.src = person.photo;
    photo.alt = `Фотография: ${person.fullName}`;
    photo.hidden = false;
  }
  if (person.original) {
    const original = document.querySelector("#original-link");
    original.href = person.original;
    original.hidden = false;
  }

  const story = document.querySelector("#person-story");
  story.innerHTML = "";
  person.sections.forEach((section) => {
    const block = document.createElement("section");
    const heading = document.createElement("h2");
    const paragraph = document.createElement("p");
    heading.textContent = section.title;
    paragraph.textContent = section.text;
    block.append(heading, paragraph);
    story.appendChild(block);
  });
} else {
  document.querySelector("#person-name").textContent = "Биография не найдена";
  document.querySelector("#person-years").textContent = "Проверьте ссылку или вернитесь к мемориальной доске.";
  document.querySelector("#person-story").textContent = "";
}
