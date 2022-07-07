import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  title = 'my-app';
  today = new Date();
  svgBgColor = 'dark';
  imgUrl = 'https://picsum.photos/200/300?random=1';
  imgName = 'Lorem picsum';
  isDisabled = true;
  words = ['someword1', 'word2', 'someword3'];

  constructor() {
  }

  ngOnInit() {

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
      <button type="button" mat-raised-button color="primary" (click)="triggerMyCustomEvent()">Trigger myCustomEvent</button>
    </p>
  `,
  styles: [`
    h1 { color: red }
  `]
})

export class GetStartedSubComponent {
  @Input()
  valueFromParent = 'my-app';

  @Output()
  myCustomEvent = new EventEmitter();

  triggerMyCustomEvent(): void {
    this.myCustomEvent.emit(); // dispatch event
  }
}
