import { Injectable } from '@angular/core';

export interface Resource {
  id: number;
  status: string;
  displayName: string;
  priority: number;
  source: string;
  lastModifiedBy: string;
  publishDate: string;
}

const ELEMENT_DATA: Resource[] = [
  {
    status: 'Active',
    priority: 1,
    displayName: 'Agency Forms and Student Forms',
    source: 'Web Address',
    lastModifiedBy: 'Shirley Mangallon',
    publishDate: 'Oct 29, 2019 3:30',
    id: 1
  },
  {
    status: 'Active',
    priority: 1,
    displayName: 'Agency Forms and Student Forms',
    source: 'Web Address',
    lastModifiedBy: 'Shirley Mangallon',
    publishDate: 'Sep 30, 2019 10:45',
    id: 1
  },
  {
    status: 'Active',
    priority: 1,
    displayName: 'Agency Forms and Student Forms',
    source: 'Web Address',
    lastModifiedBy: 'Shirley Mangallon',
    publishDate: 'Oct 31, 2019 12:12',
    id: 1
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
