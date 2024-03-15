# Clean Version of Microsoft Angular Tutorials

While Microsoft provides valuable tutorials, some users may encounter issues with the Angular projects not functioning as expected. To address this, I've developed a clean version devoid of unnecessary complexities, aimed at providing a smoother learning experience.

## Purpose

This repository aims to offer a simplified version of Microsoft's Angular tutorials, ensuring a straightforward and effective learning journey for users encountering difficulties with the original projects.

## Features

- Simplicity: Stripped off unnecessary features and complexities, focusing solely on the core concepts.
- Clarity: Clear and concise codebase for easier understanding and troubleshooting.
- Compatibility: Designed to work seamlessly with the provided tutorials, ensuring a hassle-free learning experience.

---

## Init Angular project

Create an basic project with Angular CLI

> (at the moment of writing Angular CLI: 17.3.0)

Make sure you don't use cli 17 but use 16

```bash
npm uninstall -g @angular/cli
npm install -g @angular/cli@16.2.12
```

Add routing and use scss (optional) for styling

```bash
ng new Azure-Angular-Basic --routing true --style scss
```

get the question:

- Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?

choose "no"

create a build so you know which folder is used (`Azure-Angular-Basic/dist/azure-angular-basic`)

```bash
cd Azure-Angular-Basic
ng build
```

check "website"

```bash
cd Azure-Angular-Basic
ng serve --open
```

![](images/angular_17.png)

## Learning

- https://learn.microsoft.com/en-gb/azure/static-web-apps/getting-started?tabs=angular

- https://github.com/staticwebdev/angular-basic

small changes

add `staticwebapp.config.json` to the root of this project

```bash
cd Azure-Angular-Basic # if you are not already in the correct folder
touch staticwebapp.config.json
```

copy this in the file

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["*.{css,scss,js,png,gif,ico,jpg,svg}"]
  }
}
```

## Build errors

```
Node.js version v16.20.2 detected.
The Angular CLI requires a minimum Node.js version of v18.13.

Please update your Node.js version or visit https://nodejs.org/ for additional instructions.
```

problem: https://www.npmjs.com/package/@angular/cli?activeTab=versions

- Github/Azure supports Node.js v16.20.2
- Angular CLI 17 supports Node.js v18.13

Seems that Angular 17 uses a to high node version, so we need to downgrade de cli

- https://www.npmjs.com/package/@angular/cli/v/16.2.12

```bash
npm i @angular/cli@16.2.12

```

downgrade global

```bash
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@16.2.12
```

???

```bash
ng update @angular/cli @angular/core
```

## Glossary

SWA = (Azure) Static Web App
