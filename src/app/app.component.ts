import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  input = 'My name is abc';
  ngOnInit() {
    let result = '';
    let iniArray = [];
    for (let i = 0; i < this.input.length + 1; i++) {
      if (this.input[i] == ' ' || this.input[i] == undefined) {
        iniArray.push(result);
        result = '';
      } else {
        result += this.input[i];
      }
    }
    console.log(iniArray);
    let final = [];
    for (let i = 0; i < iniArray.length; i++) {
      let data = '';
      for (let j = 1; j < iniArray[i].length + 1; j++) {
        data += iniArray[i][iniArray[i].length - j];
      }
      final.push(data);
      data = '';
    }
    console.log(final);
    let final1 = '';
    final.forEach((response) => {
      final1 += response + ' ';
    });
    console.log(final1);
  }
}
