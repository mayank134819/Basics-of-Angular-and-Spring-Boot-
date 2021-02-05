import { Component, OnInit } from '@angular/core';
import { RegisteredproductService } from '../../services/registeredproduct.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private regprodService: RegisteredproductService) { }

  ngOnInit(): void {
  }

}
