export interface INews {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
  publishedAt: string;
}

export class News {
  articleArr: INews[] = [];

  constructor(data: any) {
    for (let i: number = 0; i < data.articles.length; i++) {
      let article: INews = {
        title: '',
        description: '',
        url: '',
        urlToImage: '',
        publishedAt: '',
      };
      const startPoint = data.articles;
      article.title = startPoint[i].title;
      article.description = startPoint[i].description;
      article.urlToImage = startPoint[i].urlToImage;
      article.url = startPoint[i].url;
      article.publishedAt = startPoint[i].publishedAt;
      this.articleArr.push(article);
    }
  }
}
