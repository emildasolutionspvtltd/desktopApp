import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{ Items } from '../../services/types/items'
import { from } from 'rxjs';
import { SecondaryService } from 'src/app/services/secondary.service';



@Component({
  selector: 'app-add-single-item',
  templateUrl: './add-single-item.component.html',
  styleUrls: ['./add-single-item.component.scss']
})
export class AddSingleItemComponent implements OnInit {


  itemForm = new FormGroup({
    type : new FormControl('items'),
    barcode: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    nameInArabic: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    mrp: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    tax: new FormControl('', Validators.required),
    inventory: new FormControl('', Validators.required),
    unit: new FormControl('', Validators.required)
  })     


  items:Array< Items>=[{
   barcode:'1661009',
   name:'Sambar Powder',
   nameInArabic:'يغني',
   category:'Packed Powder',
   mrp:98.00,
   price:90,
   tax:'12% GST',
   inventory:102,
   unit:'1Kg'
 },
 {
  barcode:'1661009',
  name:'Sambar Powder',
  nameInArabic:'يغني',
  category:'Packed Powder',
  mrp:98.00,
  price:90,
  tax:'12% GST',
  inventory:102,
  unit:'1Kg'
},
{
  barcode:'1661009',
  name:'Sambar Powder',
  nameInArabic:'يغني',
  category:'Packed Powder',
  mrp:98.00,
  price:90,
  tax:'12% GST',
  inventory:102,
  unit:'1Kg'
}
]

dataSource = this.items;
categories

displayedColumns: string[] = ['name', 'inventory', 'price'];

  constructor(private dialog: MatDialog , private db:DatabaseService,private secService:SecondaryService) { 
  
this.getAllCategory()
  
  }


   getAllCategory(){
     this.db.getAllCategory().then(allCategory=>{
       console.log(allCategory)
      this.categories=allCategory
     })
   }


  closeDialog() {
    this.dialog.closeAll()
  }

  ngOnInit(): void {
  }





  submit(){
    if(this.itemForm.valid){
      this.db.insertSingleItem(this.itemForm.value).then(x=>{
        console.log(x)
      })
    }else{
      //toast service 
    }
  }

}
