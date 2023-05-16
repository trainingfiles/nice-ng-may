/* 
class Hero{
    title:string = "default title";
    firstname:string = "default title";
    lastname:string = "default title";
    #power:number = 5;
    static version = 101;
    constructor(htitle:string, hfname:string, hlname:string){
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;
    }
    get power():number{
        return this.#power;
    }
    set power(npower:number){
        this.#power = npower;
    }
    saytitle():string{
        return this.title;
    }
    sayname():string{
        return this.firstname+" "+this.lastname;
    }
}; 
*/

/* 
class Hero{
    public title:string = "default title";
    public firstname:string = "default title";
    public lastname:string = "default title";
    private power:number = 5;
    static version = 101;
    constructor(htitle:string, hfname:string, hlname:string){
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;
    }
    get access_power():number{
        return this.power;
    }
    set access_power(npower:number){
        this.power = npower;
    }
    saytitle():string{
        return this.title;
    }
    sayname():string{
        return this.firstname+" "+this.lastname;
    }
};  
*/

interface IHero{
    title : string;
    firstname : string;
    lastname : string;
    score : number;
    saytitle():string;
    sayname():string;
}

class Hero implements IHero{
    static version = 101;
    constructor(
        public title:string, 
        public firstname:string, 
        public lastname:string,
        public score:number,
        private power: number = 0 ){
    }
    get access_power():number{
        return this.power;
    }
    set access_power(npower:number){
        this.power = npower;
    }
    saytitle():string{
        return this.title;
    }
    sayname():string{
        return this.firstname+" "+this.lastname;
    }
}; 