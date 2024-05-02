let number = +prompt("birinchi son kiriting . . .");
let numbertwo = +prompt("ikkinchi son kiriting . . .");
let rezult = +prompt("Amalarni kiriting:" + "\n 1.qoshish" + "\n 2.ayrish" + "\n 3.kopaytirish" + "\n 4.bolish" + "\n Amalni tanlang [1/2/3/4]");
let sum;
if (rezult === 1) {
    sum = number + numbertwo
    console.log(sum);
} else if (rezult === 2) {
    sum = number - numbertwo
    console.log(sum);
} else if (rezult === 3) {
    sum = number * numbertwo
    console.log(sum);
} else if (rezult === 4) {
    sum = number / numbertwo
    console.log(sum);
}