import { Component, OnInit, Inject } from '@angular/core';
import { SecondaryService } from 'src/app/services/secondary.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(@Inject(SecondaryService) private secService:SecondaryService) { }

  ngOnInit(): void {
  }

  drawerToggle(){
    this.secService.toggle()
  }
}
