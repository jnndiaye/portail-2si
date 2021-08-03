import { Component, OnInit } from '@angular/core';
import {KeycloakSecurityService} from "../../services-security/keycloak-security.service";

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  constructor(public serviceSecurity: KeycloakSecurityService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.serviceSecurity.kc.logout();
  }

  onChangePwd() {
    this.serviceSecurity.kc.accountManagement();
  }

}
