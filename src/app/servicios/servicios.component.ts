import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  proyectos= [    
    {
      path: "assets/proyectos/construccion/",
      imagen: "principal.jpg",
      link: 'construccion',
      title: "Construcción"      
    },
    {
      path: "assets/proyectos/limpieza/",
      imagen: "principal.jpg",
      link: 'limpieza',
      title: "Limpieza"
    },
    {
      path: "assets/proyectos/metalurgica/",
      imagen: "principal.jpg",
      link: 'metalurgica',
      title: "Metalurgica"
    },
    /*{
      path: "assets/proyectos/carpinteria/",
      imagen: "principal.jpg",
      link: 'carpinteria',
      title: "Carpinteria"
    }*/
  ];


  constructor() { }
 
  ngOnInit() {
  }

}
