import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { News } from 'src/app/interfaces/news';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnChanges {
  @Input() news: any;
  newsData?: News;
  newsAvailable = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['news'].currentValue !== undefined) {
      this.showNews();
      console.log(this.newsData);
    }
  }

  showNews() {
    this.newsAvailable = true;
    this.newsData = new News(this.news);
  }
}
