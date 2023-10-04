//contract.service.ts
import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    {
      id: 1,
      firstName: 'Богдан',
      lastName: 'Олександрієнко',
      phoneNumber: '0953453456',
      email: 'oleks@phone.ua'
    },
    {
      id: 2,
      firstName: 'Олег',
      lastName: 'Микитенко',
      phoneNumber: '0989344655',
      email: 'nikitenkooleg@phone.ua'
    },
    {
      id: 3,
      firstName: 'Максим',
      lastName: 'Назарчук',
      phoneNumber: '0975111331'
    }
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact): void {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }

  deleteContact(id: number): void {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }
}
