import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-cars',
  imports: [ReactiveFormsModule],
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})
export class Cars {
  http = inject(HttpClient);
  cars: any=[];

  basecars = [
    {
      image: "img/1.png",
      title: "BMW M4 Competition",
      text: "Идеальный баланс скорости и стиля. BMW M4 Competition — 510 л.с. и драйв, созданный для покорения трасс и городских улиц.",
      prices: [1450, 1300, 1100]
    },
    {
      image: "img/2.png",
      title: "BMW M5",
      text: "Бизнес-класс с душой гонщика. BMW M5: 600 л.с., интеллектуальный полный привод и комфорт для самых требовательных.",
      prices: [1600, 1450, 1250]
    },
    {
      image: "img/3.png",
      title: "Lamborghini Huracan Spyder Green",
      text: "Воплощение скорости и страсти. Зеленый Lamborghini Huracan Spyder — мощь 640 л.с. и открытый верх для ярких приключений.",
      prices: [3200, 2900, 2600]
    },
    {
      image: "img/4.png",
      title: "Ferrari F8 Spider",
      text: "Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.",
      prices: [3500, 3200, 2900]
    },
    {
      image: "img/5.png",
      title: "Porsche 911 Targa 4S Yellow",
      text: "Элегантная мощь в ярком цвете. Porsche 911 Targa 4S: полный привод, 450 л.с. и уникальный стиль Targa",
      prices: [1800, 1650, 1450]
    },
    {
      image: "img/6.png",
      title: "Mercedes SL 55 AMG",
      text: "Классика спортивного шика. Mercedes SL 55 AMG: роскошь, кабриолет и мощь 469 л.с. для незабываемых поездок.",
      prices: [1700, 1550, 1350]
    },
    {
      image: "img/7.png",
      title: "BMW Z4",
      text: "Компактный кабриолет для стильных путешествий. BMW Z4: идеальный союз маневренности, мощности и элегантного дизайна.",
      prices: [1200, 1100, 950]
    },
    {
      image: "img/8.png",
      title: "Mercedes C180 Convertible",
      text: "Идеальный выбор для солнечного дня. Mercedes C180 Convertible: кабриолет для легкого и комфортного вождения.",
      prices: [1000, 900, 800]
    },
    {
      image: "img/9.png",
      title: "Chevrolet Corvette Orange",
      text: "Яркий, мощный, незабываемый. Chevrolet Corvette в оранжевом цвете: 495 л.с. и стиль, который говорит сам за себя.",
      prices: [1400, 1250, 1100]
    },
    {
      image: "img/10.png",
      title: "Audi R8 Blue",
      text: "Суперкар, созданный для влюбленных в скорость. Audi R8 Blue: полный привод, 570 л.с. и потрясающий дизайн.",
      prices: [2000, 1850, 1600]
    },
    {
      image: "img/11.png",
      title: "Chevrolet Corvette White",
      text: "Классическая мощь в изысканном цвете. Chevrolet Corvette White: мощность, динамика и стиль для настоящих ценителей.",
      prices: [1350, 1200, 1000]
    },
    {
      image: "img/12.png",
      title: "Ford Mustang Convertible Black",
      text: "Легенда в открытом формате. Ford Mustang Convertible Black: 450 л.с., культовый стиль и свобода под открытым небом.",
      prices: [1250, 1150, 1000]
    }
  ];

  carsFilter =[
    {
      active:true,
      name:"Все марки"
    },
    {
      active:false,
      name:"Lamborghini"
    },
    {
      active:false,
      name:"Ferrari"
    },
    {
      active:false,
      name:"Porsche"
    },
    {
      active:false,
      name:"BMW"
    },
    {
      active:false,
      name:"Mercedes"
    },
    {
      active:false,
      name:"Chevrolet"
    },
    {
      active:false,
      name:"Audi"
    },
    {
      active:false,
      name:"Ford"
    }
  ];

  orderForm = new FormGroup({
    car: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl('')
  });
  
  ngOnInit(){
    this.cars = this.basecars;
  }

  changeFilter(filter:any, carsContent: HTMLElement){
    this.carsFilter.forEach((el) => el.active = false);
    filter.active = true;

    const filterText = filter.name.toLocaleLowerCase();
    
      if(filterText === 'Все марки'){
        this.cars = this.basecars;
      } else{
        this.cars = this.basecars.filter(item => item.title.toLowerCase().includes(filterText));
      }
    
    carsContent.scrollIntoView({behavior: "instant"});
  }

  isError(fieldName: string){
    const control = this.orderForm.get(fieldName);
    return !!(control?.invalid && (control?.dirty || control?.touched));
  }


    sendorder(){
      if(this.orderForm.valid){
        alert('Спасибо за заявку! Мы обязательно свяжемся с вами!');
        this.orderForm.reset();
      }
    }
}
