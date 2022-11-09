import { Component, OnInit } from '@angular/core';
import  quizz_questions  from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  questions: any
  questionSelected: any = ""

  answers: string[] = []
  answersSelected: string = ""

  opcFinal: string = ''

  questionIndex: number = 0
  questionMaxIndex: number = 0

  finished: boolean = false

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions){
      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]
      this.questionMaxIndex = this.questions.length
    }
  }
  contador(option: string){
    this.answers.push(option)
    this.questionIndex +=1
    if(this.questionIndex<this.questionMaxIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      this.finished = true
      this.resultado(this.answers);
    }
  }
  async resultado(answers: string[]){
    const result = answers.reduce((previous, current, i, arr)=>{
      if(
        arr.filter(item=> item === previous).length >
        arr.filter(item=> item === current).length
      ){
        return previous
      }else{
        return current
      }
    })
    this.opcFinal = result
    this.answersSelected = quizz_questions.results[this.opcFinal as keyof typeof quizz_questions.results]
  }
}
