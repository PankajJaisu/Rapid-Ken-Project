import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() {
  }

  public employeeList = new Array;

  addData(employeeData){
    if(JSON.parse(localStorage.getItem('employeeList')))
    this.employeeList = JSON.parse(localStorage.getItem('employeeList'));
    this.employeeList.push(employeeData);
    localStorage.setItem("employeeList", JSON.stringify(this.employeeList));
  }

  returnData(){
    if(JSON.parse(localStorage.getItem('employeeList')))
    return JSON.parse(localStorage.getItem('employeeList'));
    else return null;
  }

  removeData(employeeData){

    this.employeeList = JSON.parse(localStorage.getItem('employeeList'));

    this.employeeList = this.employeeList.filter(data => data['id']!=employeeData['id']);

    console.log(this.employeeList);


    localStorage.setItem("employeeList", JSON.stringify(this.employeeList));

    return this.employeeList;
  }

}
