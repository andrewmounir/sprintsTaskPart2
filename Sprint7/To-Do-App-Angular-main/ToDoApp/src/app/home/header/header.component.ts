import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login = false
  userData: any

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.userData = this.dataService.getUserData()
    if (this.userData.user) {
      this.login = true
    }
  }

  logout() {
    this.login = false
    this.dataService.logoutUser()
    this.router.navigate(['/'])
  }

  home() {
    if (!this.login) this.router.navigate(['/']);
  }
}
