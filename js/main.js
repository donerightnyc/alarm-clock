let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let m = 'AM';
// m == AM/PM..

minutes = checkTime(minutes);
seconds = checkTime(seconds);

function getTime() {

	if (hours == 0) {
		hours = 12;
	}

	if (hours > 12) {
		hours = hours - 12;
		m = "PM"
	}

	let currentTime =
	hours + ':' + minutes + ':' + seconds + " " + m;

	document.getElementById('clock').innerHTML = currentTime;
	setTimeout('getTime()', 1000);
}

function checkTime(time) {
	if(time < 10) {
		time = '0' + time;
	}
	return time;
}

let alarmSound = new Audio();
alarmSound.src = 'roosterSound.wav';
let alarmTimer;

function setAlarm (button) {
	let ms = document.getElementById('alarmTime').valueAsNumber;
	if(isNaN(ms)) {
		alert('Invalid input');
		return;
	}
	// opens up an alert box to let the user know that the
	// input is invalid/ no-input

	let alarm = new Date(ms);
	let alarmTime = new Date(alarm.getUTCFullYear(),
	alarm.getUTCMonth(), alarm.getUTCDate(),
	alarm.getUTCHours(), alarm.getUTCMinutes(),
	alarm.getUTCSeconds());
	let differenceInMs = alarmTime.getTime() - (new Date()).getTime();


if(differenceInMs < 0) {
	alert('Specified time has already passed!');
	return;
}
alarmTimer = setTimeout(initAlarm, differenceInMs);

button.innerText = 'Cancel Alarm';
button.setAttribute('onclick', 'cancelAlarm(this);');
}

function initAlarm() {
	alarmSound.play();
	document.getElementById('alarmOptions').style.display = '';
}

function cancelAlarm(button) {
	button.innerText = 'Set Alarm';
	button.setAtribute('onclick', 'setAlarm(this);');
	clearTimeout(alarmTimer);
}

function stopAlarm() {
	alarmSound.pause();
	alarmSound.currentTime = 0;
	document.getElementById('alarmOptions').style.display = 'none';
	cancelAlarm(document.getElementById('alarmButton'));
}

function snooze() {
	stopAlarm();
	setTimeout(initAlarm, 72000);
};
// to snooze it for 10 mins (72000 miliseconds)
