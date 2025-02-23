// Function to get the current time (hours, minutes, seconds)

function currentTime() {
    const currentClock = new Date(); // Get the current date and time
    const currentHrs = currentClock.getHours(); // Extract current hours
    const currentMins = currentClock.getMinutes(); // Extract current minutes
    const currentSecs = currentClock.getSeconds(); // Extract current seconds

    // Return an object containing hours, minutes, and seconds
    return {
        hrs: currentHrs,
        mins: currentMins,
        secs: currentSecs,
    };
};

// Function to get the current date (day, month, year, and full day name)

function currentDate() {
    const currentClock = new Date(); // Get the current date and time
    const currentDate = currentClock.getDate(); // Extract current date
    const currentYear = currentClock.getFullYear(); // Extract current year
    const currentMonth = currentClock.toDateString().slice(4, 7); // Extract the abbreviated month name
    const currentDay = currentClock.toDateString().slice(0, 3); // Extract the abbreviated day name
    let currentFullDay;

    // Switch case to determine the full name of the day (Monday to Sunday)
    switch (currentClock.getDay()) {
        case 1:
            currentFullDay = "Monday";
            break;
        case 2:
            currentFullDay = "Tuesday";
            break;
        case 3:
            currentFullDay = "Wednesday";
            break;
        case 4:
            currentFullDay = "Thursday";
            break;
        case 5:
            currentFullDay = "Friday";
            break;
        case 6:
            currentFullDay = "Saturday";
            break;
        default:
            currentFullDay = "Sunday"; // Default case for Sunday
    };

    // Return an object containing date, month, year, abbreviated day, and full day name
    return {
        date: currentDate,
        month: currentMonth,
        year: currentYear,
        day: currentDay,
        fullDay: currentFullDay
    };
};

function getMonth(num = 1) {
    let month = "";
    switch (num) {
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
        default:
            month = "January";
            break;
    };

    return { month: `${month.slice(0, 3)}`, fullMonth: month };
};

export { currentTime, currentDate, getMonth };