import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  apiData:any[]=[
    {id:"1",name:"banana",url:"assets/images/cat4.jpg"},
    {id:"2",name:"banana flower",url:"assets/images/cat6.jpg"},
    {id:"3",name:"beetroot",url:"assets/images/cat5.jpg"},
    {id:"4",name:"Brinjal",url:"assets/images/cat6.jpg"},
    {id:"5",name:"Eggplant",url:"assets/images/cat7.jpg"},
    {id:"6",name:"orange",url:"assets/images/cat3.jpg"},    
  ];
  
  trendingItem:any[]=[
    {id:"1",name:"banana",url:"assets/images/cat1.jpg"},
    {id:"2",name:"banana flower",url:"assets/images/cat2.jpg"},
    {id:"3",name:"beetroot",url:"assets/images/cat3.jpg"},
    {id:"4",name:"Brinjal",url:"assets/images/cat4.jpg"},
  ];
  customOptions: OwlOptions = {
    loop: false,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      }
    }
  }

  trendingProd: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 5,
      }
    }
  }
}
