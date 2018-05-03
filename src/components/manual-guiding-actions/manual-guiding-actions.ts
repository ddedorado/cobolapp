import { Component, Input } from '@angular/core';

/**
 * Generated class for the ManualGuidingActionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'manual-guiding-actions',
  templateUrl: 'manual-guiding-actions.html'
})
export class ManualGuidingActionsComponent {

  _type: string = 'both';
  _limitActions: number = 12;
  _actions: any = [];
  _startColor: string = 'blue';   
  _endColor: string = 'blue';
  _positions: any = {
    left: {
      icon: 'abb-left',
      title: 'Move Left Arm'
    },
    right: {
      icon: 'abb-right',
      title: 'Move Right Arm'
    },
    both: {
      icon: 'abb-left',
      title: 'Move Both Arm'
    }
  };

  constructor() {
    console.log('Hello ManualGuidingActionsComponent Component');
  }

  addAction( index ) {
    this._actions.push( { id: index + 1 } );
  }

  setStartPosition () {
    this._startColor = this.changeColor( this._startColor, 'blue', 'orange' );
  }

  setEndPosition () {
    this._endColor = this.changeColor( this._endColor, 'blue', 'orange' );
  }

  changeColor (color, compareColor, changeColor) {
    color = ( color == compareColor ) ? changeColor : compareColor;
    return color; 
  }

  @Input()
  set type ( type: string ) {
    this._type = type;
  }

  get type () {
    return this._type;
  }

}
