import { Injectable } from '@angular/core';

export interface iAnnouncements {
  id: number;
  title: string;
  priority?: number;
  status: string;
  lastModifier: string;
  publishFrom?: string;
  publishTo?: string;
  lastModifiedTime?: string;
  content?: string;
}

let DATABASE: iAnnouncements[] = [
  {
    priority: 1,
    title: 'Career Connect Is Here',
    status: 'Active',
    publishFrom: 'Sep 30, 2019',
    publishTo: 'Oct 31, 2019',
    lastModifier: 'Shirley Mangallon',
    lastModifiedTime: 'Sep 15, 2019 9:55am',
    id: 1
  },
  {
    priority: 2,
    title: 'May 2020 Intake Opens Aug. 26th',
    status: 'Active',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    lastModifier: 'Shirley Mangallon',
    lastModifiedTime: 'Sep 15, 2019 9:55am',
    id: 2
  },
  {
    priority: 10,
    title: 'All Programs Are Now Closed For January 2019',
    status: 'Closed',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    lastModifier: 'Shirley Mangallon',
    lastModifiedTime: 'Sep 15, 2019 9:55am',
    id: 3
  }
];

let cacheData: iAnnouncements[] = [];

@Injectable({
  providedIn: 'root'
})
export class AdminAnnouncementsService {
  constructor() {}

  getAllAnnouncements() {
    return DATABASE;
  }

  getAnnouncement(id: number) {
    return DATABASE.filter(data => data.id === id);
  }

  addOneAnnouncement(announcement) {
    const temp = announcement;
    temp.id = DATABASE.length + 1;
    DATABASE.push(temp);
  }
  deleteOneAnnouncement(id: number) {
    DATABASE = DATABASE.filter(data => data.id !== id);
  }
  updateOneAnnouncement(id: number) {
    const foundIndex = DATABASE.findIndex(data => data.id === id);
    const foundIndexTemp = cacheData.findIndex(data => data.id === id);
    DATABASE[foundIndex] = cacheData[foundIndexTemp];
  }

  getTempAnnoucement(id) {
    if (id === 0) {
      this.addTempAnnoucement({ id: 0, title: '', status: '', lastModifier: '', publishFrom: '', publishTo: '' });
    }
    let temp = cacheData.filter(data => data.id === id);
    if (temp.length === 0) {
      this.addTempAnnoucement(DATABASE.filter(data => data.id === id)[0]);
      temp = cacheData.filter(data => data.id === id);
    }
    return temp;
  }
  addTempAnnoucement(tempAnnoucement: iAnnouncements) {
    if (tempAnnoucement) {
      const temp = JSON.parse(JSON.stringify(tempAnnoucement));
      cacheData.push(temp);
    }
  }

  deleteTempAnnoucement(id) {
    cacheData = cacheData.filter(data => data.id !== id);
  }
}
