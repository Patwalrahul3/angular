import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gridList :any[] = [];

 constructor(){
  const localData = localStorage.getItem('userList');
  if(localData != null){
      this.gridList = JSON.parse(localData);


 }
}


deleteItem(email:any){
  debugger
  const isDeleted = confirm('Are you want to remove ? ');
  if(isDeleted){
    const index = this.gridList.findIndex((i:any) => i.email == email);
    this.gridList.splice(index, 1);

  }

}

}