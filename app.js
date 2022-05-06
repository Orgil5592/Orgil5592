// var teacher = {
//     name: 'munkh-orgil',
//     phone: 88335592,
//     address: {
//         city: "UB",
//         dvvreg: "son", 
//     },
//     medeelel :function(){
//         return teacher.name + "" +teacher.phone+" "+teacher.address.city
//     }
// }

// var txt = '';
// for(let x in teacher){
//     txt += teacher[x];
// }


// var hicheel = {
//     name: 'javascript',
//     teacher: teacher,
//     tsag : 32,
//     medeelel :function(){
//      return this.name+ " " +this.teacher.name+ " bagsh ordog ba " +this.tsag + "tsag ordog."
//     }

// }


// console.log(teacher);
// console.log(teacher.name);
// console.log(teacher.address.city);
// console.log(teacher["phone"]);
// console.log(teacher.medeelel());
// console.log(hicheel.teacher.name);
// console.log(hicheel.medeelel());







// var student = {
//     name: 'David',
//     age: 26,
//     sclass:8,
// }
// console.log(student.name);
// console.log(student.age+" nastai " + student.name+ " "+ student.sclass+ "-r angid surdag" );


// var numbers = [1, 2, 3, 4, 5,];
// var txt = '';
// for(let x in numbers){
//     txt += numbers[x] +"<br>";
// }
// document.getElementById("test").innerHTML = txt;


// for in
// forEach -array
// var text = '';
// numbers.forEach(myfunction);
// function myfunction(item, index){
//    text += index + ":" + item + "<br>";

// }
// document.getElementById("test").innerHTML = text;
// // for each


// var vg = 'Amjilt';
// var t1 = '';
// for(let x of vg){
//     console.log(x);
// }
// document.getElementById("test").innerHTML = t1;


var library = {
    author:'Bill Gates',
    title:'The Road Ahead',
    readingStatus: true
    
}

console.log(library.author + "-iin " + library.title + " nomiig unshsan" )
var readingStatus = true;
if(readingStatus)