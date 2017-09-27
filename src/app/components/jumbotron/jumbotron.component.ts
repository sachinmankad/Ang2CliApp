import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'jumbotron',
    templateUrl : 'jumbotron.component.html',
    styleUrls : ['./jumbotron.component.css']
})

export class JumbotronComponent {
    private jbtHeading:string;
    /*private jbtText:string;
    private jbtBtnText:string;
    private jbtUrl:string;*/
    
    constructor (){
        this.jbtHeading = 'Intelligent Document Parser';
    }
}