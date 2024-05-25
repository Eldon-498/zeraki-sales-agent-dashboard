# ZerakiSalesAgentDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

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

## Technical Requirements

Framework: Built using the latest stable version of Angular for a robust and scalable application.
Data Handling: Simulates real-time data updates using mock JSON data and utilizes mock APIs (such as json-server) to facilitate development without dependency on a backend server.
State Management: Utilizes NgRx Store for efficient state management due to Zeraki's high number of users.

## Design Choices

 ## Color scheme
White background for minimalistic yet intuitive interface that minimizes distractions

## Modal with Form Builder:
A modal with a form builder generates input fields for the relevant module to be updated.

## Reusable Button Component: 
A button component is reused throughout the application.

## Pie Chart Colors:
Red color represents targets not achieved, and green color represents targets achieved in pie charts.

## Default Route: 
The default home route is http://localhost:4200/dashboard.

## Reusable Components: 
Reusable components for bar charts and pie charts are used for better maintainability and consistency.

## Module Organization: 
Module components are grouped in the component folder.
services are gropued in one folder
The store's actions, reducers, selectors and effect are in one folder for all module ations.

## Shared Components: 
A shared components folder contains reusable components like snack bars, pie charts, bar charts, button, tabble and modal component.

## Component Structure:
The components folder contains components for collections, dashboard header, invoices, main dashboard, schools, school details, side navigation, and snack bar.

## Enums:
The project utilizes enums for module types, collections, and other relevant data types.

## Snack Bar Service and Dashboard: 
A snack bar service and dashboard are implemented for sending notifications on performed actions. Currently its only for succesfull operations

## Reusable Table Component:
A reusable table component is included in the shared folder.

## Action Button Placement: 
The create button is present on every record to enable the creation of entities at any place in the table, eliminating the need for scrolling to the top.

## Getting Started
To run the application locally, follow these steps:

## Clone the repository: 
git clone https://github.com/Eldon-498/zeraki-sales-agent-dashboard.git zeraki-dashboard 
## or ssh 
git@github.com:Eldon-498/zeraki-sales-agent-dashboard.git zeraki-dashboard
## then
Navigate to the project directory: cd zeraki-dashboard
Install dependencies: npm install
## Start the development server:
ng serve. This will run both angular and json server concurrently.
Open your browser and visit http://localhost:4200 to access the application.

## Deployment
App was deployed using netlify.

## Dependencies
The project relies on the following dependencies:

## Angular Versions
* @angular-devkit/architect       0.1703.8
* @angular-devkit/build-angular   17.3.8
* @angular-devkit/core            17.3.8
* @angular-devkit/schematics      17.3.8
* @angular/cdk                    17.3.10
* @angular/cli                    17.3.8
* @angular/material               17.3.10
* @schematics/angular             17.3.8
* rxjs                            7.8.1
* typescript                      5.4.5
* zone.js                         0.14.6

## NgRx Version
* @ngrx/effects@17.2.0
* @ngrx/store@17.2.0

## Contributing
Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.
License
This project is licensed under the MIT License.
