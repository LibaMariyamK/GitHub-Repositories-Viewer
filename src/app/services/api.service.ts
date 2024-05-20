import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  login: string;
  avatar_url: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: any;
}

interface Repository {
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.github.com';
  constructor(private http: HttpClient) { }
 
  getUser(username: string): Observable<User> {
    const url = `${this.apiUrl}/users/${username}`;
    return this.http.get<User>(url);
  }

  getRepositories(username: string, page: number = 1, pageSize: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', pageSize.toString());

    return this.http.get(`${this.apiUrl}/users/${username}/repos`, { params });
  }
  getUserRepos(username: string): Observable<Repository[]> {
    const url = `${this.apiUrl}/users/${username}/repos`;
    return this.http.get<Repository[]>(url);
  }
}
