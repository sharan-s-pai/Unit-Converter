let plusButton = document.getElementById("addDropdowns");

let minusButton = document.getElementById("removeDropdowns");

let input = document.getElementById("input");

let options = ["centimeter", "meter", "kilometer", "feet", "inches"];

let output1=document.getElementById("output1");

let optionsConvert = [output1];

let outputdiv=document.getElementById("outputText");

let form = document.getElementById("input-form");
let inputNum = document.getElementById("num-input");

let submit=document.getElementById("submit");

let clear=document.getElementById("clear");

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
let j=0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = inputNum.value;
  let inputValue=input.selectedOptions[0].value;
  optionsConvert.forEach((option)=>{
    console.log(option);
    let optionValue=option.selectedOptions[0].value;
    // if (inputValue !== optionValue) {
      if (optionValue === "cm") {
        console.log(optionValue);
        console.log(inputValue);
        cmConversion(value,inputValue);
      }else if (optionValue === "km") {
        console.log(value);
        console.log(optionValue);
        console.log(inputValue);
        kmConversion(value,inputValue);
      }else if (optionValue === "m") {
        console.log(optionValue);
        console.log(inputValue);
        mConversion(value,inputValue);
      }else if (optionValue === "ft") {
        console.log(optionValue);
        console.log(inputValue);
        feetConversion(value,inputValue);
      }else if (optionValue === "inch") {
        console.log(optionValue);
        console.log(inputValue);
        inchConversion(value,inputValue);
      }
    // }
  });
  j++;
});

clear.addEventListener("click",(e)=>{
  outputdiv.innerHTML="";
  inputNum.disabled=false;
  submit.disabled=false;
  inputNum.value="";
  j=0;
})

let cmConversion=(value,inputValue)=>{
  let output;
  if(inputValue==="km"){
    output=value*100000;
  }else if(inputValue==="m"){
    output=value*100;
  }else if(inputValue==="ft"){
    output=value/0.0328084;
  }else if(inputValue==="inch"){
    output=value/0.3937008;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"cm");
}

let kmConversion=(value,inputValue)=>{
  let output;
  if(inputValue==="cm"){
    output=value/100000;
  }else if(inputValue==="m"){
    output=value/1000;
  }else if(inputValue==="ft"){
    output=value/3280.84;
  }else if(inputValue==="inch"){
    output=value/39370.08;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"km");
}

let mConversion=(value,inputValue)=>{
  let output;
  if(inputValue==="km"){
    output=value*1000;
  }else if(inputValue==="cm"){
    output=value/100;
  }else if(inputValue==="ft"){
    output=value*3.28084;
  }else if(inputValue==="inch"){
    output=value*39.37008;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"m");
}

let feetConversion=(value,inputValue)=>{
  let output;
  if(inputValue==="km"){
    output=value*3280.84;
  }else if(inputValue==="m"){
    output=value*3.28084;
  }else if(inputValue==="cm"){
    output=value*0.0328084;
  }else if(inputValue==="inch"){
    output=value/12;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"feet");
}

let inchConversion=(value,inputValue)=>{
  let output;
  if(inputValue==="km"){
    output=value*39370.08;
  }else if(inputValue==="m"){
    output=value*39.37008;
  }else if(inputValue==="cm"){
    output=value*0.3937008;
  }else if(inputValue==="ft"){
    output=value*12;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"inch");
}

let printScreen=(output,type)=>{
  if(j>=1){
    outputdiv.innerHTML="";
  }
  let text=document.createElement('section');
  text.innerHTML=`<h3>${output} ${type}`;
  outputdiv.appendChild(text);
}

let appendScreen=(output,type)=>{
  let text=document.createElement('section');
  text.innerHTML=`<h3>${output} ${type}`;
  outputdiv.innerHTML+=text;
}

//appending the output when multiple inputs are given

//any change made in input option must be reflected while submission