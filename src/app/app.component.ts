import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from "./services-security/keycloak-security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portail2Si';

  constructor(public serviceSecurity: KeycloakSecurityService) {
  }
  ngOnInit(): void {
  }



  isAppManager() {
    return this.serviceSecurity.kc.hasRealmRole('app_manager')
  }

}
