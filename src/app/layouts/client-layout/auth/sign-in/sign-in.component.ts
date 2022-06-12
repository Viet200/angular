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

  // loginForm: FormGroup;
  constructor(
    private router: Router,

  ){}
  ngOnInit(): void {
  }
  // {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', Validators.email),
  //     password: new FormControl(''),
  //   });
  // }

  // ngOnInit(): void {}
  // onSubmit() {
  //   this.authService.login(this.loginForm.value).subscribe((data) => {
  //     localStorage.setItem('loggedInUser', JSON.stringify(data));
  //     this.toastr.success('Login thành công chuyển trang sau 3s');
  //     setTimeout(() => {
  //       this.router.navigateByUrl('/admin/products');
  //     }, 3000);
  //   });
  // }

}
