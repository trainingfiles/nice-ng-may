"use strict";
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
class Hero {
    constructor(title, firstname, lastname, score, power = 0) {
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        this.score = score;
        this.power = power;
    }
    get access_power() {
        return this.power;
    }
    set access_power(npower) {
        this.power = npower;
    }
    saytitle() {
        return this.title;
    }
    sayname() {
        return this.firstname + " " + this.lastname;
    }
}
Hero.version = 101;
;
