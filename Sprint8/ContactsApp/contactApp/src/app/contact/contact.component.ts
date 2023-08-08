import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // The user can add a contact to the list.
  // The user can edit a contact on the list.
  // The user can delete a contact from the list.
  // The user can search for a contact by name

  form: any;
  form2: any;
  uName: string = '';
  uNumber: any;
  container = '';
  contactList: any = [];
  listSearch: any = [];
  showContactList: boolean = false;
  showSearchList: boolean = false;
  NameOfUser: String = '';
  NumberOfUser: any;
  editedName: String = '';
  editNumber: any;

  showEditInputs: boolean = false;
  constructor() {
    this.form = new FormGroup({
      contactName: new FormControl(),
      contactNumber: new FormControl(),
    });
  }

  addToList() {
    this.uName = this.form.controls.contactName.value;
    this.uNumber = this.form.controls.contactNumber.value;

    let obj1 = { name: this.uName, num: this.uNumber };
    this.contactList.push(obj1);

    this.form.reset();
    this.showSearchList = false;
  }

  deleteButton(i: number) {
    this.contactList.splice(i, 1);

    const elementId = `contact-${i}`;
    const element = document.getElementById(elementId);
    if (element) {
      element.remove();
    }
  }
  toggleContactList() {
    this.showContactList = !this.showContactList;
    this.showSearchList = false;
  }

  searchArray() {
    this.listSearch = [];
    for (let i = 0; i < this.contactList.length; i++) {
      if (
        this.NameOfUser == this.contactList[i].name ||
        this.NumberOfUser == this.contactList[i].num
      ) {
        this.listSearch.push(this.contactList[i]);

        console.log(this.listSearch);
      } else {
      }
    }
    this.showSearchList = true;
  }

  ShoweditDetails() {
    this.showEditInputs = !this.showEditInputs;
  }
  saveChanges(i: any) {
    if (this.editNumber == null) {
      this.contactList[i].name = this.editedName;
    } else if (this.editedName == null) {
      this.contactList[i].num = this.editNumber;
    } else {
      this.contactList[i].name = this.editedName;

      this.contactList[i].num = this.editNumber;
    }

    let inputName = document.getElementById(
      `editInputName${i}`
    ) as HTMLInputElement;
    inputName.value = '';
    this.showSearchList = false;

    console.log(this.editedName);
  }
}
