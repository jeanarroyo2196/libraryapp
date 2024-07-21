import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceGenre } from 'src/app/services/api.service.genre';
import { ApiService } from 'src/app/services/api.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {

  public createForm: any
  public groupOfGenres: any;

  constructor(private apiService: ApiService, private router: Router, private genreService: ApiServiceGenre) { }


  ngOnInit(): void {
    this.createForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      genre: new FormControl(''),
      publishedYear: new FormControl('')
    });

    this.genreService.getAllGenre().subscribe(
      (resp) => {
          this.groupOfGenres = resp.existingenre
        }
    )
  }

  onSubmit() {
    Swal.fire({
      title: 'Save new book' + 'in db?',
      text: "The book will be saved and operation cannot be undone",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.createBook(
          this.createForm.controls["title"].value,
          this.createForm.controls["author"].value,
          this.createForm.controls["genre"].value,
          this.createForm.controls["publishedYear"].value
        ).subscribe(resp => {
          console.log(resp);
          Swal.fire({
            title: 'Success',
            text: "Book created successfully",
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