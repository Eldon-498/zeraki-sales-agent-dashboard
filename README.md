# Zeraki Sales Dashboard
This project is an Angular application that serves as a responsive sales agent dashboard for Zeraki, a company revolutionizing education across Africa. The dashboard facilitates the management of school accounts, invoicing, collections, and data visualization for targets and sign-ups.
## Features
## Side Navigation
The application includes a side navigation bar that enhances navigation and organization, divided into two primary modules:

## Dashboard Module: 
Displays dynamic counters for Collections, Sign-ups, Total Revenue, and Bounced Cheques.

## Schools Module: 
Includes a list of schools with options to view detailed information (Invoices and Collections).

## Dashboard Overview
The sales agent dashboard provides a comprehensive overview with the following features:

* Top Card Metrics

* Collections: Displays the total number of collections made, dynamically updated as new collections are recorded.
* Sign-ups: Shows the total number of new school sign-ups, with a breakdown by product (Zeraki Analytics, Zeraki Finance, and Zeraki Timetable).
* Total Revenue: Presents the overall revenue collected, with further details showing the revenue per product.
* Bounced Cheques: Indicates the number of cheques that have bounced.

## Targets Visualization

* Pie Charts: Visually represents the progress towards sign-up targets for Zeraki's products (Zeraki Analytics, Zeraki Finance, and Zeraki Timetable) using pie charts. Red color represents targets not achieved, and green color represents targets achieved.
Tooltips: Implements interactivity with tooltips on hover, displaying exact numbers or percentages.

* Sign-ups Overview

* Bar Graphs: Uses bar graphs to represent the distribution of sign-ups across different types of schools (Primary, Secondary, IGCSE) for each of Zeraki's products.
* Interactive Elements: Includes interactive elements, such as clicking on a bar to get more detailed statistics.

## Upcoming Invoices

* Invoice List: Displays a list of upcoming invoices ordered by due date, starting from the earliest.
* Quick Actions: Each entry shows the school name, amount due, due date, and quick actions for payment collection.
* Payment Collection: Includes a feature to directly collect payment from the list, with a modal or side-panel form for entering collection details.

## School Management
The school management module facilitates the organization, viewing, and manipulation of school-related data, such as invoices and collections.
Schools

* School List: Displays a list of all schools, allowing users to select a school to view more detailed information, including associated invoices and collections.
* School Details: Provides comprehensive details about each school, such as name, type (Primary, Secondary, IGCSE), product they are using, county, registration date, contact information, and school balance.

## Invoices

* Invoice List: Displays all invoices associated with a school, with filters for completed and pending invoices. Shows details such as invoice number, invoice item, creation and due dates, amount, paid amount, balance, completion status, and days until due.
* CRUD Operations: Enables the creation, reading, updating, and deletion of invoices. Invoices automatically generate a unique invoice number, and users can specify due dates, amounts, and associated items.
* Collection Management: Allows adding collections to an invoice with options for marking partial or full payments. Provides functionalities to update the invoice status based on collection results, such as marking an invoice as incomplete if a collection bounces.

## Collections

* Collection List: Shows all collections for each school, including invoice number, collection number, date of collection, status (Valid, Bounced), and amount.
* Collection Status Update: Allows users to update the status of collections directly from the list, marking them as valid or bounced. By default, a collection is marked as valid.

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
