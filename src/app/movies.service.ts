import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  API_URI = "https://jsonmock.hackerrank.com/api/movies";

  constructor(private http: HttpClient) {}

  getMoviesbyYear(year: string) {
    const params = {
      Year: year,
    };

    const query = Object.keys(params)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      )
      .join("&");

    const currentUrl = `${this.API_URI}?${query}`;

    return fetch(currentUrl).then((response) => {
      return response.json();
    });
  }
}
