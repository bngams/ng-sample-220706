import { Component } from '@angular/core';

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
}

@Component({
  selector: 'app-sub-root',
  template: `
    <h1>Welcome</h1>
  `,
  styles: [`
    h1 { color: red }
  `]
})
export class AppSubComponent {
  title = 'my-app';
}
