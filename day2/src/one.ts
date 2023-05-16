let message : string = "welcome to your life";
message = "hello again";

let version : number = 5;

let agree : boolean = true;

// let list:Array<string> = ['',5,false];
let list:string[] = ['',"5","true"];

let value : (string | number)[] = ["",5];

let user1 = null;// developer assigned value
let user2 = undefined;// system assigned value

/* 
let details:any = 5;
details = "asdf"; 
*/

alert(message);


function adder(num1:number, num2:number, num3?:number):number{
    if(num3){
        return num1 + num2 + num3;
    }else{
        return num1 + num2;
    }
};

function saymessage():void{
    console.log("hello there");
};




