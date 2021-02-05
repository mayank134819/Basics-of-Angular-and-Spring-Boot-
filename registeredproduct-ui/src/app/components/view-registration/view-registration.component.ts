import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisteredproductService } from 'src/app/services/registeredproduct.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss']
})
export class ViewRegistrationComponent implements OnInit {
public regprod;

  constructor(private rprodService: RegisteredproductService, private route: ActivatedRoute) { 
  
  }

  ngOnInit(): void {
    
    this.getRProd(this.route.snapshot.params.id);
  }

  getRProd(id:number) {
    this.rprodService.getRP(id).subscribe(
      data => {
        this.regprod = data;
      },
      err => console.log(err),
      ()=> console.log('Reg Prod Loaded')
    );
  }

}
