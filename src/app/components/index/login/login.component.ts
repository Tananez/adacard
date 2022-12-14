import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any = [];

  constructor(
    private crudService: CrudService,
    private router: Router,
    private snackBar: MatSnackBarModule
    ) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
    
  ngOnInit() {   


  }

  login() { 

    const data = {
      token:this.crudService.getToken(),
      send_inputs: this.loginForm.value
    };    

    this.crudService.post('index.php?mode=login', data).subscribe((data:any) => {

      this.data = data
    
      if(data['code'] == 1)	{
        localStorage.setItem('token', data['token']);       
        this.router.navigate(['/user/home']);
          console.log(data['response']); 
      }else if(data['code'] == 0) {
          console.log(data['response']);
      }

    },
    error => {console.log(error.error);}
    );

  }
 

}
