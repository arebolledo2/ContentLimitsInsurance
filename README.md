# Content Limits Insurance
Description: Demo of a single page app using EF, ASP.NET Core, and Angular

## Projects
* DataAccess: Data access layer using EF connected to local SQL DB
* DomainModel: Business objects (.NET)
 * Web: API endpoints, Angular components, specs, and e2e test
* Web.Test: API endpoint tests

## Prequisites
* .NET Core 3.1
* Node.js
* Entity Framework Core Tools: `dotnet tool install --global dotnet-ef`

## Steps to install:
### In Web\ClientApp:
`npm install`
`npm install -g @angular/cli`
`ng build`

## In DataAcccess:
`dotnet ef database update`

## To test
`ng test`

## To run e2e tests
`ng e2e`