let plusButton = document.getElementById("addDropdowns");

let input = document.getElementById("input");

let options = ["centimeter", "meter", "kilometer", "feet", "inches"];

// plusButton.addEventListener("click",(e)=>{
//     addSelect();
// });

let sideBar = document.getElementById("sideNav");
let i = 1;
let addSelect = () => {
  if (i <= options.length) {
    let select = `<h6 class="text-center mb-3" style="color:#fff">TO</h6>
    <select name="unit" id="output${i}" class="form-control mb-3">
        <option value="cm">centimeter</option>
        <option value="m">meter</option>
        <option value="km">kilometer</option>
        <option value="ft">feet</option>
        <option value="inch">inch</option>
    </select>`;    
    sideBar.innerHTML += select;
    
  }else{
      return 0;
  }
  i++;
};
