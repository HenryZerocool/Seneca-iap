import { Injectable } from '@angular/core';

export interface PeriodicElement {
  id: number;
  title: string;
  priority: number;
  status: string;
  lastModifier: string;
  publishFrom?: string;
  publishTo?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    priority: 1,
    title: 'Hydrogen',
    status: 'active',
    lastModifier: 'Shirley Mangallon',
    publishFrom: '09/12/2018',
    publishTo: '10/30/2019',
    id: 1
  },
  {
    priority: 2,
    title: 'Helium This is a very long title loseimgs covpoiewnf qivjciv d',
    status: 'closed',
    lastModifier: 'He',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 2
  },
  {
    priority: 3,
    title: 'Lithium',
    status: 'active',
    lastModifier: 'Li',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 3
  },
  {
    priority: 4,
    title: 'Beryllium',
    status: 'closed',
    lastModifier: 'Be',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 4
  },
  {
    priority: 5,
    title: 'Boron',
    status: 'active',
    lastModifier: 'B',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 5
  },
  {
    priority: 6,
    title: 'Carbon',
    status: 'closed',
    lastModifier: 'C',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 6
  },
  {
    priority: 7,
    title: 'Nitrogen',
    status: 'active',
    lastModifier: 'N',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 7
  },
  {
    priority: 8,
    title: 'Oxygen',
    status: 'closed',
    lastModifier: 'O',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 8
  },
  {
    priority: 9,
    title: 'Fluorine',
    status: 'active',
    lastModifier: 'F',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 9
  },
  {
    priority: 10,
    title: 'Neon',
    status: 'closed',
    lastModifier: 'Ne',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 10
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
    return ELEMENT_DATA.filter(data => data.id == id);
  }
}
