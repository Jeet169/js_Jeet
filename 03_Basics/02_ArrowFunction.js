const sayhello = (para , greeting) => console.log(`hello ${para} ${greeting}`)

const user = {
    name : 'Jitendra',
    role : 'js Developer',
    exp  : 30,
    show : function(){
        /* console.log(`The name is ${this.name}\nThe role is ${this.role}`); */
        // let that = this;
       /*  setTimeout(function(){
            console.log(this)
            console.log(`The name is ${that.name}\nThe role is ${that.role}`)
        }, 2000) */

         setTimeout(()=>{
            console.log(this)
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000)
    }
}


//  
// console.log(user.name , user.exp);
/* sayhello('jitendra' , 'Good morning'); */

const x1 = temp => console.log(`Hi How are you ${temp}`);

/* x1('jitendra'); */

const info = {
    Name : "Jitendra",
    Address : "West Rajputana",
    Work : 'Software Enngineer',
    exp : 3,
    branch : 'Salesforce',
    func : function(){
        console.log(this);
        console.log(`this is my employee ${this.Name}`);
    }
}

// info.func();
// console.log(this);

/* function chai() {  
    let userName = 'jitendra';
    console.log(this.userName)
} */

/* const chai = function() {
    let userName = 'jitendra';
    console.log(this.userName);
} */

const chai = () => {
    let userName = 'jitendra';
    console.log(this.userName);
}
chai();