import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private myService:ProductService){
    this.pdArray=this.myService.getdata();
  }
id:number=0;
name:string="";
email:string="";
sub:string="";
marks:number=0;

pdArray:Product[];

message:string="";
errmessage:string="";

getp(id:any){
  for(let i=0;i<this.pdArray.length;i++){
    if(id==this.pdArray[i].id){
     this.id= this.pdArray[i].id
     this.name = this.pdArray[i].name
     this.email=this.pdArray[i].email
     this.sub=this.pdArray[i].sub
     this.marks=this.pdArray[i].marks
    }
  }
}

addData(){
  let a = this.pdArray.find(data=>data.id==this.id)
  if(a == null && this.id>0){
    this.message="Added Successfully"
    this.pdArray.push(new Product(this.id,this.name,this.email,this.sub,this.marks))
 }
 else{
  this.message="";
  this.errmessage="Added Unccessfully";
 }
}

deleteData(id:number){
  for(let i=0;i<this.pdArray.length;i++){
    if(id==this.pdArray[i].id){
      this.message="Delete Successfully"
      this.pdArray.splice(i,1)
    }
  }
  }
  updateData(id:number,name:string,stock:number,price:number,discount:number){
    for(let i=0;i<this.pdArray.length;i++){
      if(id==this.pdArray[i].id){
        this.message="Update Successfully"
        this.pdArray[i].id=id
        this.pdArray[i].name=name
        this.pdArray[i].email=this.email
        this.pdArray[i].sub=this.sub
        this.pdArray[i].marks=this.marks
      }
    }
    }


}
