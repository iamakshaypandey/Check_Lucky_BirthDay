const dateOfBirth=document.querySelector("#date-of-birth")
const luckNumber=document.querySelector("#lucky-number")
const checkButton=document.querySelector("#check-number")
const outputBox=document.querySelector("#output-box")


function compareValues(sum,luckNumber){
  if(sum%luckNumber===0){
    outputBox.innerText = "your birthday is lucky 😍"
  }
  else{
    outputBox.innerText = "your date is not lukuy but you are lukky don't worry 😇"
  }
}

function checkBirthDateIsLucky(){
  const dob=dateOfBirth.value;
  const sum=CalculateSum(dob);
  compareValues(sum,luckNumber.value)

}
function CalculateSum(dob){
  dob=dob.replaceAll("-","");
  let sum=0;
  for(let index=0; index<dob.length;index++){
    sum = sum + Number(dob.charAt(index))
  }
  return sum
}
checkButton.addEventListener("click",checkBirthDateIsLucky)