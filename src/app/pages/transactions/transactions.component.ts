import { Component, OnInit, Inject } from '@angular/core';
import { SecondaryService } from 'src/app/services/secondary.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(@Inject(SecondaryService) private secService:SecondaryService) { }

  ngOnInit(): void {
  }



  drawerToggle(){
    this.secService.toggle()
  }

}
