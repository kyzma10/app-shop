import {Component, OnInit} from '@angular/core';
import {
  AuthService as AuthSocial,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

  constructor( private socialAuthService: AuthSocial, private auth: AuthService ) {}

  ngOnInit() {}

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData: any) => {
        console.log(socialPlatform+ " sign in data : " , userData);
        this.auth.loginGoogle(userData.token).subscribe(data => console.log(data));

      }
    );
  }

}
