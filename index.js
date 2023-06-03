const inputHeading = document.getElementsByClassName("heading");

const body = document.querySelector(".body");

// add-button functionality

const addBtn = document.getElementById("add-button");

addBtn.addEventListener("click", createCard);

function createCard() {
    // creating a new card

    const inputHeading = `<div class="heading">
        <input id="input-heading" type="text" placeholder="Title">
    </div>`;


    const inputContent = `<div class="content">
<textarea id="input-content" name="note" placeholder="Take a note..." cols="29" rows="10"></textarea>
</div>`;

    const Btn = `<div class="btn">
    <button id="save-btn">Save</button>
    <button id="delete-btn">Delete</button>
</div>`;
    const card = document.createElement('div');
    card.classList.add('container');

    card.innerHTML = `
    ${inputHeading}
    ${inputContent}
    ${Btn}  
    `
    body.appendChild(card);
}