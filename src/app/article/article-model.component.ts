import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article-model.component.html',
  styleUrls: ['./article-model.component.css']
})

export class ArticleModelComponent implements OnInit {

  private _title: string;
  private _post: string;
  private _postAbbr: string;
  private _imgpath: string;
  private _author: string;
  private _date: string;


  constructor(title: string, post: string, postAbbr: string, imgpath: string, author: string, date: string) {
    this._title = title;
    this._post = post;
    this._postAbbr = postAbbr;
    this._imgpath = imgpath;
    this._author = author;
    this._date = date;
  }


  get title(): string {
    return this._title;
  }

  get post(): string {
    return this._post;
  }

  get postAbbr(): string {
    return this._postAbbr;
  }

  get author(): string {
    return this._author;
  }


  get date(): string {
    return this._date;
  }

  get imgpath(): string {
    return this._imgpath;
  }

  ngOnInit() {
  }
}
