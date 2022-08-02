import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDetailService {

  constructor() { }
  allCardForToDO = [
    {
      title: 'Card One',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      priority: 'Critical',
    },
    {
      title: 'Card Two',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      priority: 'Medium',
    },
  ];
  allCardForInProgress: any = [];
  allCardForComplete: any = [];
}
