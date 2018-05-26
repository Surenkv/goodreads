import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';
import { Books } from './books';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchTerm: string;
  books: Array<Books>;
  pageNum = 1;
  constructor (private bookService: BooksService) { }

  ngOnInit(): void {

  }

  searchBooks(): void {
    this.bookService.get(this.searchTerm).subscribe( (data: any) => this.formatData(data));
  }

  private formatData(data): void {
    this.books = new Array<Books>();
    if (data && data.length > 0 && data[0].results && data[0].results.length > 0 && data[0].results[0].work) {
      const searchResult = Object.assign([], data[0].results[0].work);
      for ( const result of searchResult) {
        const book = new Books();
        if (result.best_book && result.best_book.length > 0) {
          const best_book = result.best_book[0];
          book.id = (best_book.id && best_book.id.length > 0) ? best_book.id[0]._ : '';
          book.title = (best_book.title && best_book.title.length > 0) ? best_book.title[0] : '';
          book.imgUrl = (best_book.small_image_url && best_book.small_image_url.length > 0) ? best_book.small_image_url[0] : '';
          const author = (best_book.author && best_book.author.length > 0) ? best_book.author[0] : '';
          book.author = (author.name && author.name.length > 0) ? author.name[0] : '';
        }
        console.log(book);
        this.books.push(book);
      }
    }
  }
}
