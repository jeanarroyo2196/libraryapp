import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksDetailsComponent } from './views/details/books-details/books-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateBooksComponent } from './views/create/create-books/create-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EditBooksComponent } from './views/edit/edit-books/edit-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksDetailsComponent,
    CreateBooksComponent,
    EditBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
