import { Injectable } from '@angular/core';

export interface Resource {
  id: number;
  title: string;
  priority: number;
  status: string;
  lastModifier: string;
  lastModifiedTime?: string;
}

const ELEMENT_DATA: Resource[] = [
  {
    title: 'Agency Forms',
    priority: 1,
    status: 'Web Address',
    lastModifier: 'Shirley Mangallon',
    lastModifiedTime: 'Nov 30, 2019',

    id: 1
  },
  {
    title: 'Agency Handbook',
    priority: 2,
    status: 'Web Address',
    lastModifier: 'Shirley Mangallon',
    lastModifiedTime: 'Oct 25, 2019',
    id: 2
  },
  {
    title: 'Marketing Materials',
    priority: 3,
    status: 'Attachment',
    lastModifier: 'Shirley Mangallon',
    lastModifiedTime: 'Sep 12, 2019',
    id: 3
  }
];

@Injectable({
  providedIn: 'root'
})
export class AdminResourcesService {
  constructor() {}
  getAllResources() {
    return ELEMENT_DATA;
  }

  getResource(id: number) {
    return ELEMENT_DATA.filter(data => data.id === id);
  }
}
