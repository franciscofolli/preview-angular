import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { SignUpRequest } from '../login/models/login-model';
import { SignupService } from '../login/service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signUpForm: any;
  public showLoading = false;
  
    public close: PoModalAction = {
    action: () => {
      this.createForm();
      this.closeModal();
    },
    label: 'Cancelar',
    danger: true
  };

  public confirm: PoModalAction = {
    action: () => {
      this.signUp(this.signUpForm);
    },
    label: 'Confirmar'
  };

  public confirmModalLink: PoModalAction = {
    action: () => {
      this.createForm();
    },
    label: 'Confirmar'
  };

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent | any;
  @ViewChild('modalLink', { static: true }) modalLink: PoModalComponent | any;
  

  constructor(private service: SignupService,
              private router: Router,
              private poNotificationService: PoNotificationService) { }

  ngOnInit() {
    this.createForm();
  }

  private signUp(data: SignUpRequest): void {
    this.showLoading = true;
    this.service.registerNewUser(data)
    .subscribe((element: any) => {
      this.router.navigate(['/login']);
      this.showLoading = false;
    },
      (    fail: { error: any; }) => {
      console.log('fail', fail);
      const { error } = fail;
      this.showLoading = false;
      this.poNotificationService.error(error.error)
    });
  }

  private createForm(){
    this.signUpForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });

  }

  private closeModal(): void {
    if(this.poModal){
      this.poModal.close();
    }
  }

  public openModal(): void {
    if(this.poModal){
      this.createForm();
      this.poModal.open();
    }
  }

}
