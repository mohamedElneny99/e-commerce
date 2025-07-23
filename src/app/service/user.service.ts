import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

  users: User[] = [
    new User( 1 ,'Mohamed Elneny', 'Elneny123','Elneny123@gmail.com','123123' ),
    new User( 2 ,'John Doe22', 'john22','jhon22@gmail.com','123123' ),
    new User( 3 ,'John Doe33', 'john33','jhon33@gmail.com','123123' ),
    new User( 4 ,'John Doe44', 'john44','jhon44@gmail.com','123123' )
  ]
}
