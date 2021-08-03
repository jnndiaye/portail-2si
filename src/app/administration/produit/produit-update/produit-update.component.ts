import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MatDialogRef} from '@angular/material/dialog';
import {IProduit, Produit} from "../../model/produit.model";
import {ProduitService} from "../produit.service";
import {NotificationService} from "../../../layouts/shared/notification.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSnackBarConfig} from "@angular/material/snack-bar";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-produit-update',
  templateUrl: './produit-update.component.html',
  styleUrls: ['./produit-update.component.scss']
})
export class ProduitUpdateComponent implements OnInit {
  produit: Produit = new Produit();
  isSaving = false;

  constructor(private notificationService: NotificationService,public produitService: ProduitService,
              private dialogRef: MatDialogRef<ProduitUpdateComponent>,
              ) { }

  ngOnInit(): void {
    // this.contactForm = new FormGroup({
    //   nom: new FormControl('',Validators.required),
    //   prenom:new FormControl('',Validators.required),
    //   email:new FormControl('',Validators.required),
    //   dateNaissance:new FormControl(''),
    //   tel:new FormControl(''),
    //   photo:new FormControl('')
    // })
  }

  previousState(): void {
    window.history.back();
  }
  protected onSaveSuccess(): void {
    this.isSaving = false;
    // this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IProduit>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  saveProduit(produit: IProduit){

    produit = this.produitService.createFromForm();
    if (produit.id !== null) {
      this.subscribeToSaveResponse(this.produitService.update(produit));
    } else {
      this.subscribeToSaveResponse(this.produitService.create(produit));
    }
    this.produitService.produitForm.reset();
    this.produitService.initializeFormGroup();
    this.notificationService.success('::ENREGISTRER AVEC SUCCES')
    this.onClose();

  }

  onClear(){
    this.produitService.produitForm.reset();
    this.produitService.initializeFormGroup();
  }

  onClose(){
    this.produitService.produitForm.reset();
    this.produitService.initializeFormGroup();
    this.dialogRef.close();
  }
}
