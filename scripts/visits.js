//find the visits span
const visitsElement = document.querySelector('#visits');
//read the number of visits from local storage
let visitCount = Number(window.localStorage.getItem('visitCount')) || 0;
//if the number of visits is greater than 0, print the current number of visits
if (visitCount > 0) {
    visitsElement.textContent = visitCount;
}
//otherwise print a message that this is the first visit
else {
    visitsElement.textContent = "This is your first visit. Welcome.";
}
//increment the number of visits
visitCount++;
//write the number of visits to local storage
localStorage.setItem('visitCount', visitCount);
