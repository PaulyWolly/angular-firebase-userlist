import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-userlist';

  displayedColumns: string[] = ['id', 'name', 'email', 'personalInfo', 'editObj'];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  // dataSource : any;
  // id : any;
  // name : any;
  // email: any;
  // personalInfo : any;
  editObj: any;

  @ViewChild('btnShow')
  btnShow!: ElementRef;
  @ViewChild('btnClose')
  btnClose!: ElementRef;


  name: string | undefined;
  personalInfo: string | undefined;
  email: string | undefined;

  constructor(
    private store: AngularFirestore
  ){}

  ngOnInit(){
    this.getAll();
    this.dataSource.paginator = this.paginator;
  }

  openDialog(){
    this.btnShow.nativeElement.click();
  }

  closeDialog(){
    this.btnClose.nativeElement.click();
  }

  clearEdit(){
    this.editObj = null;
    this.name = "";
    this.personalInfo = "";
    this.email = "";
  }

  add(){
    if(this.editObj){
      this.store.collection('list')
        .doc(this.editObj.id)
        .update({name : this.name, personalInfo : this.personalInfo, email : this.email});
    } else {
      this.store.collection('list')
        .add({name : this.name, personalInfo : this.personalInfo, email : this.email});
    }
    this.closeDialog();
  }

  edit(id : string){
    this.store.collection('list')
      .doc(id).get()
      .subscribe((response) => {
        this.editObj = Object.assign({id : response.id}, response.data());
        this.name = this.editObj.name;
        this.personalInfo = this.editObj.personalInfo;
        this.email = this.editObj.email;
        this.openDialog();
      })
  }

  delete(id : string){
    const result = confirm('Are you sure you wish to delete?');
    if (result) {
      this.store.collection('list').doc(id).delete();
    }
  }

  getAll(){
    this.store.collection('list')
      .snapshotChanges()
      .subscribe((response) => {
      //   this.dataSource = response.map(item => {
      //     return Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
      // });
    })
  }

}

export interface UserData {
  id : any;
  name : any;
  email: any;
  personalInfo : any;
  editObj : any;
}

const ELEMENT_DATA: UserData[] = [
  { id: 1, name: 'Hydrogen', email: 1.0079, personalInfo: 'H', editObj:'' },
  { id: 2, name: 'Helium', email: 4.0026, personalInfo: 'He', editObj:'' },
  { id: 3, name: 'Lithium', email: 6.941, personalInfo: 'Li' , editObj:''},
  { id: 4, name: 'Beryllium', email: 9.0122, personalInfo: 'Be', editObj:'' },
  { id: 5, name: 'Boron', email: 10.811, personalInfo: 'B', editObj:'' },
  { id: 6, name: 'Carbon', email: 12.0107, personalInfo: 'C' , editObj:''},
  { id: 7, name: 'Nitrogen', email: 14.0067, personalInfo: 'N', editObj:'' },
  { id: 8, name: 'Oxygen', email: 15.9994, personalInfo: 'O' , editObj:''},
  { id: 9, name: 'Fluorine', email: 18.9984, personalInfo: 'F', editObj:'' },
  { id: 10, name: 'Neon', email: 20.1797, personalInfo: 'Ne' , editObj:''},
];