import { CheckoutServiceService } from './../../services/checkout-service.service';
import { SecondaryService } from './../../services/secondary.service';
import { DatabaseService } from 'src/app/services/database.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {



  searchTerm = new FormControl('')
  searchTermValue:string =''
  searchResults=[]
  constructor(private checkoutSerice: CheckoutServiceService , private dialog: MatDialog,private db:DatabaseService,private secService: SecondaryService) {

this.searchTerm.valueChanges.subscribe(res=>{
  console.log(res)
  this.searchTermValue=res
  this.searchCustomer(this.searchTermValue)

})
}



searchCustomer(term){

//   this.db.searchCustomer(term).then(res=>{
//     this.searchResults= res
//     console.log(res)
//   }).catch(err=>{
// this.secService.presentSanckBar(err,'danger')
//   })

}




  ngOnInit(): void {
  }

  saveCustomer(data){
    console.log(data)
    this.checkoutSerice.setCustomer(data)
    this.dialog.closeAll()
  }

  submit(){

  }

  newCustomerModal(){
    this.dialog.open(AddCustomerComponent,{
      maxWidth:'450px'
      
      
    })
  }


  closeDialog(){


    this.dialog.closeAll()

  }

}
