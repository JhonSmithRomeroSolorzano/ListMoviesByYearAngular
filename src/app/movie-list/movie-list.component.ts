import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = null;
  public movieYear: number;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {}

  public async searchMovies(event, movieYear) {
    try {
      const movieList = await this.moviesService.getMoviesbyYear(movieYear);
      this.movies = movieList.data;
    } catch (error) {
      console.error(error);
      this.movies = [];
    }
  }
}

export interface Movie {
  Title: string;
  Year: number;
  imdbID: number;
}
