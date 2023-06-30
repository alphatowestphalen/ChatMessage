import { Component, OnInit } from '@angular/core';
import { FormLogin } from '../Interface/FormLogin';
import { LoginService } from './../service/login/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin = new FormLogin()

  constructor(private formService: LoginService,private router:Router){}

  ngOnInit() {
    this.formLogin= new FormLogin();
  }

  login(){
    
    this.formService.login(this.formLogin).subscribe(data => {
      const objectString = JSON.stringify(data);
      console.log('ok tafiditra ianao', objectString);
    
      localStorage.setItem('user', objectString);
    
      const storedObjectString = localStorage.getItem('token');
      // console.log('ok tafiditra ianao', storedObjectString);
      console.log(localStorage.getItem('user') + "efa ao anaty store io baine ann");
      
      // // Parse the storedObjectString if needed
      // const storedObject = JSON.parse(storedObjectString);
      // console.log(storedObject); // Output: The parsed object from the localStorage
    
      // Continue with other logic or navigation
      this.router.navigate(['/chat']);
    });
    
  }
  
}
