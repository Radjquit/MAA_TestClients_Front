import { Adresse } from './adresse';
export class Client {
  id: number=0;
  lastname: string='';
  firstname: string='';
  login: string='';
  motDePasse: string='';
  adresse: Adresse={numero:'', rue:'', ville:''};


}
