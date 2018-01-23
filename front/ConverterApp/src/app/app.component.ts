import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 rates: string[];
 result: string;
 constructor(private http: HttpClient) {}
 ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('/api/items').subscribe(data => {
      // Read the result field from the JSON response.
      this.result = data['results'];
    });
  }

  tryToConvert = function() {
    console.log("entered : ");
    console.log("currency1 = " + this.currency1 + " currency2 = " + this.currency2 + " value = " + this.value + " isInterger : " + Number(this.value))
    if(this.currency1 !== "" && this.currency2 && Number(this.value)){
      this.http.get('/api/convert/' + this.currency1 + '/' + this.value + '/' + this.currency2).subscribe(data => {
      this.result = data['Value'];
    });
    }
  }
}
