import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IProduit, Produit} from "../model/produit.model";
import {Observable} from "rxjs";
import { createRequestOption } from "../util/request-util";
import {KeycloakSecurityService} from "../../services-security/keycloak-security.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SERVER_LINK} from "../../constants/constants";

type EntityResponseType = HttpResponse<IProduit>;
type EntityArrayResponseType = HttpResponse<IProduit[]>;

@Injectable({providedIn: 'root'})
export class ProduitService {

  public resourceUrl = SERVER_LINK+'/produits';

  constructor(protected http: HttpClient) {

  }

  // produitForm: FormGroup = new FormGroup({
  //   id: new FormControl(null),
  //   description:new FormControl('',Validators.required),
  //   isDeleted:new FormControl('',),
  //   libelle:new FormControl('',Validators.required),
  //   url:new FormControl(''),
  // })

  produitForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    libelle:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    isDeleted:new FormControl('',),
    url:new FormControl(''),
  })

  initializeFormGroup(){
    this.produitForm.setValue({
      id:null,
      libelle:'',
      description:'',
      isDeleted:'',
      url:'',
    })
  }

  createFromForm(): IProduit {
    return {
      ...new Produit(),
      id: this.produitForm.get(['id'])!.value,
      libelle: this.produitForm.get(['libelle'])!.value,
      description: this.produitForm.get(['description'])!.value,
      isDeleted: this.produitForm.get(['isDeleted'])!.value,
      url: this.produitForm.get(['url'])!.value,
    };
  }

  updateForm(produit: IProduit): void {
    this.produitForm.patchValue({
      id: produit.id,
      libelle: produit.libelle,
      description: produit.description,
      isDeleted: produit.isDeleted,
      url: produit.url,
    });
  }

  create(produit: IProduit): Observable<EntityResponseType> {
    return this.http.post<IProduit>(this.resourceUrl, produit, { observe: 'response' });
  }

  update(produit: IProduit): Observable<EntityResponseType> {
    return this.http.put<IProduit>(this.resourceUrl, produit, { observe: 'response' });
  }

  getProduits() {
    return this.http.get(this.resourceUrl);
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  populateForm(produit: IProduit){
    // this.produitForm.setValue(produit);
    this.produitForm.patchValue({
      id: produit.id,
      libelle: produit.libelle,
      description: produit.description,
      isDeleted: produit.isDeleted,
      url: produit.url,
    });
  }

  // update(planPassation: IPlanPassation): Observable<EntityResponseType> {
  //   const copy = this.convertDateFromClient(planPassation);
  //   return this.http
  //     .put<IPlanPassation>(`${this.resourceUrl}/updatePlan`, copy, { observe: 'response' })
  //     .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  // }
}
