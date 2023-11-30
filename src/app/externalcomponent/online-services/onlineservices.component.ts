import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'onlineservices',
  templateUrl: './onlineservices.component.html',
  styleUrls: ['./onlineservices.component.css']
})
export class OnlineServicesComponent  {
  form!: FormGroup;
  name = 'Angular ';
  pageType:boolean=true;
  url:string="";
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appcom:AppComponent,  
){}

ngOnInit() {

     
  }
}
