const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const error = document.createElement('section');
error.textContent = 'Please enter a chapter to add, and click Add Chapter again.';
error.style.color = 'red';
error.style.border = 'solid';
error.style.backgroundColor = 'white';
error.style.display = 'none';
document.querySelector('main').append(error);

button.addEventListener('click', () => {
    if (input.value != '') {
        const item = document.createElement('li');
        const deleteButton = document.createElement('button');
        item.textContent = input.value;
        deleteButton.textContent = '❌';
        item.append(deleteButton);
        list.append(item);
        deleteButton.addEventListener('click', function () {
            list.removeChild(item);
            input.focus();
        });
        input.value = '';
        error.style.display = 'none';
    }
    else {
        error.style.display = 'block';
    }
});