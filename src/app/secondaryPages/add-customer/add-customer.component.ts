import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SecondaryService } from 'src/app/services/secondary.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {


  customerForm = new FormGroup({
    name:  new FormControl('',Validators.required),
    email:new FormControl(''),
    phNumber: new FormControl(''),
    notes: new FormControl(''),
  })

  constructor(private dialog:MatDialog,private db: DatabaseService,private secService:SecondaryService) { }

  ngOnInit(): void {
  }


  closeDialog(){
    this.dialog.closeAll()
  }

  submit(){
if(this.customerForm.valid) {

  // this.db.insertCustomer(this.customerForm.value).then(x=>{
  //   this.secService.presentSanckBar(' 👍 Customer Add SuccessFully','success')
  //   this.customerForm.reset()
  //   this.closeDialog()
    
  // })
 
}else{
//toast

this.secService.presentSanckBar('👮 Please fill the Name field atlest to submit','danger')
} }
  

}
