// console.log("Testing")



// // Var keyword value can be changed and re declared
// // global and function scope suported not block scope


// //normal comparrisoin only compare value

// console.log(3==3)
// console.log("Manu"=="Manu")

// console.log(3=="3")

// // Strict comparision compares value and datatype

// console.log(3==="3")//false

// // Null vs undefined

// var x

// console.log(x)

// console.log(typeof x)

// var y= null
// console.log(y)

// console.log(x==y)//true

// console.log(x===y)

// var arr=["a","b","c"]

// console.log(arr)

// console.log(arr[0])

// arr.push("3")

// console.log(arr)

// // object

// var obj={
//     "name":"salesforce",
//     "age":53
// }

// console.log(obj.age)

// console.log(obj["name"])

// obj.hobbies="cricket"
// console.log(obj)



// // Spread operatot
// //1.Expanding of String
// let greeting = "Hello World"

// let charList =[...greeting]

// console.log(charList)

// //2. combining 

// let arr1 = ["amazon","google"]
// let arr2 = ["facebook","twitter"]

// let arr3 =[...arr1,...arr2]

// console.log(arr3)

// //3.adding values to an array
// let arr4=["a","b","c"]

// let arr5 =[...arr4,"manu"]

// console.log(arr5)

// //4.Combining objects

// let obj1 ={
//     name:"Salesforce",age:29,date:"23/10/1990"
// }
// let obj2 ={
//     name:"facebook",age:20,next:"Hello"
// }

// let obj3 ={...obj1,...obj2}

// console.log(obj3)

// //5.shallow copy

// let arrq1 = ["amazon","google"]
// //let arrq2 = arrq1
// let arrq2 = [...arrq1]
// console.log(arrq1)
// arrq2.push("Max")

// console.log(arrq1)
// console.log(arrq2)

// //nested copy

// var arrobj =[

//     {name:"Manu"},
//     {name:"salesforce"}
// ]

// // var arrobj1=[...arrobj]
// // console.log(arrobj1)
// // //arrobj1[0].name ="max"
// // console.log(arrobj1)
// // console.log(arrobj)

// //hack nested copy


// var arrobj1= JSON.parse(JSON.stringify(arrobj))
// arrobj1[0].name ="max"
// console.log(arrobj1)
// console.log(arrobj)



//destructuring array
// let arr = ["amazon","google"]

// // let company1=arr[0]
// // let company2=arr[1]

// let[company1,company2]= arr

// console.log(company1)
// console.log(company2)

// //Object destructuring'

// let obj ={
//     title:"mr",
//     name:"manu",
//     age:25
// }

// // var title =obj.title
// // var age = obj.age



// let{title,name,age}= obj
// console.log(title)
// console.log(name)
// console.log(age)

//String Interpolation

// var name="Sales"
// var name1 ="force"

// console.log(name+name1)
// var name = "manu"
// var age = 29

// var str ="My Name is "+ name + " My age "+age

// console.log(str)

// console.log(`hello ,${name}!`)

// var a=10
// var b =20
// console.log(`the sum of ${a} & ${b} is ${a+b}`)




//map
//Syntax

// arr.methodname(function(currentItem,index,actualArray){

// })
// let arr =[2,3,4,5,7,8,9]
// let newArr = arr.map(function(currentItem,index,array){
//     console.log(`Current item is ${currentItem} index ${index}`)
//     return currentItem*2

//    })
//    console.log(arr)
//    console.log(newArr)

   //filtermethod

//    let num =[7,9,3,5,2]

//   let filtered = arr.filter(function(currentItem,index,array){
//     return currentItem > 5
//    })

//    console.log(filtered)

   //every() if every item is true

//    let age=[35,36,17,19,22]

//     let adultsOnly = age.every(function(currentItem,index,array){
//     return currentItem >=18
//    })
//    console.log(adultsOnly)


//    //some() true if single item is true
//    let someAdultsOnly = age.some(function(currentItem,index,array){
//     return currentItem >=18
//    })

//    console.log(someAdultsOnly)

// sorting of Names

// var names=["max","Ajax","ajax","will"]

// console.log(names.sort())

//sorting numbers

// let sortedAgeAscen = age.sort(function(a,b){
//     return a-b
// })
// console.log(sortedAgeAscen)


// let sortedAgeDes = age.sort(function(a,b){
//     return b-a
// })
// console.log(sortedAgeDes)

//reduce
//  array.reduce(function(total,currentValue,index,array){

//  },initialValue)

// let numbers =[12,35,58,12,36]

// let sum = numbers.reduce(function(total,currentItem){
//     return total+currentItem
// },0)

// console.log(sum)

// //forEach()

// numbers.forEach(function(currentItem){
//     console.log(currentItem)
// })
 //promise object

 

//
// function checkSucess(data){

//     return new Promise(function(resolve,reject){
//         if(data==="success"){
//             return resolve("sucessfully executed")
//         }else{
//             return reject("failed to execute function")
//         }
//     })
// }

// checkSucess("success").then(function(result){
//     console.log(result)
// }).catch(function(error){
//     console.error(error)
// })

// checkSucess("failed").then(function(result){
//     console.log(result)
// }).catch(function(error){
//     console.error(error)
// })}

//importing from another JS file



// import minus,{PI,add} from './utils.js'


// console.log(PI)

// console.log(add(5,6))

// console.log(minus(10,5))


// import * as UTILS from './utils.js'

// console.log(UTILS.PI)

// console.log(UTILS.add(5,9))

// console.log(UTILS.default(10,5))

// let element= document.querySelector('div')
// element.style.color ="red"

// console.log(element)

// let elements= document.querySelectorAll('div')

// console.log(elements)

// Array.from(elements).forEach(function(item){
//     item.style.color ="green"
// })

// function firstEvent(){
//     console.log("Hurray")
// }


// let btn = document.querySelector("button")
// btn.addEventListener("click",firstEvent)

// document.addEventListener("mousemove",handler)

// function handler(){
// document.querySelector(".demo").innerHTML = Math.random()
// }

// function removeHandler(){
//    document.removeEventListener("mousemove",handler)
// }


// document.addEventListener("hello",function(data){
//    console.log("Hello has called and send  ",data.detail)
// })

// function customMethod(){

//    let event = new CustomEvent("hello",{detail:{name:"Manu"}
//    })
//    document.dispatchEvent(event)
// }'

//arrow function

// function abc(){
//    console.log("hello")
// }

// abc()

// const abcd = ()=>console.log("hello arrow")
// abcd()


// function sum(data){
//    let sum = data + 10
//    return sum
// }
// console.log(sum(5))

//    const sum1 =(a,b) => {
//       let sum1 = a+b+10
//       return sum1
//    }

//    console.log(sum1(15,5))

// let arr =[2,3,4,5,7,8,9]
// let newArr = arr.map(function(currentItem){
//     return currentItem*2

//    })

//    console.log(newArr)

//    let newArrow = arr.map((item)=>item*2)
//    console.log(newArrow)



//problem solved by Arrow function

// let obj ={
//    name1:"Manu",
//    getName:function(){
//       console.log(this.name1)
//       const fullName=()=>{
//          console.log(this.name1)
//          console.log("my full name id "+ this.name1 + " max")
//       }
//       fullName()
//    }
// }

// obj.getName()

//set timeout

let timerID = window.setTimeout(function(){
   console.log("Hello")
},5000)

console.log(timerID)
clearTimeout(timerID)

//setInterval

let intervalId = window.setInterval(function(){
   console.log("hello")
},5000)

clearInterval(intervalId)