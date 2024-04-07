import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-update-users',
  standalone: true,
  imports: [],
  templateUrl: './create-update-users.component.html',
  styleUrl: './create-update-users.component.css'
})
export class CreateUpdateUsersComponent {

  form= new FormGroup({
    nam : new FormControl(''),
    age : new FormControl(0),
    salary: new FormControl(0),
    active: new FormControl('true')
  })


  onSubmit() {
    console.log(this.form.value)
    }
    
}
