// tatlong klase ng consloe
// console.log("Hello ito ay console log");
// console.warn("ito ay consloe log warning");
// console.error("ito ay console log error");

// variables
// tatlo method
// var pag gumawa bago, papalitan yung nauna
// let pag dineclare ulit mag eerror
// const kung ano sinet mo di na pede baguhin
// let Naem = "ito ay var name";
// Naem = "ito ay bagong varname at nawala ang unang varname";
// console.log(Naem);

// data types
// string numbers boolean null undefined
// const name = "ito ay const name";
// const age = 22;
// const rating = 49.9;
// const isComplete = true;
// const val = null;
// const undef = undefined;
// // console.log(typeof undef);
// let itoaylet;
// itoaylet = "value ng ito ay let";
// console.log(typeof itoaylet);

// const Name = "ItoAyName";
// const age = 22;

// let stringlet = "itong stringlet ay may name na = "+name+" at age na = "+age;
// console.log(stringlet);

// template strings
// backticks
// let stringlet = `itong stringlet ay may name na ${Name} at may age na ${age}`;
// console.log(Name.toLocaleUpperCase());

// ARRAY from 0 to 10
// const Names = ["Rolly","Marissa","AJ","Moy","Madeng","Levi"]; //0-5
// Names[6] = "Nica";
// push dagdag sa last
// unshift dagdag sa unahan
// pop = delete
// Array.isArray(name ng array mo) = para icheck kung array siya
// indexOf = para malaman pang ilan sa array
// splice(saan sa array magsisimula/index, ilan ang tatanggalin)
// maganda mag indexOf bago mag splice para malaman index
// Names.pop();
// console.log(Array.isArray(Names));
// console.log(Names.indexOf("Moy"));
// Names.splice(3,1);
// sa splice sinabi ko na magsimula kay AJ at tatanggalin ang kasunod then display
// console.log(Names);

// BRACKETS FOR ARRAYS []
// CURLY BRACES FOR OBJECTS {}
// OBJECT = KEY VALUE PAIRS

// OBJECT LITERALS
// ginagamit sa API
// katulad ng sa fb pag nagbibigay sila ng data; naka-object

// const Tao = {
//     firstname: 'itoayfirstname',
//     lastname: 'itoaylastname',
//     age: 99,
//     // object ang actions
//     actions: ['walk','eat','sleep','run'],
// 
//      array sa loob ng object
// 
//     // array ang fav
//     // maganda ang array pag may parang category
//     fav: {
//         food: 'chicken',
//         movie: 'Wall-E',
//         shoes: 'air jordan',
//         birthmonth: 'August'
//     },
// };
// access the array
// console.log(Tao.actions[2]);
// access the object
// console.log(Tao.fav.movie);

// object sa loob ng array
// const Friends = [
//     {
//         id: 1,
//         fullname: "First Friend",
//         type: "Mutual",
//     },
//     {
//         id: 2,
//         fullname: "Second Friend",
//         type: "Mutual",
//     },
//     {
//         id: 3,
//         fullname: "Third Friend",
//         type: "Close",
//     }
// ];
// console.log(Friends[1].type);


// FOR & WHILE LOOP
// for(let i = 0; i < Friends.length; i++){
//     console.log(Friends[i].type);
// }

// let i = 0;
// while(i <= 10)
// {
//     console.log(`ito ay ang ${i} while loop`);
//     i++;
// }

// forof
// MAS MALINIS KESA FOREACH
// for(let friend of Friends){
//     console.log(friend.fullname);
// }

// foreach
// Friends.forEach(function(friend){
//     console.log(friend.fullname)
// });

// MAP
// ARRAY ANG IRERETURN PERO NAKA DEPENDE SA GUSTO MONG KVP NG OBJECT
// const FriendfullName = Friends.map(
//     function(friend){
//         return friend.fullname;
// });

// const FriendsType = Friends.filter(
//     function(friend){
//         return friend.type == "Mutual";
// }).map(function(friend){
//     return friend.fullname;
// });
// console.log(FriendsType);
// i-return/display ang mga friend(singular) 
// sa loob ng Array=Friends 
// na ang object na type ay mutual
// then i-return/display ang object id thru map()
// ng mga friend na ang object type na mutual

// API natanggap lng ng JSON Format
// const FriendsJSON = JSON.stringify(Friends);
// console.log(FriendsJSON);

// CONDITIONALS
// const x = "40";
// sa loob ng if statemet
// 1"=" -> error
// 2"==" -> good
// 3"=" -> identical/katulad
// maganda mag logical OR/AND para di na mag else if
// if(x === 40 || x > 20){
//     console.log("ang value ng x ay 40 at mas malaki sa 20");
// }else{
//     console.log("ang value ng x ay hindi 9");
// }

// FUNCTIONN TYPES
let x = 50;
let y = 50;
// declare some variable
// declare function
// function name
// parameters
// function GetSum(x,y){
//     return x + y;
// }
// console.log(GetSum(x,y));

// ARROW FUNCTION 
// const GetSum = (x,y) => {
//     return x+y;
// }

// pag isa lang laman/expression/parameter
// const GetSum = x => x + y;
// console.log(GetSum(x,y));

// OOP
// constructor function
// sa loob ng parameter ilagay mo what describes that function name
// function kaapg hindi OOP
// function Axie(aclass, horn, mouth, back, tail){
//     this.aclass = aclass;
//     this.horn = horn;
//     this.mouth = mouth;
//     this.back = back;
//     this.tail = tail;

//     this.getAxieBodyParts = () =>{
//         return `${this.aclass} = ${this.horn} + ${this.mouth} + ${this.back} + ${this.tail}`;
//     }
// }
// EXAMPLE I MADE FUNCTION AND CLASS TO MAKE AXIES
// classname always starts w/ UpperCase
// class Axie{
//     // declare a property
//     // constructor/ construct what makes that Class Name
//     constructor(aclass, horn, mouth, back, tail){
//         // eto raw yung fname/lname/bt ni Tao Class gamit yung this
//         this.aclass = aclass;
//         this.horn = horn;
//         this.mouth = mouth;
//         this.back = back;
//         this.tail = tail;
//     }

//     getAxieBodyParts(){
//         return `${this.aclass} = ${this.horn} + ${this.mouth} + ${this.back} + ${this.tail}`;
// }   
// }
// instantiate/initiate object
// const Axie1 = new Axie("Beast","Little Branch","Lam","Anemone","Navaga");
// const Axie2 = new Axie("Reptile","Acro","Piranha","Blue Moon","Koi");
// console.log(Axie1.getAxieBodyParts());
// console.log(Axie2.getAxieBodyParts());

// DOM SELECTION
// "#" = ID
// "." = CLASS
// const domID = document.getElementByID("yourID");
// const jqueryID = document.querySelector("#jqueryID");
// const jqueryClass = document.querySelector(".jqueryClass");
// console.log(domID);
// console.log(jqueryID);
// console.log(jqueryClass);

// target multiple class
// const multiClasses = document.querySelectorAll(".yourMultiClass")
// console.log(mutliClasses);

// multiClasses.forEach(function(multiClass){
    // console.log(multiClass);
// });

// DOM MANIPULATION
const ul = document.querySelector(".ulClass");
// remove all items = remove()
// lastElementChild.remove() = last value
// firstElementChild.remove() = pinakauna value
ul.firstElementChild.textContent = "First Value ito";
ul.children[1].innerText = "ul.children[target the index inside the array].then nilagay ito using innerText";
ul.lastElementChild.innerHTML = "<h1>ul.lastElementChild kase eto yung uling element child ng UL.then using innerHTML nakagawa ka ng html inside javascript ito ay tinatawag na DOM MANIPULATION</h1>";

// baguhin style ng css using javascript
// const btn = document.querySelector('#btn-id');
// btn.style.background = "yellow";

// DOM EVENTS
// pwede gumawa ng functions when CLICKING
const btn = document.querySelector('#jquery-btn-id');
const formCon = document.querySelector('.class-formContainer');
btn.style.background = "green";
const formID = document.querySelector('#jquery-formID');
// EVENTLISTENER
// btn.addEventListener("click", function(e){
    // cancel out the default event of the element
    // meaning imbis isubmit yung button, ica-cancel ng e.preventdefault
    // e.preventDefault();
    // console.log('button clicked');
    // console.log('button bg changed from green to blue');
    // console.log('form container bg changed from white to yellow');
    // DOM MANIPULATION USING EVENTLISTENER
    // Form.style.background = "yellow";
    // from green to blue papalitan ang bg at innertext
    // btn.style.background = "blue";
    // btn.innerText = "ANG BUTTON TEXT AY NAPALITAN KAPAG NACLICK";
// });

// FORM VALIDATION
const inpUname = document.querySelector('#input-UnID');
const inpPwd = document.querySelector('#input-PwdID');
const msg = document.querySelector('#msg');
btn.addEventListener("click", function(e){
    e.preventDefault();

    // check kung may laman ang dalawang input field
    if(inpUname.value.length === 0 || inpPwd.value.length === 0){
        console.log('FALSE KASE WALA KA NILAGAY SA INPUT FIELD TAS CLINICK MO LANG');
        msg.innerHTML = "<h4 class='error'>FILL UP THE INPUT FIELDS. Appended an inner html in JS while targeting the div with id = msg tapos para maclick ulit ang button while displaying this error, tinarget ko yung class=err netong innerHTML</h4>";
        const err = document.querySelector('.error');
        err.style.color = "red";
        err.style.fontSize = "large";
        // setTimout params (set mo gagawin nya pag nag time out, set mo ilang oras)
        // itarget mo yung class error para maclick ulit
        setTimeout(() => err.remove(), 5000);
    }else{
        console.log('TRUE KASE MAY NILAGAY KA SA INPUT FIELD TAS CLINICK MO');
        // msg.innerHTML = "<h4>FILLED UP THE INPUT FIELDS. Appended an inner html in JS while targeting the div with id = msg</h4>";
        formID.submit();
    }
});