function addPower(pow:number){
    return function(TargetClass:any){
        let person = new TargetClass()
        return class{
            name = person.name;
            power = pow
        }
    }
}

@addPower(7) 
class Commonman{
    name = "Bruce Wayne";
};

var cm = new Commonman()
console.log( cm );
