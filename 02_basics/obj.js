const jsUser={
    name:"Rakshitha",
    age:23,
    location:"Puttur",
    email:"raks@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);value wasnt given 

jsUser.greeting=function(){
    console.log("Hello to the panel");
}
jsUser.greetingTwo=function(){
    console.log(`Hello to the panel,${this.name}`);
}
    jsUser.greeting();
   jsUser.greetingTwo();
   

    
