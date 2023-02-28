import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  
  @Input('valor') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  get getPercent(){
    return `${this.progress}%`;
  }

  changeValue(value:number){
    if( this.progress >= 100 && value >= 0 ){
      this.progress = 100;
    }
    if( this.progress <= 0 && value <= 0 ){
       this.progress = 0;
    }

    this.progress = this.progress + value;
    this.valorSalida.emit(this.progress);
  }

  onChange(newValue : number){
    if( newValue >= 100 ){
      this.progress = 100;
    }
    else if( newValue<= 0 ){
       this.progress = 0;
    }else{
      this.progress  = newValue;
    }
    this.valorSalida.emit(this.progress);
  }
}
