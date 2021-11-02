console.log();
const s: string = "hello world!";
let iNum : number = 10;
let bool:boolean = true;
let anyDataType:any = 200;
console.log("String is: "+s);
console.log("Number is: "+iNum);
console.log("Bool value is: "+bool);
console.log("Any data type value is: "+anyDataType);
anyDataType = "Changed to String";
console.log("Any data type value is: "+anyDataType);
anyDataType = true;
console.log("Any data type value is: "+anyDataType);

console.log();
console.log();


console.log("---- LET has BLOCK SCOPE and VAR has FUNCTION SCOPE ----");
function test()
{
  let x:number =10;
  if(x<20)
  {
    let y:number =20;
    var z:number = 30;
  }
  console.log("x is: "+ x);
  //console.log("y is: "+ y);
  //console.log("z is: "+ z);
}
test(); 


console.log();
console.log();

console.log("---- LOOP IN TYPESCRIPT ----");
var num:number = 5;
var fact =1;
for(var i=1;i<=num;i++) 
   fact = fact*i;
console.log(`factorial of ${num} is ${fact}.`);


console.log();
console.log();





console.log("---- FUNCTIONS WITH PARAMETERS ----");
function myfunction(id:number , name:string , stream:string , marks:number){
   console.log(`Given id: ${id} , name: ${name} , Stream: ${stream} , marks: ${marks}. `);
}
myfunction(101, 'Madhuri' , 'CSE' , 120);


console.log();
console.log();


console.log("---- FUNCTIONS RETURNING THE DATA ----");
function square(num:number) : number
{
   return num*num;
}
var iData = square(5);
console.log(`Square of 5 is ${iData}.`);


console.log();
console.log();


console.log("---- FINDING MAXIMUM OF 2 NUMBERS ----");
function max(n1:number , n2:number):number
{
  if(n1>n2)
  return n1;
  else 
  return n2;
}
var max_num = max(100,20);
console.log(`maximum number is ${max_num}`);


console.log();
console.log();





console.log("---- String Length ----");

var str:string = "Madhuri";
var len:number = str.length;
console.log("length of string: "+str+" is: "+len);

console.log();
console.log("Arrays in Typescript");

var strArrMeanStack = new Array("Mongo", "Express","Angular","Node");
console.log();
console.log("with for ...in");
for(var iIndex in strArrMeanStack)
   console.log(strArrMeanStack[iIndex]);
console.log();
console.log("with for ...of");
for(var strData of strArrMeanStack)
   console.log(strData);
console.log();
console.log("\nwith for loop iteration using length")
for(var iData=0 ; iData<strArrMeanStack.length ; ++iData)
   console.log(strArrMeanStack[iData]);


console.log();
console.log();


console.log("---- PRINT NUMBERS IN ARRAY USING FOR...IN ----")
var iArrNum = new Array(100,230,465,879,900);
console.log("using for..in");
for(var index in iArrNum)
    console.log(iArrNum[index]);

 console.log();
 console.log();


 console.log("---- LARGEST NUMBER IN ARRAY ----"); 
var iArrNum = new Array(100,230,465,879,900);
var max_arr_num :number = 0;
console.log("using for..in");
for(var index in iArrNum)
{
  if(max_arr_num < iArrNum[index])
       max_arr_num = iArrNum[index];
}
console.log("Elements of Array: "+iArrNum);
console.log("Largest number in array is: "+max_arr_num);

console.log();
console.log();


 


// console.log();
// console.log("---- BUBBLE SORT IN TYPESCRIPT ----");
// var arr = new Array(20,30,10,50,40);
// var n = arr.length;
// function bubblesort()
// {
//   for(var i=0;i<n;i++)
//   {
//     for(var j=0;j<n-i-1;j++)
//     {
//       if(arr[j]>arr[j+1])
//       {
//         var temp = arr[j];
//         arr[j]= arr[j+1];
//         arr[j+1]= temp;
//       }
//     }
//   }
// }
// console.log("Array in ascending order is: "+ arr);


console.log();
console.log();


console.log("---- TUPLE IN TYPESCRIPT ----");
 var a=[10,'Madhuri'];
 var [num1 , str1] = a;
 console.log("Number is: "+num1+" and Name is: "+str1);


console.log();
console.log();





console.log("---- UNION IN TYPESCRIPT ----");
var unionData : number|string;
unionData = 200;
console.log("Union data number value is: "+unionData);
unionData = "My name is Madhuri.";
console.log("Union data string value is: "+unionData);


console.log();
console.log();


console.log("---- UNION AS FUNCTION ARGUMENTS ----");
function display(unionData1 : (number|string))
{
  if(typeof(unionData1)=="number")
  {
    console.log("Given Datatype is a number ... Data is: "+unionData1);
  }
  else if(typeof(unionData1)=="string")
  {
    console.log("Given Datatype is a string ... Data is: "+unionData1);
  }
}
display(120);
display("Madhuri");


console.log();console.log();


console.log("---- CLASSES AND OBJECTS ----")
 class employee
 {
   id:number;
   emp_name : string;
   dept: string;
   designation:string;
  constructor(code:number , name_emp :string , department:string , desig:string)
  {
    this.id = code;
    this.emp_name = name_emp;
    this.dept = department;
    this.designation = desig;
  }
   display()
   {
     var strToDisplay = ` Id: ${this.id} \n Name: ${this.emp_name} \n Dept: ${this.dept} \n Designation: ${this.designation}`;
     console.log(strToDisplay);
   }
  }
   var empobj = new employee(200,"Madhuri","IT","Full Stack Developer");
  
   empobj.display();


   console.log();
   console.log();


   
console.log("=======================  ASSIGNMENTS  =======================")

console.log();
console.log();

console.log("---- Fibonacci Series ----");
var n1 = 0;
var n2 = 1;
console.log(n1);
console.log(n2);
for(var i =0 ;i< 8;i++)
{
  var n3:number = n1+n2;
  n1=n2;
  n2=n3;
  console.log(n3);
}

console.log();
console.log();


console.log("---- PRIME OR NOT ----");
function isPrime(n:number)
{
  if(n<2) return false;
  for(var i = 2;i< n;i++)
  {
    if(n%i == 0)
    return false;
  }
  return true;
}
if(isPrime(10))
   console.log("Num 10 is Prime");
else
    console.log("Num 10 is NOT Prime");

console.log();
console.log();


console.log("---- USING 2 FUNCTIONS FIND LARGEST AND SMALLEST OF 3 NUMBERS ----");
console.log("numbers are 10,55,40");
function largest(n1:number , n2:number , n3:number) : number
{
  if(n1>n2 && n1>n3)
    return n1;
  else if(n2>n1 && n2>n3)
    return n2;

  return n3;
}
var largest_num = largest(10,55,40);
console.log(`largest number is ${largest_num}`);

function smallest(n1:number , n2:number , n3:number) : number
{
  if(n1<n2 && n1<n3)
    return n1;
  if(n2<n1 && n2<n3)
    return n2;
  
  return n3;
}
var smallest_num = smallest(10,55,40);
console.log(`smallest number is ${smallest_num}`);

console.log();
console.log();
console.log("---- SMALLEST NUMBER IN ARRAY ----"); 
var iArrNum = new Array(100,230,82,465,879,900);
var min_arr_num :number = iArrNum[0];
console.log("using for..in");
for(var index in iArrNum)
{
  if(min_arr_num > iArrNum[index])
       min_arr_num = iArrNum[index];
}
console.log("Elements of Array: "+iArrNum);
console.log("Smallest number in array is: "+min_arr_num);



console.log();
console.log();


 console.log("---- FIND INDEX OF ELEMENT IN ARRAY ----"); 
var iArrNum = new Array(100,230,82,465,879,900);
var arr_num1 :number = 500;
console.log("using for..in");
console.log("elements of Array are: "+iArrNum);
var arr_index:string= "-1";
for(var index in iArrNum)
{
  if(arr_num1 == iArrNum[index])
    arr_index=index;
}
if(arr_index=="-1")
 console.log("Given number:"+arr_num1+" is not present in the array")
 else
console.log("Number: "+arr_num1+" is found at index: "+arr_index);

console.log();
console.log();

console.log("---- DESTRUCTING TUPLE IN TYPESCRIPT ----");
var student = [101, "Madhuri", "CSE" , 120];
var [id,name_str,stream,marks] = student;
console.log("Id is: "+id);
console.log("Name is: "+name_str);
console.log("Stream is: "+stream);
console.log("Marks is: "+marks);


console.log();
console.log();

console.log("---- RESTAURANT CLASS ----");
   class restaurant{
     fid:number;
     fname:string;
     description : string;
     cost:number;

     constructor(f_id:number, f_name:string, des : string,
     f_cost:number)
     {
       this.fid=f_id;
       this.fname=f_name;
       this.description = des;
       this.cost = f_cost;
     }
     display()
     {
       var strDisplay = ` Food Id: ${this.fid} \n Food Name: ${this.fname} \n Food Description: ${this.description} \n Food Cost: ${this.cost}`;
     console.log(strDisplay);
     }
   }
   var fobj = new restaurant(100 , 'Palak Paneer' , 'North Indian' , 250);
   fobj.display();



console.log();
console.log();
