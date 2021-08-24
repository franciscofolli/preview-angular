import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';
import { LoginRequest, LoginResponse, SignUpRequest } from './models/login-model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  public showLoading = false;
  public customLiterals: PoPageLoginLiterals = {
    loginPlaceholder: 'Insira seu E-mail',
    passwordPlaceholder: 'Insira sua senha de acesso',
    submitLabel: 'Acessar Portal'
  };

  private loginRequest: LoginRequest | undefined;

  constructor(private router: Router,
              private service: LoginService,
              private poNotificationService: PoNotificationService) {}

  ngOnInit(): void {
  }

  public onExecuteLogin(data: { login: string; password: string; }): void {
    this.showLoading = true;
    this.loginRequest = {
      email: data.login,
      password: data.password
    }
    this.service.executeLogin(this.loginRequest)
    .subscribe((element: { id: any; name: any; email: any; }) => {
      
      sessionStorage['id'] = element.id;
      sessionStorage['name'] = element.name;
      sessionStorage['email'] = element.email;

      this.router.navigate(['/home']);

      this.showLoading = false;
    },
      (    fail: { error: any; }) => {
      console.log('fail', fail);
      const { error } = fail;
      this.showLoading = false;
      this.poNotificationService.error(error.error)
    });
    
  }



  public recoveryPassword(data: { login: any; password: any; }): void {
    this.showLoading = true;
    this.loginRequest = {
      email: data.login,
      password: data.password
    }
    this.service.executeLogin(this.loginRequest)
    .subscribe((element: { id: any; name: any; email: any; }) => {
      
      sessionStorage['id'] = element.id;
      sessionStorage['name'] = element.name;
      sessionStorage['email'] = element.email;

      this.router.navigate(['/home']);

      this.showLoading = false;
    },
      (    fail: { error: any; }) => {
      console.log('fail', fail);
      const { error } = fail;
      this.showLoading = false;
      this.poNotificationService.error(error.error)
    });
    
  }





}