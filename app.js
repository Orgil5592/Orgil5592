// var nums = [1, 2, 46, 100, -45, 12];
// console.log(nums.includes(1, 1));
//1
// var animals = ['cow', 'dog', 'cat'];
// var q = animals.includes('dog');
// console.log(animals.includes('dog', 2));


//2
// var friuts = ['apple', 'kiwi', 'orange', 'banana'];
// var q = friuts.length-1;
// console.log(friuts.includes("kiwi", q));

//3
// var nums = [1, 2, 46, 100, -45, 12];
// var q = nums.filter(check);
// function check(a){
//     return a >= 0;
// }
// console.log(q);

//4
// function text(){
//     return "JEEl ssa"
// }
// console.log(text());

//5
// let text1 =  () => "JEEl ssaa sasac"
// console.log(text1());

//6
// let sum = (a, b) => a+b;
// console.log(sum(3, 1));


// function sum1(a, b){
//     return a+b;
// }

//7-filter
// var colors = ['black', 'white', 'red', 'purple', 'green'];
// var q = colors.filter(check = (a) => a.length >=4);
// console.log(q);

//8
// var colors = ['black', 'white', 'red', 'purple', 'green'];
// var n = colors.map(myfunc);
// function myfunc(hug){
//     return hug +1
// }
// document.getElementById("demo").innerHTML = n;



//9
// var arr1 = [9, 7, 4, 3, 1];
// var arr2 = [10, 11, 3, 6, 1, 2, 4,];
// var arr3 = [9, 10, 11, 6, 2,];
// var apple = arr1.filter(myfunc);
// function myfunc(hug){
//     return !arr2.includes(hug);
// }
// console.log(apple);
// console.log(arr3);

//10
// var arr1 = [9, 7, 4, 3, 1];
// var arr2 = [10, 11, 3, 6, 1, 2, 4,];
// var q = arr2.filter(a => !arr1.includes(a));
// console.log(a);


//11
// var students = ['Nomuun', 'Azbayr', 'Duurenzaan', 'Temuujin', 'Telmen', 'Bayr'];
// var kps111 = ['Nomuun', 'Azbayr'];
// var kps112 = ['Duurenzaan'];
// var q = students.filter(a => kps111.includes(a));
// var w = students.filter(a => kps112.includes(a));
// console.log(q);
// console.log(w);


//12

// var students = [
// {
//     name: 'Munkh-ochir',
//     class: 'kps-111',
//     studyStatus: true,
// },
// {
//     name: 'Enhjin',
//     class: 'kps-111a',
//     studyStatus: false,
// },
// {
//     name: 'Temuulen',
//     class: 'kps-112',
//     studyStatus: true,
// },
// {
//     name: 'Munkh-erdene',
//     class: 'kps-109',
//     studyStatus: false,
// },
// ];
// var q ='';
// students.forEach(myfunc);
// function myfunc(item){
//     q = q + item.class + ' angiin oyutan ' + item.name + ' ni odoogoor ';
//     if(item.studyStatus)q += " suraltsaj baigaa." + "<br>";
//     else q += "suraltsahgui baigaa" + "<br>";
// }
// document.getElementById("w").innerHTML = q;


//13

