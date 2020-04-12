import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
type userParams = {
  email: string;
  password: string;
};
@Injectable({
  providedIn: "root",
})
export class AuthService {
  public user;
  constructor(private auth: AngularFireAuth) {}

  async login({ email, password }: userParams) {
    const result = await this.auth.signInWithEmailAndPassword(email, password);
    debugger;
    this.user = result.user;
  }

  async signUp({ email, password }: userParams) {
    const result = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    this.user = result.user;
  }
}
