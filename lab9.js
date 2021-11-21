// Selects all of the error-btns buttons
// 
const errorBtns = document.querySelector("#error-btns");

// Console Log
errorBtns.children[0].addEventListener("click", (e)=> {
    console.log(e.target.textContent + " was pressed!");
});
    
// Console Error
errorBtns.children[1].addEventListener("click", (e)=> {
    console.error("Sorry, can't do that :/");
});

// Console Count
errorBtns.children[2].addEventListener("click", (e)=> {
    console.count("Count");
});

// Console Warn
errorBtns.children[3].addEventListener("click", (e)=> {
    console.warn("Here's a warning >:(");
});

// Console Assert
errorBtns.children[4].addEventListener("click", (e)=> {
    let x = 1;
    let y = 2;
    const reason = "1 and 2 are not equivalent";
    console.assert(x == y, {x,y,reason});
});

// Console Clear
errorBtns.children[5].addEventListener("click", (e)=> {
    console.log(e.target.textContent + " was pressed!");
    console.clear();
});

// Console Dir
errorBtns.children[6].addEventListener("click", (e)=> {
    console.dir(e.target);
});

// Console dirxml
errorBtns.children[7].addEventListener("click", (e)=> {
    console.dirxml(e.target);
});

// For 8 and 9
const randLabel = "label";
// Console Group Start
errorBtns.children[8].addEventListener("click", (e)=> {
    console.group(randLabel);
});

// Console Group End
errorBtns.children[9].addEventListener("click", (e)=> {
    console.groupEnd(randLabel);
});

// Console Table
errorBtns.children[10].addEventListener("click", (e)=> {
    console.table([
    {
        department: 'CSE',
        number: '105',
    },
    {
        department: 'CSE',
        number: '101',
    },
    {
        department: 'COGS',
        number: '122',
    },
    {
        department: 'CSE',
        number: '110',
    },
    {
        department: 'MUS',
        number: '130',
    }
    ]);
});

// Start Timer
errorBtns.children[11].addEventListener("click", (e)=> {
    console.time();
});

// End Timer
errorBtns.children[12].addEventListener("click", (e)=> {
    console.timeEnd();
});

// Console Trace
errorBtns.children[13].addEventListener("click", (e)=> {
    const uno = () => { dos(); };
    const dos = () => { tres(); };
    const tres = () => { console.trace(); };
    uno();
});

const invalid = "hi";
// Trigger a Global Error
errorBtns.children[14].addEventListener("click", (e)=> {
    invalid = 3;
    TrackJS.track('Testing TrackJS!');
});

// A few things combined together:
// try, catch, throw, finally
// and custom error
// from https://javascript.info/custom-errors
class customError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
}
function invalidInput() {
    throw new customError("Invalid values for input!!1!");
}
// When there's nothing or invalid in the first or second 
let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    try {
        let output = document.querySelector('output');
        let firstNum = document.querySelector('#first-num').value;
        let secondNum = document.querySelector('#second-num').value;
        let operator = document.querySelector('#operator').value;
        console.log(eval(`${firstNum} ${operator} ${secondNum}`));
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch(err) {
        // Where I can call my custom error
        try {
            invalidInput();
        } catch(err) {
            console.log(err.message);
        }
    }
    finally {
        console.log("Finally done");
    }
});
