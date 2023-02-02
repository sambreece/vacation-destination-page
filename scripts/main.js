//Form Submission Event:
destination_form.addEventListener("submit",(event) => {
    event.preventDefault();
    generateCard(getUserInput());
});

//Buttons on Cards:
cards_container.addEventListener("click",(event) => {
    if(event.target.textContent === "Remove")
    document.body.style.backgroundColor = 'gray';
})

function getUserInput(){
    //Store user input
    const userInput = {
    name: document.querySelector("#destination_name").value,
    location: document.querySelector("#destination_location").value,
    photo: document.querySelector("#destination_photo").value,
    description: document.querySelector("#destination_description").value
    };

    //Clear form
    document.querySelector("#destination_name").value = "";
    document.querySelector("#destination_location").value ="";
    document.querySelector("#destination_photo").value = "";
    document.querySelector("#destination_description").value = "";
    return userInput;
}

function generateCard (userInput) {
    const newCard = makeBlankCard();
    newCard.querySelector(".card-title").textContent = userInput.name;
    newCard.querySelector(".card-subtitle").textContent = userInput.location;

    if(userInput.photo !== null && userInput.photo.length > 0) {
        newCard.querySelector(".card-img-top").setAttribute("src", userInput.photo);
    }
    if(userInput.description !== null && userInput.description.length > 0) {
        newCard.querySelector(".card-text").textContent = userInput.description;
    }
    cards_container.appendChild(newCard);
}

function makeBlankCard() {
    const newCard = document.createElement("div");
    newCard.setAttribute("class","card");
    newCard.setAttribute("style", "width: 18rem;");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("class","card-img-top");
    cardImg.setAttribute("src", "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg");
    cardImg.setAttribute("alt","Card image cap");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");
    cardBody.setAttribute("style", "max-height: 10rem;");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class","card-title");

    const cardSubtitle = document.createElement("h6");
    cardSubtitle.setAttribute("class","card-subtitle mb-2 text-muted");

    const cardText = document.createElement("p");
    cardText.setAttribute("class","card-text");

    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class","d-flex justify-content-between");
    
    const editButton = document.createElement("a");
    editButton.setAttribute("class","btn btn-warning");
    editButton.setAttribute("href", "#");
    editButton.textContent ='Edit';

    const deleteButton = document.createElement("a");
    deleteButton.setAttribute("class","btn btn-danger");
    deleteButton.setAttribute("href", "#");
    deleteButton.textContent='Remove';

    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deleteButton);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(buttonDiv);

    newCard.appendChild(cardImg);
    newCard.appendChild(cardBody);

    return newCard;
}
