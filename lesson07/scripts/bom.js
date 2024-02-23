//declare three const variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//define an error message section
const error = document.createElement('section');

//declare an array named chaptersArray and assign it to the result of getChapterList() or an empty list
let chaptersArray = getChapterList() || [];

//use forEach on the chaptersArray to process each entry named chapter and anarrow function to call displayList(chapter)
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

//populate the error message section with text
error.classList.add('error');
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

        //call displayList with the input.value arguement
        displayList(input.value);

        //push the input.value into the chaptersArray
        chaptersArray.push(input.value);

        //update the localStorage with the new array by calling a function named setChapterList
        setChapterList();

        //change the input value to nothing or the empty string to clean up the interface for the user
        input.value = '';

        //send the focus to the input element
        input.focus();

        //hide the error message block
        error.style.display = 'none';
    }
    else {
        //If the button was clicked but no input, display the error message
        error.style.display = 'block';
    }
});

//create the displayList defined function that receives one parameter named item
function displayList(item) {
    //create a li element
    let li = document.createElement('li');

    //create a delete button
    let deletebutton = document.createElement('button');

    //populate the li elements textContent or innerHTML with the input value
    li.textContent = item;

    //populate the button textContent with a ❌
    deletebutton.textContent = '❌';

    //add 'delete' to the class list for the delete button
    deletebutton.classList.add('delete');

    //append the li element with the delete button
    li.append(deletebutton);

    //append the li element to the unordered list in your HTML
    list.append(li);

    //add an event listener to the delete button that removes the li element when clicked
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);

        //delete the chapter from the chapter list
        deleteChapter(li.textContent);

        //send the focus to the input element
        input.focus();
    });

    console.log('Uh...no...I don\'t just copy and paste. I typed it all out and made corrections to my code in line with the example');
}

function setChapterList() {
    localStorage.setItem('BoMFavoritesList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('BoMFavoritesList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}