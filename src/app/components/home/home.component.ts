import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  apiData:any[]=[
    {id:"1",name:"first",url:"assets/images/slider3.jpg",txt:"Fresh For Good Health",title:"Top Selling"},
    {id:"2",name:"second",url:"assets/images/slider1-min.jpg",txt:"Fresh fruits & Vegitables",title:"summer veg Sale"},
    {id:"3",name:"third",url:"assets/images/slider2.jpg",txt:"Prod of indian 100% packaging",title:"Organic indian masala"},
  ];
  limit: number = 3; 
  customOptions: OwlOptions = {
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
        items: 1,
      }
    }
  }
  
  constructor(
    private readonly http: HttpClient,
  ) {}

  ngOnInit() {
  }  
}
