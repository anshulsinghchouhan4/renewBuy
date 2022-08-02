import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CardDetailService } from 'src/app/services/card-detail.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  allCardForToDO: any = [];
  allCardForInProgress: any = [];
  allCardForComplete: any = [];

  showNavigateModal = false;
  constructor(
    private router: Router,
    public CardDetailService: CardDetailService
  ) {
    this.allCardForToDO = this.CardDetailService.allCardForToDO;
    this.allCardForInProgress = this.CardDetailService.allCardForInProgress;
    this.allCardForComplete = this.CardDetailService.allCardForComplete;
  }

  ngOnInit(): void {}

  addTodo() {
    this.router.navigate(['/addTodo']);
  }

  onClickSubmit(data: NgForm) {
    let cardDetail;
    let count = 0;
    for (let card of this.allCardForToDO) {
      count += 1;
      if (card.title === data.value.selectTitle) {
        cardDetail = card;
        break;
      }
    }
    this.allCardForToDO.splice(count - 1, 1);
    if (data.value.navigateToColumn === 'inProgress') {
      if (this.CardDetailService.allCardForInProgress.length < 1)
        this.CardDetailService.allCardForInProgress.push(cardDetail);
      else {
        this.CardDetailService.allCardForInProgress.unshift(cardDetail);
      }
    } else if (data.value.navigateToColumn === 'completed') {
      if (this.CardDetailService.allCardForComplete.length < 1)
        this.CardDetailService.allCardForComplete.push(cardDetail);
      else {
        this.CardDetailService.allCardForComplete.unshift(cardDetail);
      }
    } else {
      if (this.CardDetailService.allCardForToDO.length < 1)
        this.CardDetailService.allCardForToDO.push(cardDetail);
      else {
        this.CardDetailService.allCardForToDO.unshift(cardDetail);
      }
    }
    this.allCardForToDO = this.CardDetailService.allCardForToDO;
    this.allCardForInProgress = this.CardDetailService.allCardForInProgress;
    this.allCardForComplete = this.CardDetailService.allCardForComplete;
    this.showNavigateModal = !this.showNavigateModal;
  }
  navigateCard() {
    if (this.allCardForToDO.length === 0) {
      alert('No Do Available');
      return;
    }
    this.showNavigateModal = true;
  }
}
