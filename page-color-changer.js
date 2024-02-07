const red = document.querySelector("#red");
red.addEventListener('change', getRedValue);

const green = document.querySelector("#green");
green.addEventListener('change', getGreenValue);

const blue = document.querySelector("#blue");
blue.addEventListener('change', getBlueValue);


function getRedValue () {
     let value = Number(red.value);
     console.log("Red value: " ,value);
   /* if (value >= 1) {
        page.style.backgroundColor = value;
    }
    */
}

function getGreenValue () {
    let value = Number(green.value);
    console.log("Green value: ", value);
}

function getBlueValue () {
    let value = Number(blue.value);
    console.log("Blue value: ", value);
}

