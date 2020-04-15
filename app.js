const texts = ['website', 'illustrations', 'pancakes'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let flag = false;
let sleep_time = 100;
(function type() {
    if (count == texts.length) {
        count = 0;
    }
    currentText = texts[count];
    if (letter.length !== currentText.length && !flag) {
        letter = currentText.slice(0, ++index);
    } else {
        letter = currentText.slice(0, --index);
    }

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length && !flag) {
        flag = true;
        sleep_time = 1000;
    } else if (flag && letter.length === 0) {
        count++;
        index = 0;
        flag = false;
    }
    setTimeout(type, sleep_time);
    sleep_time = 100;

}());