# NgrxProductApp

```
 git clone https://github.com/nodesense/valtech-ngrx-angular

 cd valtech-ngrx-angular

 npm install 

 ng serve

```

https://v9.ngrx.io/docs

```
  ng new ngrx-product-app
  npm install @ngrx/store@^9

  npm install @ngrx/effects@^9

  ng g c components/counter

  ng g c components/cart
  
  ng g c components/checkout

  ng add @angular/pwa


  ng build --prod 

  npm install http-server -g

  cd dist
  cd ngrx-product-app

  http-server -c-1 -p 8888 .
```

NgRX/Effect
==============

    redux part is synchronous, reducer is sync, not viable to write api call which is async

    Effect - useful to make api calls etc, asyncm by using rxjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
