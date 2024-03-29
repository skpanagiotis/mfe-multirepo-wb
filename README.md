# Micro-Frontend Multirepo Web Components

# Web Component

Multirepo Micro-Frontend Implementantion using **Web Components**.

## Tools

-   [Angular Elements](https://www.npmjs.com/package/@angular/elements)
-   Custom Events

## Getting Started

**Angular Version 15.1.0**

Web Components includes, currently three projects:

1. **shell**, the main project.
2. **projectOne**, the first microfrontend subProject.
3. **projectTwo**, the second microfrontend subProject.

In every app you should run:

`npm install`

Firstly, you should build **projectOne** with this command:

`npm run bundle`

This command will create a .js file of projectOne.

The next step is to run project-one.js (dist folder) in a local server with port _8070_. I use Python for this.

Also, you should build **projectTwo** with this command:

`npm run bundle`

This command will create a .js file of projectTwo.

The next step is to run project-two.js (dist folder) in a local server with port _8080_. I use Python for this.

Then the next step is to go in **shell** folder and run this command:

`npm start`

## Description

ProjectOne exposes _Dashboard Component_ which includes a table.

ProjectTwo exposes _Form Component_ which includes a form.

By entering data in form and clicking submit, the submited data stored in _Custom Event_. Then we can retrieve these data inside _DashboardComponent_ with _Customer Event_ and show them inside the table.
