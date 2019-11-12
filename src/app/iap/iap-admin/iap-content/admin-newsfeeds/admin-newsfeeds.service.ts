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

let tempData: PeriodicElement[] = [];
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
    const temp = newsfeed;
    temp.id = ELEMENT_DATA.length + 1;
    ELEMENT_DATA.push(temp);
  }
  deleteOneNewsFeed(id: number) {
    ELEMENT_DATA = ELEMENT_DATA.filter(data => data.id !== id);
  }
  updateOneNewsFeed(id: number) {
    const foundIndex = ELEMENT_DATA.findIndex(data => data.id === id);
    const foundIndexTemp = tempData.findIndex(data => data.id === id);
    ELEMENT_DATA[foundIndex] = tempData[foundIndexTemp];
  }

  getTempFeed(id) {
    if (id === 0) {
      this.addTempFeed({ id: 0, title: '', headline: '', status: '', lastModifier: '', publishDate: '', content: '' });
    }
    let temp = tempData.filter(data => data.id === id);
    if (temp.length === 0) {
      this.addTempFeed(ELEMENT_DATA.filter(data => data.id === id)[0]);
      temp = tempData.filter(data => data.id === id);
    }
    return temp;
  }
  addTempFeed(tempFeed) {
    if (tempFeed) {
      const temp = JSON.parse(JSON.stringify(tempFeed));
      tempData.push(temp);
    }
  }
  // updateTempFeed(id, tempFeed) {
  //   const foundIndex = tempData.findIndex(data => data.id === id);
  //   tempData[foundIndex] = tempFeed;
  // }
  deleteTemp(id) {
    tempData = tempData.filter(data => data.id !== id);
  }
}
