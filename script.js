let plusButton = document.getElementById("addDropdowns");

let minusButton = document.getElementById("removeDropdowns");

let input = document.getElementById("input");

let options = ["centimeter", "meter", "kilometer", "feet", "inches"];

let output1=document.getElementById("output1");

let optionsConvert = [output1];

let outputdiv=document.getElementById("outputText");

let form = document.getElementById("input-form");

let sideBar = document.getElementById("innerNav");
let i = 2;
let addSelect = () => {
  if (i <= options.length) {
    let section = `<section id="output-${i}" class="text-center">
    <h6 class="text-center mb-3" style="color:#fff">TO</h6>
    <select name="unit" id="output${i}" class="form-control mb-3">
        <option value="cm">centimeter</option>
        <option value="m">meter</option>
        <option value="km">kilometer</option>
        <option value="ft">feet</option>
        <option value="inch">inch</option>
    </select></section>`;
    sideBar.innerHTML += section;
    optionsConvert.push(document.getElementById(`output${i}`));
    console.log(optionsConvert);
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
  //console.log(i);
  let select = document.getElementById(`output-${i}`);
  select.remove();
  optionsConvert.pop();
  console.log(optionsConvert);
};
let inputNum = document.getElementById("num-input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = inputNum.value;
  optionsConvert.forEach((option) => {
    if (input.value !== option.value) {
      if (option.value === "cm") {
        console.log(input.value);
        console.log(option.value);
        cmConversion(value);
      }else if (option.value === "km") {
        console.log(input.value);
        console.log(option.value);
        kmConversion(value);
      }else if (option.value === "m") {
        console.log(option.value);
        console.log(input.value);
        mConversion(value);
      }else if (option.value === "ft") {
        console.log(option.value);
        console.log(input.value);
        feetConversion(value);
      }else if (option.value === "inch") {
        console.log(option.value);
        console.log(input.value);
        inchConversion(value);
      }
    }
  });
});
let cmConversion=(value)=>{
  let output;
  if(input.value==="km"){
    output=value*100000;
  }else if(input.value==="m"){
    output=value*100;
  }else if(input.value==="ft"){
    output=value/0.0328084;
  }else if(input.value==="inch"){
    output=value/0.3937008;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"cm");
}

let kmConversion=(value)=>{
  let output;
  if(input.value==="cm"){
    output=value/100000;
  }else if(input.value==="m"){
    output=value/100;
  }else if(input.value==="ft"){
    output=value/3280.84;
  }else if(input.value==="inch"){
    output=value/39370.08;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"km");
}

let mConversion=(value)=>{
  let output;
  if(input.value==="km"){
    output=value*1000;
  }else if(input.value==="cm"){
    output=value/100;
  }else if(input.value==="ft"){
    output=value*3.28084;
  }else if(input.value==="inch"){
    output=value*39.37008;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"m");
}

let feetConversion=(value)=>{
  let output;
  if(input.value==="km"){
    output=value*3280.84;
  }else if(input.value==="m"){
    output=value*3.28084;
  }else if(input.value==="cm"){
    output=value*0.0328084;
  }else if(input.value==="inch"){
    output=value/12;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"feet");
}

let inchConversion=(value)=>{
  let output;
  if(input.value==="km"){
    output=value*39370.08;
  }else if(input.value==="m"){
    output=value*39.37008;
  }else if(input.value==="cm"){
    output=value*0.3937008;
  }else if(input.value==="ft"){
    output=value*12;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"inch");
}

let printScreen=(output,type)=>{
  let text=document.createElement('section');
  text.innerHTML=`<h3>${output} ${type}`;
  outputdiv.appendChild(text);
}

