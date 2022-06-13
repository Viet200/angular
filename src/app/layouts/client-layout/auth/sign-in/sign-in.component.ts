import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private AuthService:AuthService,
    private router: Router,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const data = this.loginForm.value;
    this.AuthService.login(data).subscribe(data =>{
        localStorage.setItem("users",JSON.stringify(data));
        this.router.navigateByUrl('/');
    })
  }
}
