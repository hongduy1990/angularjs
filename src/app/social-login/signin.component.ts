import { Component, OnInit } from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider,
    LinkedinLoginProvider
} from './index';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
})


export class SigninComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() { }

    public socialSignIn(socialPlatform: string) {
        let socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform == "google") {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        } else if (socialPlatform == "linkedin") {
            socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
        }

        this.authService.signIn(socialPlatformProvider).then(
            (userData) => {
                console.log('test AAA');
                console.log(socialPlatform + " sign in data : ", userData);
                // Now sign-in with userData
                // ...

            }
        );
    }

    public signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    public signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    public signOut(): void {
        this.authService.signOut();
    }
}