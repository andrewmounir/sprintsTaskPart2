import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  load = false
  usersData!: User[]
  passwords: {[itemId: string]: string} = {};

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(res => {
      this.load = true
      this.usersData = res
    }, err => this.load = false);
  } 

  login(itemID: number) {  
    let user: any = this.usersData.find(it => it.id === itemID)
    this.dataService.setToken(user.username, this.passwords[itemID])
    this.dataService.getUser() 
      .subscribe(res => {
        this.dataService.setUserData(user, res)
        this.router.navigate(['/todos'])
      }, err => alert('Password is incorrect'));
  }
}

