import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ApiServiceGenre } from 'src/app/services/api.service.genre';
import { ApiService } from 'src/app/services/api.services';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css'],
})
export class BooksDetailsComponent {
  public booksArray: any;
  public groupOfGenres = ["Fiction", "Non Fiction", "Fantasy", "Science Fiction", "Mystery", "Biography"];

  constructor(private apiService: ApiService, private router: Router, private genreService: ApiServiceGenre) {}

  ngOnInit(): void {
    this.apiService.getAllBooks().subscribe(
      (resp) => {
        this.booksArray = resp.existinbook;
        console.log(this.booksArray);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.booksArray);

    this.genreService.getAllGenre().subscribe(
      (resp) => {
        if(resp.existingenre.length == 0) {
          for (let i = 0; i < this.groupOfGenres.length; i++) {
            console.log(this.groupOfGenres[i]);
            this.genreService.createGenre(this.groupOfGenres[i]).subscribe(
              (resp) => {
                console.log(resp);
              }
            )
          }
        }
      }
    )
  }

  newBook(): void {
    this.router.navigateByUrl("/newBook");
  }

  editBook(): void {
    this.router.navigateByUrl("/editBook");
  }
}
