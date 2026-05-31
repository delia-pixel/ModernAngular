import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Welcome to modern angular';
  protected isDisabled = false;
  protected count = signal(0);

  protected onClick() {
    console.log('Button is clicked');
    this.isDisabled = !this.isDisabled;
  }

  protected increaseCount() {
    this.count.update((value) => value + 1);
  }

  protected decreaseCount() {
    this.count.update((value) => value - 1);
  }

  protected resetCount() {
    this.count.set(0);
  }

  protected doubleCount = computed(() => this.count() * 2);

  private readonly countLog = effect(() => console.log('count value', this.count()));
}
