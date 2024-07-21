import { createComponent, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksDetailsComponent } from "./views/details/books-details/books-details.component";
import { CreateBooksComponent } from "./views/create/create-books/create-books.component";
import { EditBooksComponent } from "./views/edit/edit-books/edit-books.component";

const routes: Routes = [
    { path: '', component: BooksDetailsComponent },
    { path: 'newBook', component: CreateBooksComponent },
    { path: 'editBook/:id', component: EditBooksComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}