import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  list :User[]|any;
  constructor() { 
    this.list=[
      {id:1,name:'Juan',age:40,salary:[200,250,300],active:true},
      {id:2,name:'Pedro',age:41,salary:[100,150,200,180],active:true},
      {id:3,name:'Jacobo',age:50,salary:[200,250,300],active:true},
      {id:4,name:'Esteban',age:30,salary:[200,250,300,500],active:false},
      {id:5,name:'Timoteo',age:35,salary:[200,250,300,150],active:true},
      {id:6,name:'Elias',age:48,salary:[2400,4250,3300,450],active:true},
      {id:7,name:'Eliseo',age:56,salary:[2200,2250,2300,800],active:true},
    ]
  }


  getList(){
    return this.list;
  }

  add(user:User){
    this.list.push(user);
  }

  update(user:User){

  }

 
}
