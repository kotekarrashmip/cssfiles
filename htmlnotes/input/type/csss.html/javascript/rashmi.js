console.log('hello word');
//alert('yooo'); to write a comment line
//variables
var b = 'smootie';
console.log(b);
var number= 45;
console.log(number);
document.getElementById('demo1').innerHTML="rashmi";
//var age= prompt('what is u r age');
//document.getElementById('demo1').innerHTML=age;
//numbers in java script
var num1=5;
console.log(5*10);
var num2=8;
num2=num2+10;
console.log(num2);
var num3=10;
//increment by 1
num3++;
//decrement by 1
num3--;
console.log(num3);
//we can divide/;multiply*;remainder%
console.log(num3 % 6);
//increment or decrement i.e += adds on the required number num3+10
num3 += 10;
console.log(num3);
function greeting() {
    //var name= prompt("what is u r name ?")
    var result= "hello" + " " + name ;
    console.log(result);
}
greeting() ;
//combining two things together using a function
function sumNumber (num5,num6) {
    var result = num5+num6;
    console.log(result);
}
sumNumber(10,10);
//while loop
var num=0;
while(num<10) {
    num += 1;
    console.log(num);
}