import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private electron:ElectronService) { }

//ItemFunctions

deleteItem(id){
  return this.electron.ipcRenderer.invoke('deleteItem',id)
}

// //Test Functions 
//   getAllItems(){
//   return  this.electron.ipcRenderer.invoke('getAllItems')
//   }


//   insertData(data){
//     return this.electron.ipcRenderer.invoke('addData',data)
//   }




  //Items Functions
  insertSingleItem(data){
    return this.electron.ipcRenderer.invoke('insertSingleItem',data)
  }

  getAllItems(){
    return this.electron.ipcRenderer.invoke('getTabelAllItems')
  }
  getItemsCount(){
    return this.electron.ipcRenderer.invoke('itemCount')
  }


  //Category Functions

  insertCategory(data){
    console.log(data)
   return this.electron.ipcRenderer.invoke('insertCategory',data)
  }


getAllCategory(){
    return this.electron.ipcRenderer.invoke('getAllCategory')
   }
getCategoryCount(){
  return this.electron.ipcRenderer.invoke('categoryCount')
}

deleteCat(id){
  return this.electron.ipcRenderer.invoke('deleteCat',id)
}

getCategory(id){
  return this.electron.ipcRenderer.invoke('getCat',id)
}
getItem(id){
   return this.electron.ipcRenderer.invoke('getItem',id)
}
updateCategory(id,name){
  return this.electron.ipcRenderer.invoke('editCat',id,name)
}
updateitem(id,data){
return this.electron.ipcRenderer.invoke('editItem',id,data)
}
}
