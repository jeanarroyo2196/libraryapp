import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceGenre } from 'src/app/services/api.service.genre';
import { ApiService } from 'src/app/services/api.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent  implements OnInit {  

  public editForm: any;

  public book: any;

  public bookId: any;

  public groupOfGenres: any;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private genreService: ApiServiceGenre) { 
    this.editForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      genre: new FormControl(''),
      publishedYear: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id')!; // Using non-null assertion
    this.apiService.getOneBook(this.bookId).subscribe(data => {
      this.book = data.book;
      console.log(this.book);
      console.log(this.book.title);
      this.editForm.setValue({
        title: this.book.title,
        author: this.book.author,
        genre: this.book.genre,
        publishedYear: this.book.publishedYear
      });
    });
    
    this.genreService.getAllGenre().subscribe(
      (resp) => {
          this.groupOfGenres = resp.existingenre
        }
    )
  }

  onSubmit() {
    Swal.fire({
      title: 'Update book in db?',
      text: "The book will be updated and operation cannot be undone",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.updateBook(
          this.bookId,
          this.editForm.controls["title"].value,
          this.editForm.controls["author"].value,
          this.editForm.controls["genre"].value,
          this.editForm.controls["publishedYear"].value
        ).subscribe(resp => {
          console.log(resp);
          Swal.fire({
            title: 'Success',
            text: "Book updated successfully",
            icon: 'success',
            confirmButtonColor: '#0068b5'
          })
        })
      }
    })
  }

  returnDetails() {
    this.router.navigateByUrl("/");
  }

}
