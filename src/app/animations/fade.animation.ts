import { animate, style, transition, trigger } from '@angular/animations';

export let fade =  trigger('fade',[
  transition('void => *' ,[
    style({opacity: 0}),
    animate(4000)
  ])
]);