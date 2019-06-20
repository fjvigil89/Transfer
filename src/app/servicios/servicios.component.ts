import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  proyectos= [
    {      
      imagen: "limpiezas.png",
      link: 'construccion',
      title: "LImpieza"
    },
    {     
      imagen: "limpiezas1.png",
      link: 'construccion',
      title: "LImpieza"
    },
    {
      imagen: "metalurgia.png",
      link: 'construccion',
      title: "Metalurgia"
    },
    {
      imagen: "proyecto_parroquia.png",
      link: 'construccion',
      title: "Parroquea"
    },
    {
      imagen: "proyecto_urbanizacion.png",
      link: 'construccion',
      title: "Urbanización"
    }
  ];


  constructor() { }
 
  ngOnInit() {
  }

}
