import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Brian Mesa",
    "profilePic": "assets/img/speakers/Brian.PNG",
    "status": "Okay",
    "location" : "Brooklyn Navy Yards"
  };


  constructor() {
    let items = [
      {
        "name": "Brian Mesa",
        "profilePic": "assets/img/speakers/Brian.PNG",
        "status": "Okay",
        "location" : "Brooklyn Navy Yards"
      },
      {
        "name": "Karan Patel",
        "profilePic": "assets/img/speakers/karan.jpg",
        "status": "Okay",
        "location" : "Brooklyn Navy Yards"
      },
      {
        "name": "Fayyoz Nasimov",
        "profilePic": "assets/img/speakers/fayyoz.jpeg",
        "status": "Okay",
        "location" : "Brooklyn Navy Yards"
      },
      {
        "name": "Kusum Neupane",
        "profilePic": "assets/img/speakers/kusum.jpg",
        "status": "Okay",
        "location" : "Brooklyn Navy Yards"
      },
      {
        "name": "Tanzim Ali",
        "profilePic": "assets/img/speakers/tanzim.jpg",
        "status": "Okay",
        "location" : "Brooklyn Navy Yards"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
