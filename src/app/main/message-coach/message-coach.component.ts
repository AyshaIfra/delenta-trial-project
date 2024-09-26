import { Component } from '@angular/core';

@Component({
  selector: 'app-message-coach',
  templateUrl: './message-coach.component.html',
  styleUrls: ['./message-coach.component.scss']
})
export class MessageCoachComponent {

  users = [
    { imageUrl: 'assets/images/message/user1.svg' },
    { imageUrl: 'assets/images/message/user4.svg' },
    { imageUrl: 'assets/images/message/user2.svg' },
    { imageUrl: 'assets/images/message/user3.svg' },
    { imageUrl: 'assets/images/message/user4.svg' },
    { imageUrl: 'assets/images/message/user1.svg' },
    { imageUrl: 'assets/images/message/user1.svg' },
    { imageUrl: 'assets/images/message/user1.svg' },
    { imageUrl: 'assets/images/message/user1.svg' },
    { imageUrl: 'assets/images/message/user1.svg' }
  ];

  maxVisibleUsers = 5; 

}
