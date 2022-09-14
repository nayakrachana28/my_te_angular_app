import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
 logo_name='Birds'; 
course='Birds'; 
public logo='https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/DCTM_Penguin_UK_DK_AL526630_wkmzns.jpg';
productentered: string=' ';
search_product(product_name:string):void{
  if(!product_name)
  {
    this.productentered=' ';
  }
  
    this.productentered=product_name;
    console.log(product_name);
  
}

ngOnInit(): void {
}
}
