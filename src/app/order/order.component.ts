import { productModel } from './../product/productModel';
import { OrderServiceService } from './../shared/order-service.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NotificationService } from '../shared/notification.service';
import { orderModel } from './orderModel';
import { ToastrService } from 'ngx-toastr';
import { ThrowStmt } from '@angular/compiler';
import { updateModel } from './updateProduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  constructor(public service: OrderServiceService, private toaster: ToastrService) { }
  listData: MatTableDataSource<any>;
  payements = ['Payement Verified', 'Payement NotVerified']
  displayedColumns: string[] = ['order_Name', 'quantity', 'unit_Price', 'sub_Total', 'order_Date', 'productName', 'payement', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  arrayData: any[] = []
  collection: any
  prodquantity: any
  customeobj: any
  prodobj: any
  showAdd !: boolean;
  showUpdate !: boolean;
  updatequantity: any
  quantityvalue: any
  newquatity: any
  val1: any;
  val2: any;
  sum3: any;
  role:string =""
  prodid: any
  unitpricedata: any
  orderObj: orderModel = new orderModel();
  probj: updateModel = new updateModel();
  ngOnInit(): void {
    this.showUpdate = true;
    this.getorderDetails()
    this.service.getcustomerNameID().subscribe((result) => {
      this.customeobj = result;
    })
    this.service.getproductNameID().subscribe((result) => {
      this.prodobj = result;
    })
    this.role = localStorage.getItem('userType')
  }
  getorderDetails() {
    this.service.getOrderList().subscribe((result) => {
      this.collection = result
      this.arrayData = this.collection
      this.listData = new MatTableDataSource(this.arrayData);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    })
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onClear() {
    this.service.form.reset();
  }
  clickAddOrder() {
    this.service.form.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.addOrder(this.service.form.value).subscribe((result) => {
        this.toaster.success(':: Submitted successfully');
        let can = document.getElementById('cancel')
        can?.click()
        this.getorderDetails()
      })
     // this.getProductQuantity();
      //this.updateProduct();
      this.service.form.reset();
    }
  }

  onEdit(row: any) {
    this.orderObj.OrderId = row.orderId;
    this.service.form.controls['Order_Name'].setValue(row.order_Name);
    this.service.form.controls['Quantity'].setValue(row.quantity);
    this.service.form.controls['Unit_Price'].setValue(row.unit_Price);
    this.service.form.controls['Sub_Total'].setValue(row.sub_Total);
    this.service.form.controls['Order_Date'].setValue(row.order_Date);
    this.service.form.controls['ProductID'].setValue(row.productName);
    this.service.form.controls['CustomerId'].setValue(row.fullName);
    this.service.form.controls['payement'].setValue(row.payement);
    this.showUpdate = true;
    this.showAdd = false;

  }
  editOrderDetail() {
    if (this.service.form.valid) {
      // this.customerObj.CustomerId=this.customerObj.CustomerId;
      this.orderObj.Order_Name = this.service.form.value.Order_Name;
      this.orderObj.Quantity = this.service.form.value.Quantity;
      this.orderObj.Unit_Price = this.service.form.value.Unit_Price;
      this.orderObj.Sub_Total = this.service.form.value.Sub_Total;
      this.orderObj.Order_Date = this.service.form.value.Order_Date;
      this.orderObj.ProductID = this.service.form.value.ProductID;
      this.orderObj.CustomerId = this.service.form.value.CustomerId;
      this.orderObj.payement = this.service.form.value.payement;
      this.service.updateOder(this.orderObj.OrderId, this.orderObj).subscribe((result) => {
        this.toaster.info(':: Updated successfully');
        let can = document.getElementById('cancel')
        can?.click()
        this.getorderDetails()
      }, err => {
        this.toaster.error("error");
      })

      this.service.form.reset();
    }

  }
  getOrderUnitPrice() {
    this.prodid = this.service.form.value.ProductID;
    this.service.getOrderUnitPrice(this.prodid).subscribe(res => {
      this.unitpricedata = res
      this.service.form.controls['Unit_Price'].setValue(this.unitpricedata.unit_Price);
      // console.warn("unit price data[1]",this.unitpricedata[1])
    })

  }
  deleteEmployeeDetail(row: any) {
    // console.warn("row data",row)
    let clickedYes = confirm("Are you sure want to delete");
    if (clickedYes) {
      this.service.deleteOrder(row.orderId)
        .subscribe(res => {
          this.toaster.warning('::Deleted successfully');
          this.getorderDetails()

        })
    }
  }
  onChangeEvent() {
    this.val1 = this.service.form.value.Quantity;
    this.val2 = this.service.form.value.Unit_Price;
    this.sum3 = this.val1 * this.val2;
    this.service.form.controls['Sub_Total'].setValue(this.sum3);
  }
  //get product quantity
  //quantity:any

  public getProductQuantity() {
    if (this.service.form.valid)
      this.prodid = this.service.form.value.ProductID;
    this.service.getProductQuantity(this.prodid).subscribe((result) => {
      this.prodquantity = result.quantity;
      this.updatequantity = this.prodquantity - this.val1;
      this.newquatity = this.updatequantity;
      this.updateProduct(this.prodid, this.newquatity)
    })
    // console.warn("new quantity2",this.newquatity);
  }
  //update products

  updateProduct(prodid: any, quantity: any) {
    this.probj.ProductID = prodid;
    this.probj.Quantity = quantity;
    this.service.updateProduct(this.probj.ProductID, this.probj.Quantity).subscribe((result) => {
      this.toaster.info('::Updated successfully')
    })
  }
  onChange(event: any) {
  }
}
