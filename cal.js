let result = document.getElementById("result");
function display(num){
  result.value += num;
}

function calculation(){
    let final_num = result.value;
    let final_res = eval(final_num);
    result.value = final_res;
}
function clr() {
    result.value = "";
}
function del() {
    result.value = result.value.slice(0,-1);
}