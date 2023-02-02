//Form Submission Event:
destination_form.addEventListener("submit",(event) => {
    event.preventDefault();
    document.body.style.backgroundColor = 'gray';
    console.log(getUserInput());
});

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