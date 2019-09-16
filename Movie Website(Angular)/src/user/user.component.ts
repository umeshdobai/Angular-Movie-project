import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector:'user-app',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{
    
    ngOnInit(): void {
        
    }
 
 
 
    user = new User();

    constructor() {}

    save(userForm:NgForm){
            console.log(userForm.form);
            console.log('Saved data ' + JSON.stringify(userForm.value) )
    
    }

}