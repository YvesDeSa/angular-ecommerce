import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./model/Product";
import { Observable } from "rxjs";

@Injectable()
export class ProductsService {
  private url = 'http://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/product-list';

  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
