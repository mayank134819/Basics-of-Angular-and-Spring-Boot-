import { Component, OnInit } from '@angular/core';
import { RegisteredproductService } from '../../services/registeredproduct.service';

@Component({   //decorator

  selector: 'app-regprod-owl',
  templateUrl: './regprod-owl.component.html',
  styleUrls: ['./regprod-owl.component.scss']
})
export class RegprodOwlComponent implements OnInit {
  public rprods;

  constructor(private regprodService: RegisteredproductService) { }

  ngOnInit(): void {
    this.getRProds();
  }

  getRProds() {
    this.regprodService.getAllRPs().subscribe(
      data => { this.rprods = data },      //on next
      err => console.error(err),           // on error
      () => console.log('Registered Products Loaded')    // on completion
    );
  }

}
