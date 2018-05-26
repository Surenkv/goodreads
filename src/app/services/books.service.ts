import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import * as xml2js from 'xml2js';

@Injectable()
export class BooksService {

  constructor (private http: HttpClient) {

  }

books: any;
    get(title: string) {
        return this.http.get(environment.goodReadsKey.url, {
            params: {
                key: environment.goodReadsKey.key,
                q: title
            },
            responseType: 'text'
        }).pipe(
            map( res => {
              xml2js.parseString(res, (err, result) => {
                this.books = result.GoodreadsResponse.search;

              } );
              return this.books;
            } )
          );
    }
}