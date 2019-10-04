import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  styles: [`
  .online {
    color: white;
    `]
})
export class UsersComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  userName = 'Test';
  userStatus: string = 'online';
  users = []
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.users.push(this.userName);
    this.show = !this.show;
    
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  getColor(){
    if(this.userName)
    return this.userStatus === 'online' ? 'blue' : 'blue';
  }
}
