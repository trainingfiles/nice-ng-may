"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Component = function (config) {
    return function (TargetClass) {
        let tc = new TargetClass();
        return class {
            constructor() {
                this.title = tc.title;
                this.power = tc.power;
                this.selector = config.selector;
                this.template = config.template;
            }
        };
    };
};
let AppComponent = class AppComponent {
    constructor() {
        this.title = "Hello from Component";
        this.power = 7;
    }
};
AppComponent = __decorate([
    Component({
        selector: "app-root",
        template: `
        <div style="border : 2px solid red; padding : 10px; margin : 10px">
            <h1> Hello from Component </h1>
            <h2>Title : {{ title }}</h2>
            <h2>Power : {{ power }}</h2>
            <input min="0" max="10" type="range" value="{{ power }}">
        </div>
    `
    })
], AppComponent);
