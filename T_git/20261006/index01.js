document.addEventListener('DOMContentLoaded', function() {
    // console.log('DOCUMENT READY!!');

    var inputEle = document.querySelector('#colorPicker');
    var inputEleValue = inputEle.value;

    var colorTextEle = document.querySelector('#colorText');
    var colorTextEleText = colorTextEle.textContent;

    colorTextEle.textContent = `${colorTextEleText}: ${inputEleValue}`;

    /*
    inputEle.addEventListener('input', function(e) {

        console.log(e.target);

        var changedColorValue = e.target.value;
        colorTextEle.textContent = `${colorTextEleText}: ${changedColorValue}`;

        var bodyEle = document.querySelector('body');
        bodyEle.style.backgroundColor = changedColorValue;

    });
    */

    /*
    document.addEventListener('input', function(e) {

        var colorPickerEle = document.querySelector('#colorPicker');
        if(e.target === colorPickerEle) {

            var changedColorValue = e.target.value;
            colorTextEle.textContent = `${colorTextEleText}: ${changedColorValue}`;

            var bodyEle = document.querySelector('body');
            bodyEle.style.backgroundColor = changedColorValue;

        }

    });
    */

    document.addEventListener('input', (e) => {

        if(e.target === inputEle) {

            var changedColorValue = e.target.value;
            inputEle.textContent = `${colorTextEleText}: ${changedColorValue}`;

            var bodyEle = document.querySelector('body');
            bodyEle.style.backgroundColor = changedColorValue;

        }

    });

});