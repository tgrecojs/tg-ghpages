import { Component, OnInit, ViewEncapsulation, trigger, style, state, transition, keyframes, animate } from '@angular/core';

@Component({
  selector: 'app-root',
   animations: [
    trigger('pageLoad', [
      state('rotateRight', style({
        'transform': 'rotate(120deg)'
      })),
      state('center', style({
        'transform': 'rotate(0deg)'
      })),
      state('rotateLeft', style({
        'transform': 'rotate(-120deg)'
      })),
      transition('void => *', animate('2.5s .9s', keyframes([
        style({ 'transform': 'scale(0) rotate(0deg)' }),
        style({ 'transform': 'scale(.2) rotate(80deg)' }),
        style({ 'transform': 'scale(.4) rotate(140deg))' }),
        style({ 'transform': 'scale(.7) rotate(190deg)' }),
        style({ 'transform': 'scale(.9) rotate(240deg)' }),
        style({ 'transform': 'scale(1.3) rotate(280deg)' }),
        style({ 'transform': 'scale(1) rotate(360deg)' })
      ]))),
      transition('* => *', animate('2s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
    ]),
     trigger('visibility', [
       state('shown', style({
            opacity: 1
        })),
        state('hidden', style({
            opacity: 0
        })),
        transition('* => *', animate('.5s ease-in'))
    ])
  ],
  encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    * {
        font-family: "jaf-domus",sans-serif;
    }
    #banner {
      display: flex;
      flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: #4a89ca;
    }
    #banner img {
      width: 400px;
      margin-top: 20px;
    }
    #btn-row {
      display: flex;
      width: 60%;
      align-items: center;
      justify-content: space-around;
      padding: 20px;
    }
  `],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
   loaded: string;
    visibility: string = 'hidden';
  onRotateLeft () {
    this.loaded = 'rotateLeft';
  }

  onRotateRight () {
    this.loaded = 'rotateRight';
  }


  onCenter () {
    this.loaded = 'center';
  }
toggleButtons() {
    this.visibility =
        this.visibility == 'shown'
        ? 'hidden' : 'shown';
  }

  ngOnInit () {
   this.loaded = 'showLogo';
  }
}
