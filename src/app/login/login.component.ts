import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor() { }
login(form){
  if(form.username.value == "myuserid" && form.password.value == "mypswrd")
  {
    window.open('/employee')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}
  ngOnInit() {
  }

}
