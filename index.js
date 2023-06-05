const body = document.querySelector(".body");

const noteTitle = document.getElementById("input-heading");
const noteDescription = document.getElementById("input-content");
const wordsCounter = document.getElementById("total-words");

// add-button functionality
const addBtn = document.getElementById("add-button");
addBtn.addEventListener("click", createCard);

function createCard() {
    // creating a new card
    const card = document.createElement('div');
    card.classList.add('container');

    // Creating a header of a card ->
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('heading');

    const cardTitle = document.createElement('input')

    const titleAttr = {
        id: "inputHeading",
        placeholder: "Title",
        type: "text"
    }
    for (const attr in titleAttr) {
        cardTitle.setAttribute(attr, titleAttr[attr]);
    }

    cardHeader.appendChild(cardTitle);

    // Creating a body of a card ->
    const cardBody = document.createElement('div');
    cardBody.setAttribute("class", "content");
    const cardDescription = document.createElement('textarea');

    const descriptionAttr = {
        id: "input-content",
        name: "note",
        placeholder: "Take a note...",
        cols: "29",
        rows: "10"
    }

    for (const attr in descriptionAttr) {
        cardDescription.setAttribute(attr, descriptionAttr[attr]);
    }

    const wordCounterEl = document.createElement("small");
    wordCounterEl.setAttribute("id", "total-words");
    wordCounterEl.textContent = "Total words : 0";

    cardBody.appendChild(cardDescription);
    cardBody.appendChild(wordCounterEl);

    function countWords() {
        const text = cardDescription.value.trim();
        const words = text.split(/\s+/).filter((item) => item).length;
        wordCounterEl.textContent = "Total words : " + words;
    }
    cardDescription.addEventListener("input", countWords);

    // Button section of the card ->
    const cardBtn = document.createElement("div");
    cardBtn.setAttribute("class", "btn");

    // Creating a save btn ->
    const saveBtn = document.createElement("button");
    saveBtn.setAttribute("id", "save-btn");
    saveBtn.textContent = "Save";

    saveBtn.addEventListener("click", createCard);

    // Creating a delete btn ->
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "delete-btn");
    deleteBtn.textContent = "Delete";

    cardBtn.appendChild(saveBtn);
    cardBtn.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteContent);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardBtn);

    body.appendChild(card);
}

// to count words entered in notes description area
function countWords() {
    const text = noteDescription.value.trim();
    const words = text.split(/\s+/).filter((item) => item).length;
    wordsCounter.textContent = "Total words : " + words;
}
noteDescription.addEventListener("input", countWords);


// save button functionality
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", createCard);


// delete button functionality
const deleteBtn = document.getElementById("delete-btn");

function deleteContent(event) {
    const card = event.target.closest('.container');
    const cardTitle = card.querySelector('.heading input');
    const cardDescription = card.querySelector('.content textarea');

    if (cardTitle && cardDescription) {
        cardTitle.value = "";
        cardDescription.value = "";
    }
}

deleteBtn.addEventListener("click", deleteContent);
