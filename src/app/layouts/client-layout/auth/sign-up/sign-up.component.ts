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

  registerForm : FormGroup ;
  constructor(
    private authService :AuthService ,
    private router : Router ,
  ) {
    this.registerForm = new FormGroup ({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const data = this.registerForm.value;
    this.authService.register(data).subscribe(data =>{
            this.router.navigateByUrl("/signIn");
            console.log(data);

    })


  }
}
