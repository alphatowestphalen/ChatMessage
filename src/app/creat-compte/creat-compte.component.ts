import { CreateService } from './../service/create.service';
import {Component, NgModule, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormCreat } from '../Interface/FormCreat';
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-creat-compte',
  templateUrl: './creat-compte.component.html',
  styleUrls: ['./creat-compte.component.css']
})
export class CreatCompteComponent implements OnInit {
  public formCreat= new FormCreat();
  constructor( private creatService:CreateService,private router: Router){}

  ngOnInit() {
    this.formCreat= new FormCreat();
  }

  save(){
    
    this.creatService.creat(this.formCreat).subscribe(data =>{
      console.log('ok tafiditra ianao',data); 
      this.router.navigate(['/'])     
    })
    
  }


}
