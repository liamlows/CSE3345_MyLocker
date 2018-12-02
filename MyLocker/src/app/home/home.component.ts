import { Component, OnInit, AfterViewInit, } from "@angular/core";
import {  trigger, state, style, transition, animate, keyframes } from '@angular/animations'
import { Router } from "../../../node_modules/@angular/router";
import { NeedAuthGuard } from "../auth-guard";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  constructor(
    private router: Router,
    private authGuard: NeedAuthGuard
  ){}

  ngOnInit() {}

}
