import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const timePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');

btnStart.addEventListener('click', onStart);

btnStart.disabled = true;

const PROMPT_DELAY = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            window.alert("Please choose a date in the future");
            btnStart.disabled = true;
        }
        btnStart.disabled = false;
    // console.log(selectedDates[0]);
  },
};

flatpickr(timePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onStart() {
  let  timerId = setInterval(() => {
    const selectedTime =  new Date(timePicker.value);
    const timeValue = selectedTime - new Date();

    btnStart.disabled = true;
    // Notiflix.Block.hourglass('[data-start]');

    if (timeValue >= 0) {
      let leftTime = convertMs(timeValue);
      daysLeft.textContent = leftTime.days;
      hoursLeft.textContent = leftTime.hours;
      minutesLeft.textContent = leftTime.minutes;
      secondsLeft.textContent = leftTime.seconds;
      } else {
        // Notiflix.Block.remove('[data-start]');
        // Notiflix.Notify.success('Finish');
        clearInterval(timerId);
        }
  },PROMPT_DELAY);
}