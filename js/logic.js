function inputNum(number) {
    document.form.textView.value = document.form.textView.value + number;
}

function equal() {
    var value = document.form.textView.value;

    if(value) {
        document.form.textView.value = eval(value);
    }
}

function clearAll() {
    document.form.textView.value = "";
}

function clearOne() {
    var value = document.form.textView.value;

    document.form.textView.value = value.substring(0, value.length-1);
}
