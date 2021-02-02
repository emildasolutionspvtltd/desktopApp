import { customer } from './../../services/types/customerType';
import { CheckoutServiceService } from './../../services/checkout-service.service';
import { CheckoutItem } from './../../services/types/checkoutItem';
import { Items } from './../../services/types/items';
import { AddCustomerComponent } from './../../secondaryPages/add-customer/add-customer.component';
import { DatabaseService } from './../../services/database.service';
import { SecondaryService } from './../../services/secondary.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ListCustomerComponent } from 'src/app/secondaryPages/list-customer/list-customer.component';
import { AddDiscountComponent } from 'src/app/secondaryPages/add-discount/add-discount.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

selectedPaymentMode='cash'
it={
    barcode:'1661009',
    name:'Shakthi Sambar Powder 700 Gram Paket ',
    nameInArabic:'يغني',
    category:'Packed Powder',
	mrp:98.00,
	discount:0,
    price:90,
    tax:'12',
	inventory:102,
	quantity:2,
    unit:'Kg'
  }
customerData:customer
items:Array<CheckoutItem>=[]
 displayedColumns: string[] = ['barcode', 'name','quantity','cost','discount','tax', 'total','buttons'];
 dataSource:MatTableDataSource<CheckoutItem>


 

  constructor( private checkService: CheckoutServiceService ,private dialog:MatDialog, private databaseService:DatabaseService,   @Inject(SecondaryService) private secService:SecondaryService) { 

  }

  ngOnInit(): void {
    this.customerData= this.checkService.selectedCustomer
    
  }




  //drwaer toggle 

  drawerToggle(){
    this.secService.toggle()
  }



  addDiscount(){

    this.dialog.open(AddDiscountComponent,{
      maxWidth:'450px',
      width:'90%',
      panelClass:'dialogCss'

    })
  }



  //below button
  addCustomer(){
	  this.dialog.open(ListCustomerComponent,{
		maxWidth:'450px',
		width:'90%',
		panelClass:'dialogCss'
	  })
  
    
}

insertData(){

	this.items.push(this.it)
	console.log(this.items)
	this.dataSource  = new MatTableDataSource<CheckoutItem>(this.items)

}




changeModePayment(choice){
  this.selectedPaymentMode=choice
}

}
