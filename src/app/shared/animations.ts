import { trigger, transition, style, group, query, animate } from '@angular/animations';

export const routerAnimations =
trigger('routeAnimations', [
  transition('About => Main, Sources => Main, Feedback => Main, Sourcecs => About, Feedback => About, Feedback => Sources', [
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
        animate('500ms ease-out', style({ top: '100%'}))
      ]),
      query(':enter', [
        animate('500ms ease-out', style({ top: '0%'}))
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
        animate('500ms ease-out', style({ bottom: '100%'}))
      ]),
      query(':enter', [
        animate('500ms ease-out', style({ bottom: '0%'}))
      ])
    ]),
  ])
]);