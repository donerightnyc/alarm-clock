function getTime() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var m = 'AM';
	// m == AM/PM..

	minutes = checkTime(minutes);
	seconds = checkTime(seconds);

	if (hours == 0) {
		hours = 12;
	}

	if (hours > 12) {
		hours = hours - 12;
		m = "PM"
	}

	var currentTime =
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





var alarmSound = new Audio();
alarmSound.src = 'roosterSound.wav';
var alarmTimer;

function setAlarm (button) {
	var ms = document.getElementById('alarmTime').valueAsNumber;
	if(isNaN(ms)) {
		alert('Invalid input');
		return;
	}
	// opens up an alert box to let the user know that the
	// input is invalid/ no-input

	var alarm = new Date(ms);
	var alarmTime = new Date(alarm.getUTCFullYear(),
	alarm.getUTCMonth(), alarm.getUTCDate(),
	alarm.getUTCHours(), alarm.getUTCMinutes(),
	alarm.getUTCSeconds());
	var differenceInMs = alarmTime.getTime() - (new Date()).getTime();


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



// function countDown() {
// var countDownDate = new Date("Mar 12, 2018 09:00:00").getTime();
//
// var x = setInterval(function () {
// 	var now = new Date().getTime();
//
// 	var distance = countDownDate - now;
//
// 	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// 	var hours = Math.floor((distance % (1000 * 60 * 24)) / (1000 * 60 * 60));
// 	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// 	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
// 	document.getElementById('gaCountdown').innerHTML = days + 'd ' + hours + 'h '
// 	+ minutes + 'm ' seconds + 's ';
//
// 	if (distance < 0) {
// 		clearInterval(x);
// 		document.getElementById('gaCountdown').innerHTML = "Date already passed";
// 	}
// }, 1000);
// }
