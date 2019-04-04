import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mobile;
  title = 'smu-one';
  names = ['Canvas','My.SMU','Connect.SMU','Is Macs Open', 'Meme Page', 'SMU E-Mail','Daily Campus'];
  links = ['https://smu.instructure.com/','https://my.smu.edu/','https://smu.campuslabs.com/engage/','https://s2.smu.edu/~mirfan/ismacsopen.html', 'https://www.facebook.com/groups/2252432648315371/','http://outlook.com/owa/mail.physics.smu.edu/','https://www.smudailycampus.com/'];

  ngOnInit() {
    if (window.screen.width <= 400) { // 768px portrait
      this.mobile = true;
    }
  }

}
