import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssistanceComponent } from './assistance/assistance.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { AccueilComponent } from './accueil/accueil.component';
import {ServiceEsigmapComponent} from './nos-services/service-esigmap/service-esigmap.component';
import {ServiceEtransportComponent} from './nos-services/service-etransport/service-etransport.component';
import {ServiceEticketingComponent} from './nos-services/service-eticketing/service-eticketing.component';
import {FormsModule} from '@angular/forms';
import {KeycloakSecurityService} from "./services-security/keycloak-security.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdministrationModule} from "./administration/administration.module";
import {HttpClientModule} from "@angular/common/http";
import { HeaderAdminComponent } from './layouts/header-admin/header-admin.component';
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "./material/material.module";
import {ProduitService} from "./administration/produit/produit.service";

export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return ()=> kcSecurity.init()
}
@NgModule({
  declarations: [
    AppComponent,
    NosServicesComponent,
    AccueilComponent,
    ServiceEsigmapComponent,
    ServiceEticketingComponent,
    ServiceEtransportComponent,
    AssistanceComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAdminComponent,

  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AdministrationModule,
    MatIconModule,
    MaterialModule,
  ],
  providers: [
    ProduitService,
    {provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: kcFactory, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
