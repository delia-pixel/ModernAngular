import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Welcome to modern angular';
  protected isDisabled = false;

  protected onClick() {
    console.log('Button is clicked');
    this.isDisabled = !this.isDisabled;
  }
}
