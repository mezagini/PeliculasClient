import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorCreacionDTO = {nombre: "feñlipe", fechaNacimiento: new Date()}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params.id);
    })
  }
  guardarCambios(actor:actorCreacionDTO) {
    console.log(actor);
  }

}
