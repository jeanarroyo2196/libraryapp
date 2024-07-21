import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiServiceGenre {
    // Define Backend path local host
    private apiUrl: string = 'http://localhost:3000/genre/'

    // Constructor to define the http
    constructor(private http: HttpClient) {}

    // Define the methods

    // Get all books
    public getAllGenre(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}get`)
    }

    // Insert a new book
    public createGenre(name: string): Observable<any> {
        const body = {name}
        return this.http.post<any>(`${this.apiUrl}create`, body)
    }
}
