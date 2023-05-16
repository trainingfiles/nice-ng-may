// import { Pson } from "./person.js";
import Vijay,{ Person2 } from "./person.js";

export class Hero extends Person2{
    title = "default title";
    firstname = "default title";
    lastname = "default title";
    #power = 5;
    static version = 101;
    constructor(htitle, hfname, hlname, hcf){
        super(hcf);
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;
    }
    get power(){
        return this.#power;
    }
    set power(npower){
        this.#power = npower;
    }
    saytitle(){
        return this.title;
    }
    sayname(){
        return this.firstname+" "+this.lastname;
    }
};