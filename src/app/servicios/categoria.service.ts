import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

const urlBase = environment.urlBase;
const headers = new HttpHeaders({
  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3NTQ5NDg5NH0.R25SnjHApX5FA-9M0tdXoztXWyBx1S0deup7mamwbT0'
});

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjYsImlhdCI6MTU3NTUwMDUyMX0.YTtTUDe_RUO0UZ3EE412gibI-IB-yqwir50hAsNFbHI'
  })
};

@Injectable()
export class CategoriaService{
baseUrl=' http://127.0.0.1:3333/apiStore/v1/categorias/listar';


constructor(private http:HttpClient){}



  
categorias(){
  
    var a= this.http.get(this.baseUrl,{headers});
    return a;
}
obtenerToken(){
  var json='{"email":"prueba3@gmail.com","password":"123456"}';
  var a=this.http.post(urlBase+"usuario/login",json,httpOptions);
  return a;
}
registrarCategoria(json){
  return this.http.post(urlBase+"categorias/registro",json,httpOptions)
}

listar(){
  return this.http.get(`${urlBase}categorias/listar`,httpOptions)
}


}