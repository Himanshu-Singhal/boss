import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  fastForward() {
    this.transactionService.fastForward();
  }
}
