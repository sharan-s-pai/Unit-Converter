let plusButton = document.getElementById("addDropdowns");

let minusButton = document.getElementById("removeDropdowns");

let input = document.getElementById("input");

let options = ["centimeter", "meter", "kilometer", "feet", "inches"];

let output1 = document.getElementById("output1");

let optionsConvert = [output1];

let outputdiv = document.getElementById("outputText");

let form = document.getElementById("input-form");
let inputNum = document.getElementById("num-input");

let submit = document.getElementById("submit");

let clear = document.getElementById("clear");

let sideBar = document.getElementById("innerNav");
let i = 2;
let addSelect = () => {
  if (i < options.length) {
    let section = document.createElement("section");
    section.setAttribute("id", `output-${i}`);
    section.innerHTML = `<h6 class="text-center mb-3" style="color:#fff">TO</h6>
    <select name="unit" id="output${i}" class="form-control mb-3">
         <option value="cm">centimeter</option>
         <option value="m">meter</option>
        <option value="km">kilometer</option>
         <option value="ft">feet</option>
         <option value="inch">inch</option>
     </select>`;
    sideBar.appendChild(section);
    optionsConvert.push(document.getElementById(`output${i}`));
  } else {
    return 0;
  }
  i++;
};

let removeSelect = () => {
  if (i < 3) {
    return 0;
  }
  i--;
  let select = document.getElementById(`output-${i}`);
  select.remove();
  optionsConvert.pop();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  outputdiv.innerHTML = "";
  let value = inputNum.value;
  let inputValue = document.getElementById("input").value;
  let k = 1;
  optionsConvert.forEach((option) => {
    let optionValue = document.getElementById(`output${k}`).value;
    if (optionValue === "cm") {
      cmConversion(value, inputValue);
    } else if (optionValue === "km") {
      kmConversion(value, inputValue);
    } else if (optionValue === "m") {
      mConversion(value, inputValue);
    } else if (optionValue === "ft") {
      feetConversion(value, inputValue);
    } else if (optionValue === "inch") {
      inchConversion(value, inputValue);
    }
    k++;
  });
});

clear.addEventListener("click", (e) => {
  outputdiv.innerHTML = "";
  inputNum.disabled = false;
  submit.disabled = false;
  inputNum.value = "";
});

let cmConversion = (value, inputValue) => {
  let output;
  if (inputValue === "km") {
    output = value * 100000;
  } else if (inputValue === "m") {
    output = value * 100;
  } else if (inputValue === "ft") {
    output = value / 0.0328084;
  } else if (inputValue === "inch") {
    output = value / 0.3937008;
  } else {
    output = value;
  }
  printScreen(output.toLocaleString("en-IN"), "cm");
};

let kmConversion = (value, inputValue) => {
  let output;
  if (inputValue === "cm") {
    output = value / 100000;
  } else if (inputValue === "m") {
    output = value / 1000;
  } else if (inputValue === "ft") {
    output = value / 3280.84;
  } else if (inputValue === "inch") {
    output = value / 39370.08;
  } else {
    output = value;
  }
  printScreen(output.toLocaleString("en-IN"), "km");
};

let mConversion = (value, inputValue) => {
  let output;
  if (inputValue === "km") {
    output = value * 1000;
  } else if (inputValue === "cm") {
    output = value / 100;
  } else if (inputValue === "ft") {
    output = value / 3.28084;
  } else if (inputValue === "inch") {
    output = value / 39.37008;
  } else {
    output = value;
  }
  printScreen(output.toLocaleString("en-IN"), "m");
};

let feetConversion = (value, inputValue) => {
  let output;
  if (inputValue === "km") {
    output = value * 3280.84;
  } else if (inputValue === "m") {
    output = value * 3.28084;
  } else if (inputValue === "cm") {
    output = value * 0.0328084;
  } else if (inputValue === "inch") {
    output = value / 12;
  } else {
    output = value;
  }
  printScreen(output.toLocaleString("en-IN"), "feet");
};

let inchConversion = (value, inputValue) => {
  let output;
  if (inputValue === "km") {
    output = value * 39370.08;
  } else if (inputValue === "m") {
    output = value * 39.37008;
  } else if (inputValue === "cm") {
    output = value * 0.3937008;
  } else if (inputValue === "ft") {
    output = value * 12;
  } else {
    output = value;
  }
  printScreen(output.toLocaleString("en-IN"), "inch");
};

let printScreen = (output, type) => {
  let text = document.createElement("section");
  text.className='alert-warning rounded m-3 text-center';
  text.style.color="black";
  text.innerHTML = `<h3>${output} ${type}</h3>`;
  outputdiv.appendChild(text);
};
