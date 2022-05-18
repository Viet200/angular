import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Đây là nơi định nghĩa component và logic
export class AppComponent {
  // Định nghĩa các biến,
  // Các biến này có thể nhận được giá trị ở file html
  title = 'angular we16301 FPT Poly';

  // Khai báo thêm 1 số biến để html sử dụng
  name = 'vietnv';
  class = 'we16301';

  students = [
    {
      name: 'vietnv1',
      id: 'PH1111',
      status: 0
    },
    {
      name: 'vietnv2',
      id: 'PH2222',
      status: 1
    },
    {
      name: 'vietnv3',
      id: 'PH3333',
      status: 1
    }
  ];

  champs = [
    {
      name: 'Lucian',
      dame: 400,
      defend: 200,
      speed: 100,
      price: 6300,
      avatar: 'https://oneesports.blob.core.windows.net/cdn-data/sites/4/2021/08/pulsefire-lucian-lien-minh-huyen-thoai1.jpg'
    }
  ];
  studentName = "vietnv";
  studentID='ph12345';

  showStatus = true;
  onClickBtn(){
    console.log("btn clicked");
    this.showStatus=!this.showStatus;
  }
  onInput(event:any,inputName:string){
    console.log(inputName, event.target.value);

  }
  inputValue={
    name:'',
    dame:'',
    defend:'',
    speed:'',
    price:'',
    avatar:''
  }
  onInput1(event:any,key:'name'|'dame'|'defend'|'speed'|'price'|'avatar'){
    this.inputValue[key]=event.target.value;

  }
  // inputName = '';
  // onInputName(name:any){
  //   this.inputValue['name']=name.target.value;
  // }
  // // inputAvatar='';
  // onInputAvatar(avatar:any){
  //   this.inputValue['avatar']=avatar.target.value;
  // }
  onSubmit(){
    console.log(
     this.inputValue
    );
      this.champs.push({...this.inputValue,dame:+this.inputValue.dame,
        defend:+this.inputValue.defend,
        speed:+this.inputValue.speed,
        price:+this.inputValue.price,});
        this.inputValue={
          name:'',
          dame:'',
          defend:'',
          speed:'',
          price:'',
          avatar:''
        }
  }

};

