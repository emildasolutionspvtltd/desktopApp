import { Component, OnInit, Inject } from '@angular/core';
import { SecondaryService } from 'src/app/services/secondary.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(@Inject(SecondaryService) private secService:SecondaryService) { }

  ngOnInit(): void {
  }



  drawerToggle(){
    this.secService.toggle()
  }
}
