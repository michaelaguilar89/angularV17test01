import { Component, OnInit, Signal } from '@angular/core';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {

  list : User[]|any;
  
  /**
   *
   */
  constructor(private service:DataService) {
    
    
  }

  ngOnInit(): void {
    this.list=this.service.getList();
  }

}
