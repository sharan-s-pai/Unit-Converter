let plusButton = document.getElementById("addDropdowns");

let minusButton = document.getElementById("removeDropdowns");

let input = document.getElementById("input");

let options = ["centimeter", "meter", "kilometer", "feet", "inches"];

// plusButton.addEventListener("click",(e)=>{
//     addSelect();
// });

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
    //console.log(i);
  }else{
      return 0;
  }
  i++;
};

let removeSelect = ()=>{
    if(i<3){
        return 0;
    }
    i--;
    //console.log(i);
    let select = document.getElementById(`output-${i}`)
    select.remove();
    
}
