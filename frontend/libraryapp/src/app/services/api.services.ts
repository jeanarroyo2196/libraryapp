import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    // Define Backend path local host
    private apiUrl: string = 'http://localhost:3000/book/'

    // Constructor to define the http
    constructor(private http: HttpClient) {}

    // Define the methods

    // Get all books
    public getAllBooks(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}get`)
    }

    // Get one book
    public getOneBook(id: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}get/${id}`)
    }

    // Insert a new book
    public createBook(title: string, author: string, genre: string, publishedYear: number): Observable<any> {
        const body = {title, author, genre, publishedYear}
        return this.http.post<any>(`${this.apiUrl}create`, body)
    }

    // Update a book
    public updateBook(id: string, title: string, author: string, genre: string, publishedYear: number): Observable<any> {
        const body = {title, author, genre, publishedYear}
        return this.http.put<any>(`${this.apiUrl}update/${id}`, body)
    }
}
