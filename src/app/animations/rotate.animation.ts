import { trigger, style, animate, transition, keyframes } from '@angular/animations';

export let rotate =  trigger('routate',[
    transition(':enter' ,[
      animate('1000ms',
      keyframes([
        style({ transform: 'rotate(0deg)', offset: '0' }),
        style({ transform: 'rotate(2turn)', offset: '1' })
      ])
      )
    ])
])