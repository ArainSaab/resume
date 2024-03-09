// const buttons = document.querySelectorAll('button');
// const display = document.querySelector('.display')

// buttons.forEach(function (button) {
//     button.addEventListener('click', calculate);
// });
// function calculate(event) {
//     const clickedbutton = event.target.value
//     if (clickedbutton === '=') {
//         if (display.value !== '') {
//             display.value = eval(display.value);
//         }
//     } 
//     else if (clickedbutton === 'C') {
//         display.value = '';
//     }
//      else {
//         display.value += clickedbutton;
//     }




// }



const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

function calculate(event) {
    const clickedvalue = event.target.value;
    if (clickedvalue === '=') {
        if (display.value !== '') {
            display.value = eval
            (display.value);
        }
    }
    else if (clickedvalue === 'C') {
        display.value = ''
    }
    else {
        display.value += clickedvalue;
    }
}