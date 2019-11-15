import { Injectable } from '@angular/core';

export interface iNewsFeed {
  id: number;
  title: string;
  headline: string;
  status: string;
  lastModifier: string;
  publishDate?: string;
  content?: string;
}

let DATABASE: iNewsFeed[] = [
  {
    title: 'Title Lorem Ipsum',
    headline: 'One sentence about the article',
    status: 'Active',
    lastModifier: 'Shirley Mangallon',
    publishDate: 'Nov 30, 2019',

    id: 1
  },
  {
    title: 'Free Airport Pickup',
    headline: 'Seneca provides free airport pick-up for all international students',
    status: 'Active',
    lastModifier: 'Shirley Mangallon',
    publishDate: 'Oct 25, 2019',
    id: 2
  },
  {
    title: 'Health Insurance',
    headline: 'All international students have a health insurance plan',
    status: 'Active',
    lastModifier: 'Shirley Mangallon',
    publishDate: 'Sep 12, 2019',
    id: 3
  }
];

let cacheData: iNewsFeed[] = [];
@Injectable({
  providedIn: 'root'
})
export class AdminNewsfeedsService {
  constructor() {}

  getAllNewsFeed() {
    return DATABASE;
  }

  getNewsFeed(id: number) {
    return DATABASE.filter(data => data.id === id);
  }

  addOneNewsFeed(newsfeed) {
    const temp = newsfeed;
    temp.id = DATABASE.length + 1;
    DATABASE.push(temp);
  }
  deleteOneNewsFeed(id: number) {
    DATABASE = DATABASE.filter(data => data.id !== id);
  }
  updateOneNewsFeed(id: number) {
    const foundIndex = DATABASE.findIndex(data => data.id === id);
    const foundIndexTemp = cacheData.findIndex(data => data.id === id);
    DATABASE[foundIndex] = cacheData[foundIndexTemp];
  }

  getTempFeed(id) {
    if (id === 0) {
      this.addTempFeed({ id: 0, title: '', headline: '', status: '', lastModifier: '', publishDate: '', content: '' });
    }
    let temp = cacheData.filter(data => data.id === id);
    if (temp.length === 0) {
      this.addTempFeed(DATABASE.filter(data => data.id === id)[0]);
      temp = cacheData.filter(data => data.id === id);
    }
    return temp;
  }
  addTempFeed(tempFeed: iNewsFeed) {
    if (tempFeed) {
      const temp = JSON.parse(JSON.stringify(tempFeed));
      cacheData.push(temp);
    }
  }
  // updateTempFeed(id, tempFeed) {
  //   const foundIndex = cacheData.findIndex(data => data.id === id);
  //   cacheData[foundIndex] = tempFeed;
  // }
  deleteTemp(id) {
    cacheData = cacheData.filter(data => data.id !== id);
  }
}
