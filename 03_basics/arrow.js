const user={
    username:"Raks",
    price:999,
welcomeText:function(){
    console.log(`${this.username} ,Welcome to Website`);
    
}
}
user.welcomeText()
user.username="sam"
user.welcomeText()

function chai(){
    console.log(this);
    
}
chai()
///////IIFE/////
