import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url:any='https://localhost:44305/api/Dashboards'
  url_order:any='https://localhost:44305/api/Orders'
  url_Prediction:any='https://localhost:44316/predict'
  constructor(private http:HttpClient) { }
  getCustomersCount()
  {
   return this.http.get(`${this.url}/GetCustomerCount`)
  }
  getOrderCount()
  {
   return this.http.get(`${this.url}/GetOrderCount`)
  }
  getProductCount()
  {
   return this.http.get(`${this.url}/GetProductCount`)
  }
  getSalesCount()
  {
   return this.http.get(`${this.url}/GetSalesCount`)
  }
  getOrderRevenue()
  {
   return this.http.get(`${this.url_order}/GetOrderRevenue`)
  }
  getGraphData()
  {
   return this.http.get(`${this.url}/GetSalesGraph`)
  }
  form: FormGroup = new FormGroup({
    //CustomerId: new FormControl(null),
    Sales_Id: new FormControl('', Validators.required),
    Order_Name: new FormControl('', Validators.required),
    Customer_Name: new FormControl('', Validators.required),
    Product_Name: new FormControl('', [Validators.required]),
    Quantity: new FormControl(''),
    Unit_Price: new FormControl('',[Validators.required]),
    Sales_Date: new FormControl(''),
    
  });
  insertPrediction(obj:any)
  {
    console.warn("pp",obj);
   return this.http.post(this.url_Prediction,obj)
  }

}
