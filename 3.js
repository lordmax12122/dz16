class Storage {
    constructor(items) {
        this.items = items
    }
    getItems() {
        return this.items;
    }
    addItem(utem) {
        return this.items.push(utem)
    }
    removeItem() {
        return this.items.splice(this.items.indexOf, 1);
    }
}



const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
   ]);
   
   const items = storage.getItems();
   console.log(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
   
   storage.addItem('Дроїд');
   console.log(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
   
   storage.removeItem('Пролонгер');
   console.log(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]