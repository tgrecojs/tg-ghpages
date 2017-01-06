import { Component, OnInit, trigger, style, state, transition, animate } from '@angular/core';
import { NameListService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  animations: [
    trigger('visibility', [
       state('shown', style({
            opacity: 1
        })),
        state('hidden', style({
            opacity: 0
        })),
        transition('* => *', animate('.5s ease-in'))
    ]),
    trigger('moveCube', [
    state('rightTurn', style({
     	transform: 'rotateY(180deg)'
    })),
     transition('* => *', animate(3000))
    ])
  ],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {
  rightTurn = false;
  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  visibility: string = 'shown';
  buddyImg = '/assets/jb-timfo-tg.jpg';
  picOne = 'http://lorempixel.com/400/200/sports/1/';

  turn() {
    this.rightTurn = true;
  }
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}
  
   getLabel() {
    return this.visibility === 'shown' ? 'Hide' : 'Show';
  }

  toggleVisibility() {
    this.visibility =
        this.visibility === 'shown'
        ? 'hidden' : 'shown';
  }
  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error =>  this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
