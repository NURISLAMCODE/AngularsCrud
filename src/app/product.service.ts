import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getdata():Product[]{

    return[
      new Product(100,"Asik","asik@gmail.com","JEE",50),
      new Product(101,"Nur","nur@gmail.com","PHP",60),
      new Product(102,"Sabbir","sabbir@gmail.com","C#",70),

    ]
  }
}
