import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ProductService {
  private url = 'https://fakestoreapi.com/products';

  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get(this.url);
  }
}
