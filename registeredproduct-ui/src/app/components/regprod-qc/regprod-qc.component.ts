import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RegisteredproductService } from '../../services/registeredproduct.service';

@Component({
  selector: 'app-regprod-qc',
  templateUrl: './regprod-qc.component.html',
  styleUrls: ['./regprod-qc.component.scss']
})
export class RegprodQcComponent implements OnInit {
  regprod_category: string[] = [
  "Serial Id Mandatory",
  "Serial Id Not Mandatory",
  "Custom R-CAT 01"
  ];
  regprodform: FormGroup;  // object to validate forms
  validMessage: string = "";  // whether form submitted successfully
  constructor(private regprod: RegisteredproductService) { }

  ngOnInit(): void {
    this.regprodform = new FormGroup({
       serialid: new FormControl('', Validators.required),
       customerid: new FormControl('', Validators.required),
       refproductid: new FormControl('', Validators.required),
        // purchase_date: new FormControl(),
       // regprod_category: new FormControl('Please Select Registered Product Category', Validators.required),
       addr1: new FormControl(),
       addr2: new FormControl(),
       country: new FormControl(),
       pincode: new FormControl(),
       email: new FormControl(),
       phone: new FormControl()
	
    });
  }
  
  submitRegistration(){
    if (this.regprodform.valid){
      this.validMessage="Successfully Created the Registered Product";
      this.regprod.createRegisteredProduct(this.regprodform.value).subscribe(
        data => {
          this.regprodform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill the details before submitting";
    }
  }

}
