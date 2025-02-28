import { AddCustomerComponent } from './secondaryPages/add-customer/add-customer.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireDatabaseModule} from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire';
import{AngularFireAuthModule} from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
// import { IKeyboardLayouts, keyboardLayouts, MAT_KEYBOARD_LAYOUTS, MatKeyboardModule } from 'angular-onscreen-material-keyboard';


import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRippleModule} from '@angular/material/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import{MatDialogModule} from '@angular/material/dialog'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule, } from '@angular/material/table'
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule } from "@angular/router";

import { NgxElectronModule } from 'ngx-electron';




import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardSideMenuComponent } from './pages/dashboard-side-menu/dashboard-side-menu.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsComponent } from './pages/items/items.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddItemOptionComponent } from './secondaryPages/add-item-option/add-item-option.component';
import { AddSingleItemComponent } from './secondaryPages/add-single-item/add-single-item.component';
import { AddItemsBulkComponent } from './secondaryPages/add-items-bulk/add-items-bulk.component';
import { AddItemsCategoryComponent } from './secondaryPages/add-items-category/add-items-category.component';
import { ListCustomerComponent } from './secondaryPages/list-customer/list-customer.component';
import { AddDiscountComponent } from './secondaryPages/add-discount/add-discount.component';
import { EditItemsComponent } from './secondaryPages/edit-items/edit-items.component';
import { EditCategoryComponent } from './secondaryPages/edit-category/edit-category.component';


// const customLayouts: IKeyboardLayouts = {
//   ...keyboardLayouts,
//   'oh': {
//     'name': 'Awesome layout',
//     'keys': [
//       [
//         ['1', '!'],
//         ['2', '@'],
//         ['3', '#']
//       ]
//     ],
//     'lang': ['de-CH']
//   }
// };

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    DashboardSideMenuComponent,
    CheckoutComponent,
    RegisterComponent,
    ItemsComponent,
    ReportsComponent,
    CustomersComponent,
    TransactionsComponent,
    SettingsComponent,
    AddItemOptionComponent,
    AddSingleItemComponent,
    AddItemsBulkComponent,
    AddItemsCategoryComponent,
    ListCustomerComponent,
    LoginComponent,
    AddDiscountComponent,
    EditItemsComponent,
    EditCategoryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FlexLayoutModule,
  
    NgxElectronModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,

    MatRadioModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatRippleModule,
    MatSelectModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatButtonToggleModule,
  ],
  providers: [
    // { provide: MAT_KEYBOARD_LAYOUTS, useValue: customLayouts }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
