import { Component, OnInit } from '@angular/core';
import { Publishers, PublishersService } from '../publishers.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {
  portfolio: Publishers[] = [];
  nonConnected: Publishers[] = [];
  supported: Publishers[] = [];

  constructor(private publishersService: PublishersService) { }
  
  ngOnInit(): void {
    this.publishersService.getPortfolio().subscribe(data => this.portfolio = data);
    this.publishersService.getNonConnected().subscribe(data => this.nonConnected = data);
    this.publishersService.getSupported().subscribe(data => this.supported = data);
  }
}
