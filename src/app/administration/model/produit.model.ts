export interface IProduit {
  id?: number;
  libelle?: string;
  description?: string;
  isDeleted?: number;
  url?: number;
}

export class Produit implements IProduit {
  constructor(
    public id?: number,
    public libelle?: string,
  public description?: string,
  public isDeleted?: number,
  public url?: number,

  ) {}
}
