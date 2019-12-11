import {Component, OnInit} from '@angular/core';
import {ArticleModelComponent} from '../article/article-model.component';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  listOfArticles: ArticleModelComponent[] = [];

  constructor(private http: HttpClient) {
    this.getListOfArticles();
  }

  getListOfArticles() {
    this.http.get('http://104.236.106.160/store/teststories')
      .pipe(map(responseData => {
        for (const key in responseData) {
          if (key != null) {
            this.listOfArticles.push(new ArticleModelComponent(
              responseData[key].title,
              responseData[key].post,
              responseData[key].post_abbr,
              responseData[key].img,
              responseData[key].author,
              responseData[key].date
            ));
          }
        }
      }))
      .subscribe();
  }


  ngOnInit() {
  }

}
