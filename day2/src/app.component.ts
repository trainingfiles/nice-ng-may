let Component = function(config:any){
    return function(TargetClass:any){ 
        let tc = new TargetClass();
        return class {
            title:string = tc.title;
            power:number = tc.power;
            selector:string = config.selector;
            template:string = config.template;
        }
    }
}

@Component({
    selector : "app-root",
    template : `
        <div style="border : 2px solid red; padding : 10px; margin : 10px">
            <h1> Hello from Component </h1>
            <h2>Title : {{ title }}</h2>
            <h2>Power : {{ power }}</h2>
            <input min="0" max="10" type="range" value="{{ power }}">
        </div>
    `
})
class AppComponent{
    title:string = "Hello from Component" ;
    power:number = 7 ;
}