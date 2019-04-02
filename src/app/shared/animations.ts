import { trigger, transition, style, group, query, animate } from '@angular/animations';

export const routerAnimations =
trigger('routeAnimations', [
  transition('About => Main, Sources => Main, Feedback => Main, Sources => About, Feedback => About, Feedback => Sources', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ top: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('800ms ease-out', style({ top: '100%'}))
      ]),
      query(':enter', [
        animate('800ms ease-out', style({ top: '0%'}))
      ])
    ]),
  ]),
  transition('Main => About, Main => Sources, Main => Feedback, About => Sources, About => Feedback, Sources => Feedback', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '100%',
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ bottom: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('800ms ease-out', style({ bottom: '100%'}))
      ]),
      query(':enter', [
        animate('800ms ease-out', style({ bottom: '0%'}))
      ])
    ]),
  ])
]);

export const showHide =
trigger('showHide', [
  transition(':enter', [
    style({
      transform: 'translateX(-150%)',
      position: 'absolute',
      top: '50px',
      left: '0'
    }),
    animate('800ms ease-in-out', style({transform: 'translateX(50px)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(-50%)'}),
    animate('800ms ease-in-out', style({transform: 'translateX(150%)'}))
  ]),
]);

export const appearsFromLeft =
trigger('appearsFromLeft', [
  transition(':enter', [
    style({
      left: '-100%',
    }),
    animate(300, style({left: '0'}))
  ]),
  transition(':leave', [
    style({
      left: '0',
    }),
    animate(300, style({left: '-100%'}))
  ])
]);

