import {Component, OnInit, ViewChild} from '@angular/core';
import {ProduitService} from "./produit.service";
import {ActivatedRoute, Data, ParamMap, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProduitUpdateComponent} from "./produit-update/produit-update.component";
import {KeycloakSecurityService} from "../../services-security/keycloak-security.service";
import {PAGINATION_NUMBER} from "../../constants/constants";
import {NotificationService} from "../../layouts/shared/notification.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  searchKey: string;
  produitData: any;
  // displayedColumns: string[] = ['id', 'libelle','description','actions'];
  displayedColumns: string[] = ['libelle','description','actions'];
  listData: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageNumber: number[] = PAGINATION_NUMBER;

  constructor(
    protected produitService: ProduitService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected modalService: NgbModal,
    private dialog: MatDialog,
    public serviceSecurity: KeycloakSecurityService,
    private notificationService : NotificationService
  ) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe((data) => {
      this.produitData = data;
      this.listData = new MatTableDataSource(this.produitData);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      // this.listData.filterPredicate = (data,filter)=>{
      //   return this.displayedColumns.some(ele=>{
      //     return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
      //   })
      // }
    });

    // this.produitService.getProduits().subscribe(
    //   (data) => {
    //     let array = data.map( item=>{
    //
    //     })
    //
    // });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLocaleLowerCase();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';

    this.dialog.open(ProduitUpdateComponent, dialogConfig);
  }

  onEdit(row){
    this.produitService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';

    this.dialog.open(ProduitUpdateComponent, dialogConfig);
  }


  onDelete(id) {
    if(confirm('Etes vous sur de bien voulior suprimer ce Produit ?')){
      this.produitService.delete(id);
      this.notificationService.warn('! Deleted succefuly')
    }
  }
}
