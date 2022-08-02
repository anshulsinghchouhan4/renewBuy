import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardDetailService } from 'src/app/services/card-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  constructor(private cardDetailService: CardDetailService, private router:Router) {}

  ngOnInit(): void {}

  onClickSubmit(data: NgForm) {
    this.cardDetailService.allCardForToDO.unshift(data.value)
    data.form.reset();
    this.router.navigate(['/home']);
  }
}
