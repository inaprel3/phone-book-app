//app.component.ts
import { Component } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [];
  newContact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  };
  contactIdToDelete: number = 0;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  addContact(): void {
    if (this.newContact.firstName && this.newContact.lastName && this.newContact.phoneNumber) {
      this.contactService.addContact(this.newContact);
      this.newContact = {
        id: 0,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
      };
    }
  }

  deleteContact(): void {
    if (this.contactIdToDelete > 0) {
      this.contactService.deleteContact(this.contactIdToDelete);
      this.contactIdToDelete = 0;
    }
  }
}
