import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
customercount:any
ordercount:any
productcount:any
salescount:any
ordrev:any
  constructor(public service: HomeService, private toastr: ToastrService) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['order_Name','fullName','sub_Total','order_Date','productName','total_Price_Product','revenue'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  arrayData:any[]=[]
  collection:any
  grapharray:any
  predictedVlaue:any;
 
  ngOnInit(): void {
    this.getCustomerCount();
    this.getOrersCount();
    this.getProductCount();
    this.getSalesCount(); 
    this.getOrderRevenue();
   this.getGraphData();
  }
  getGraphData(){
    this.service.getGraphData().subscribe((result)=>{
      this.grapharray=result
   })
   }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
 
  getCustomerCount(){
  this.service.getCustomersCount().subscribe((result)=>{
    this.customercount=result
 })
 }
 getOrersCount(){
  this.service.getOrderCount().subscribe((result)=>{
    this.ordercount=result
 })
 }
 getProductCount(){
  this.service.getProductCount().subscribe((result)=>{
    this.productcount=result
 })
 }
 getSalesCount(){
  this.service.getSalesCount().subscribe((result)=>{
    this.salescount=result
 })
 }
 getOrderRevenue(){
  this.service.getOrderRevenue().subscribe((result)=>{
    this.collection=result
    this.arrayData=this.collection
    this.listData = new MatTableDataSource(this.arrayData);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
 })
 }
 onSubmit() {
  if (this.service.form.valid) {
     this.service.insertPrediction(this.service.form.value).subscribe((result:any)=>{
      console.warn("predicted",result)
      this.toastr.success(':: Predicted successfully');
      let can=document.getElementById('cancel')
      can?.click()
      this.predictedVlaue = result.score
     })
   //  this.getProductQuantity();
  
  }
 }
}
