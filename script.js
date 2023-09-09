
const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');


function updateDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    currentDayOfTheWeekElement.textContent = dayOfWeek;
}


function updateUTCTime() {
    const currentDate = new Date();
    const utcTimeString = currentDate.toUTCString();
    currentUTCTimeElement.textContent = utcTimeString;
}


updateDayOfTheWeek();
updateUTCTime();


setInterval(updateUTCTime, 60000); 
