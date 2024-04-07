import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent implements OnInit {


  user:User | any;

  ngOnInit(): void {
    this.user={
      id:1,
      name:'Pedro',
      age:25,
      salary:[100,110,115,120,130],
      active:true
    }

    console.log(this.user)
  }

  

}
