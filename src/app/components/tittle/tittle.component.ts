import { Component, OnInit } from '@angular/core';
import  quizz_questions  from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.css']
})
export class TittleComponent implements OnInit {

  tittle: string = ""

  constructor() { }

  ngOnInit(): void {
    this.tittle =quizz_questions.title
  }

}
