const {app,ipcMain,ipcRenderer, BrowserWindow,} = require('electron');
let win;
function createWindow (){
    win = new BrowserWindow({
         webPreferences: { nodeIntegration: true },
        height: 760,
        width:1024,
        backgroundColor:'#ffffff'
    })

    win.webContents.openDevTools()
    win.loadURL(`file://${__dirname}/dist/Desktopapp/index.html`)
    win.on('closed',function(){
        win=null;
    })
    
	
}

app.on('ready',createWindow)

app.on('windows-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
app.log
})
app.on('activate',function(){
    if(win==null){
        createWindow()
    }
})

const Datastore = require('nedb-promises')
const db = Datastore.create('pos.db')
const path =  require('path');
const { electron } = require('process');

  //Category Functions
  // doesnt require to make the function just the name assignecd to it 
  ipcMain.handle('insertCategory',async(event,data)=> {
    return db.insert(data, function(err, newDoc){

    })
    
   } )
// function for getting all category
   ipcMain.handle('getAllCategory', async(event)=>{
       
    return db.find({type :'category'}, function (err, docs) {
    })
   })
// function to insert a single item 
   ipcMain.handle('insertSingleItem',async(event,data)=>{
       return db.insert(data, function(err, Newdata){

       })
   })
// function to get all the items table value
ipcMain.handle('getTabelAllItems', async(event)=>{
       
    return db.find({type :'items'}, function (err, docs) {
    })
   })

// function to get count for category
ipcMain.handle('categoryCount', async(event)=>{
       
    return db.count({ type :'category' }, function (err, count) {
      });
      
   })
// deleting items from the table
   ipcMain.handle('deleteItem', async(event,id)=>{
       
    return db.remove({ _id: id }, {}, function (err, numRemoved) {
      });
      
   })

   
 ipcMain.handle('deleteCat', async(event,id)=>{
       
    return db.remove({ _id: id }, {}, function (err, numRemoved) {
      });
      
   })

   

   ipcMain.handle('itemCount', async(event)=>{
       
    return db.count({ type :'items' }, function (err, count) {
      });
      
   })


   ipcMain.handle('getCat', async(event,id) =>{
       return db.find({_id : id}, function(err, docs){

       })
   })

   ipcMain.handle('editCat', async(event,id,name)=>{
    return db.update({ _id: id }, { $set: { categoryName: name } },{}, function (err, numReplaced) {

      });
   })
   

   ipcMain.handle('getItem', async(event,id,)=>{
    return db.find({_id : id}, function(err, docs){

    })


   })


ipcMain.handle('editItem', async(event,id,data)=>{
    console.log(data)
    return db.update({ _id: id },{ $set: { barcode: data.barcode, 
                                           name : data.name,
                                           nameInArabic : data.nameInArabic,
                                           category :data.category,
                                           mrp:data.mrp,
                                           price: data.price,
                                           tax : data.tax,
                                           inventory : data.inventory,
                                           unit : data.unit
                                        } },{}, function (err, numReplaced) {

      });
   })
