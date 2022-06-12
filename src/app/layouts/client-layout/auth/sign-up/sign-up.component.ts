import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  authForm : FormGroup;
  constructor(
    private router :Router,
    private activateRoute : ActivatedRoute,
  ) {
    this.authForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
  //   const FormData= this.authForm.value;
  //   this.authService.CreateAuth(FormData).subscribe((data)=>{
  //     this.toastr.success('signup thanh cong, chuyen trang sau 3s')
  //     setTimeout(() => {
  //        this.router.navigateByUrl('/auth/login');
  //     },3000);

  //   })
  }
}
