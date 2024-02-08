//declare three const variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//define an error message section
const error = document.createElement('section');

//populate the error message section with text
error.textContent = 'Please enter a chapter to add, and click Add Chapter again.';

//set the style for the error message
error.style.color = 'red';
error.style.border = 'solid';
error.style.backgroundColor = 'white';
error.style.display = 'none';

//append the error message section to the main element
document.querySelector('main').append(error);

//Create a click event listener
button.addEventListener('click', () => {

    //check to make sure the input is not blank
    if (input.value != '') {

        //create a li element
        const item = document.createElement('li');

        //create a delete button
        const deleteButton = document.createElement('button');

        //populate the li elements textContent or innerHTML with the input value
        item.textContent = input.value;

        //populate the button textContent with a ❌
        deleteButton.textContent = '❌';

        //append the li element with the delete button
        item.append(deleteButton);

        //append the li element to the unordered list in your HTML
        list.append(item);

        //add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(item);

            //send the focus to the input element
            input.focus();
        });

        //change the input value to nothing or the empty string to clean up the interface for the user
        input.value = '';

        //hide the error message block
        error.style.display = 'none';
    }
    else {
        //If the button was clicked but no input, display the error message
        error.style.display = 'block';
    }
});