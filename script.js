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
    optionsConvert(document.getElementById(`output${i}`));
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
      console.log(option);
      if (option.value === "cm") {
        console.log(value);
        cmConversion(value);
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
    output=value*0.0328084;
  }else if(input.value==="inch"){
    output=value*0.3937008;
  }else{
    output=value;
  }
  printScreen(output.toLocaleString('en-IN'),"cm");
}

let printScreen=(output,type)=>{
  let text=document.createElement('section');
  text.innerHTML=`<h3>${output} ${type}`;
  outputdiv.appendChild(text);
}

