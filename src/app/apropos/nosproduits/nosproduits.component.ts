import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosproduits',
  templateUrl: './nosproduits.component.html',
  styleUrls: ['./nosproduits.component.scss']
})
export class NosproduitsComponent implements OnInit {
  buttonContent = 'Lire la suite';
  buttonContent1= 'Lire la suite';
  buttonContent2= 'Lire la suite';
  buttonContent3= 'Lire la suite';
  buttonContent4= 'Lire la suite';
  visibilitePage='hidden';
  visibilitePage1='hidden';
  visibilitePage2='hidden';
  visibilitePage3='hidden';

  constructor() { }

  ngOnInit(): void {
    // this.buttonContent = 'Lire la suite';
    // this.buttonContent1 = 'Lire la suite';
    // this.buttonContent2 = 'Lire la suite';
    // this.buttonContent3 = 'Lire la suite';
  }

  lirePlus(buttonContent: string) {
    if(buttonContent=='Lire la suite'){
      this.visibilitePage ='';
      this.buttonContent ='Reduire';
      // console.log(this.visibilitePage);
      // console.log(this.buttonContent);
    } else {
      this.visibilitePage ='hidden';
      this.buttonContent ='Lire la suite';
    }
  }
  lirePlus1(buttonContent: string) {
    if(buttonContent=='Lire la suite'){
      this.visibilitePage1 ='';
      this.buttonContent1 ='Reduire';
      // console.log(this.visibilitePage);
      // console.log(this.buttonContent);
    } else {
      this.visibilitePage1 ='hidden';
      this.buttonContent1 ='Lire la suite';
    }
  }
  lirePlus2(buttonContent: string) {
    if(buttonContent=='Lire la suite'){
      this.visibilitePage2 ='';
      this.buttonContent2 ='Reduire';
      // console.log(this.visibilitePage);
      // console.log(this.buttonContent);
    } else {
      this.visibilitePage2 ='hidden';
      this.buttonContent2 ='Lire la suite';
    }
  }
  lirePlus3(buttonContent: string) {
    if(buttonContent=='Lire la suite'){
      this.visibilitePage3 ='';
      this.buttonContent3 ='Reduire';
      // console.log(this.visibilitePage);
      // console.log(this.buttonContent);
    } else {
      this.visibilitePage3 ='hidden';
      this.buttonContent3 ='Lire la suite';
    }
  }
}
