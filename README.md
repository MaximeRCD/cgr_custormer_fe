# ClientResearchFE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Thème bootstrap

### Localisation dans le projet
Les fichiers associés au thème sont dans le dossier __./src/assets__

### Build local et server web local
En lançant la commande **ng build** le projet est buildé et envoyé dans le dossier /dist, puis en se rendant dans le dossier et en tappant la commande  **http server** il est possible de voir comment va rendre le projet

### Création de l'image docker et problemes
Lorsque je créé l'image docker avec la command **docker build . -t mytag:latest** et que je run le container, le theme bootstrap n'est pas appliqué.

### Résolution du problème
Pour résoudre ce probleme