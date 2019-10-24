import { Injectable } from '@angular/core';

export interface PeriodicElement {
  id: number;
  title: string;
  headline: string;
  status: string;
  lastModifier: string;
  publishDate?: string;
  content?: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'Title Lorem Ipsum',
    headline: 'One sentence about the article',
    status: 'active',
    lastModifier: 'Shirley Mangallon',
    publishDate: 'Nov 30, 2019',

    id: 1
  },
  {
    title: 'Free Airport Pickup',
    headline:
      'Seneca provides free airport pick-up for all international students',
    status: 'active',
    lastModifier: 'Shirley Mangallon',
    publishDate: 'Oct 25, 2019',
    id: 2
  },
  {
    title: 'Health Insurance',
    headline: 'All international students have a health insurance plan',
    status: 'active',
    lastModifier: 'Shirley Mangallon',
    publishDate: 'Sep 12, 2019',
    id: 3
  }
];
@Injectable({
  providedIn: 'root'
})
export class AdminNewsfeedsService {
  constructor() {}

  getAllNewsFeed() {
    return ELEMENT_DATA;
  }

  getNewsFeed(id: number) {
    return ELEMENT_DATA.filter(data => data.id === id);
  }

  addOneNewsFeed(newsfeed) {
    return ELEMENT_DATA.push(newsfeed);
  }
  deleteOneNewsFeed(id: number) {
    return (ELEMENT_DATA = ELEMENT_DATA.filter(data => data.id !== id));
  }
  updateOneNewsFeed(id: number, newsfeed) {
    const foundIndex = ELEMENT_DATA.findIndex(data => data.id === id);
    ELEMENT_DATA[foundIndex] = newsfeed;
    return ELEMENT_DATA;
  }
}
