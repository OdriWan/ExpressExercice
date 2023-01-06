export default class User {
  id!: number;
  nom: string;
  prenom: string;
  date_de_naissance?: string;
  date_inscription: string;
  nationalite?: string;

  constructor(
    nom: string,
    prenom: string,
    date_de_naissance: string,
    date_inscription: string,
    nationalite?: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.date_de_naissance = date_de_naissance;
    this.date_inscription = date_inscription;
    this.nationalite = nationalite;
  }
}
