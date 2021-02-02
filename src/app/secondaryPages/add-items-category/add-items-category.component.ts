import { DatabaseService } from 'src/app/services/database.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SecondaryService } from 'src/app/services/secondary.service';
import { ElectronService } from 'ngx-electron';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items-category',
  templateUrl: './add-items-category.component.html',
  styleUrls: ['./add-items-category.component.scss']
})
export class AddItemsCategoryComponent implements OnInit {

categoryName= new FormControl('',Validators.required)

  constructor(private dialog : MatDialog,private db: DatabaseService,private secService:SecondaryService,private _electronService: ElectronService, private router: Router) { }

  ngOnInit(): void {
  }


   
  closeDialog(){
    
    this.dialog.closeAll()
    this.router.navigate(['items'])
  }




  submit(){
  if(this.categoryName.valid){
    this.db.insertCategory({type : 'category',categoryName:this.categoryName.value}).then(x=>{
      console.log(x)
      this.secService.presentSanckBar("👍 Category added Successfully",'success')
    

    })
  }else{

    this.secService.presentSanckBar("👮🏻  Please fill valid input",'danger')
    
  }  
  


  }
}
