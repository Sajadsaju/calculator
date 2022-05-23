a= document.getElementById("screen");
function clr(){
   a.value ="";
}
function display(value){
   a.value +=value;
}
function vara(){
    a.value=a.value.substring(0,a.value.length -1);
}
function ac()
{
    
    // if(a.value=a)
    // {
    //     document.getElementById("screen").value="";
    // }
}
function calculate(){
  var p = a.value;
  var q = eval(p);
  a.value =q;

}











// const result = document.querySelector('.cal')
// const clear =  document.querySelector('.clear')
// const compute =  document.querySelector('.cao')



// const buttons = document.querySelectorAll('.caa, .ca')
// // console.log(buttons)
// let input = [];

// //Array.form() to convert buttons to Array  
// //loop throungh the button  to acces each
// Array.from(buttons).forEach((button)=>{

// //Add event  listener to button
// button.addEventListener('click', ()=>{
//  const operator = ['+', '-', '/', '*']
//  //display result and checking if 
//  if (input[input.length-1] == '=' && !operators.includes(button.value)){
//      result.value  = button.value;
//  }else{
//      result.value += button.value;
//  }
// input.push(button.value)
// })

// })

// // add event listener click to (=)
// compute.addEventListener('click', ()=>{
//  input.push('=');
//  //checking 
//  if(result.value.length == 0){
//      return false
//  }else{
//      result.value = eval(result.value)
//  }

// })

// // clear the screen 
// clear.addEventListener('click', () =>{
//     result.value=''
// })
