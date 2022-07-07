import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  today = new Date();
  svgBgColor = 'dark';
  imgUrl = 'https://picsum.photos/200/300?random=1';
  imgName = 'Lorem picsum';
  isDisabled = true;
  words = ['word1', 'word2', 'word3'];

  constructor() {
  }

  clickMe(event: Event) {
    console.log('clickMe event : ', event)
  }

  toggleIconColor() {
    if(this.svgBgColor == 'dark') {
      this.svgBgColor = 'red';
    } else{
      this.svgBgColor = 'dark';
    }
  }

  toggleBtnState() {
    this.isDisabled = !this.isDisabled;
  }

  handleCustomEvent() {
    console.log('custom event from child component');
  }
}

@Component({
  selector: 'app-sub-root',
  template: `
    <h1>Welcome</h1>
    <p>Value is {{valueFromParent}}</p>
    <p>
      <button type="button" (click)="triggerMyCustomEvent()">Trigger myCustomEvent</button>
    </p>
  `,
  styles: [`
    h1 { color: red }
  `]
})
export class AppSubComponent {
  @Input()
  valueFromParent = 'my-app';

  @Output()
  myCustomEvent = new EventEmitter();

  triggerMyCustomEvent(): void {
    this.myCustomEvent.emit(); // dispatch event
  }
}
