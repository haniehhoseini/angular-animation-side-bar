import { trigger, style, animate, transition, state } from '@angular/animations';


export let move = trigger('move',[
    state('void', style({transform: 'translateX(50px)'})),
    transition('void => *', animate('2s'))
]);