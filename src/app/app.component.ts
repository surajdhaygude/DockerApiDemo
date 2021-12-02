import { Component } from '@angular/core';
import { ApiconsumeService } from './apiconsume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DockerApiDemo';

  constructor(private service : ApiconsumeService) { }
   TempData:any[]=[]
  ngOnInit(): void {

    this.service.GetWetherForecost().subscribe(data=>{
      this.TempData=data;
      console.log(data);
    })
  }
}
