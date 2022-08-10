import { Component, OnInit } from '@angular/core';
import { authState } from '@angular/fire/auth';
import { Auth, GoogleAuthProvider, signOut } from '@angular/fire/auth';
import { signInWithPopup } from '@firebase/auth';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public authState = authState(this._auth);

  constructor(
    private readonly _auth: Auth) { }

  ngOnInit(): void {
  }

  async loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this._auth,provider);
    console.log(this._auth.currentUser);
  }

  async logout(){
    await signOut(this._auth);
  }

  isLogged(){
    return this._auth.currentUser;
  }
}
