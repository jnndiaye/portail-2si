import { Component, OnInit } from '@angular/core';
import {KeycloakSecurityService} from "../services-security/keycloak-security.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public serviceSecurity: KeycloakSecurityService) { }

  ngOnInit(): void {
  }
  images = ['../assets/images/SLIDER-01.jpg', '../assets/images/SLIDER-02.jpg', '../assets/images/SLIDER-03.jpg'];

}
