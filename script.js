const dob = document.getElementById("date-of-birth");
const luckyNumber = document.getElementById("lucky-number");
const checkButton = document.getElementById("btn-check");
const para = document.getElementById("output");

checkButton.addEventListener("click",()=>{
    let date = dob.value.split("-");
    let yearSum = Sum(Number(date[0]));
    let monthSum = Sum(Number(date[1]));
    let dateSum = Sum(Number(date[2]));

    let sumOfDigitsOfDate = yearSum + monthSum + dateSum;
    console.log(sumOfDigitsOfDate);
    Lucky(sumOfDigitsOfDate);
});

function Sum(input){
    let sum =0;
    while(input>0){
        sum = sum + input%10;
        input = Math.trunc(input/10);
    }
    return sum;
}

function Lucky(input){
    if(input%luckyNumber.value === 0){
        para.innerText = `Congrats ${luckyNumber.value} is a lucky number!🥳🥳🥳`;
    }
    else{
        para.innerText =`${luckyNumber.value} is not so lucky.`;
    }
}