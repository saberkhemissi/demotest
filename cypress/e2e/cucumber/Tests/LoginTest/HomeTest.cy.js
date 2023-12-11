/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import login from "../../Pages/LoginPage/HomePage.cy";

Given("Un utilisateur se connecte à la page d'accueil", () => {
  
   
  // login.enterURL()
   cy.visit(Cypress.env("baseUrl"))
});

Then("La Home Page est bien affichée", () => {
    login.verifierHomePage();
});
And("Le Logo Fonica est bien affiché", () => {
    login.verifierLogo();
});
And("Le texte Foncia, 1er syndic et 1er loueur de France est bien affiché", () => {
    login.verifierTexte();
});

When("Il choisit l'option Louer comme type de projet", () => {
    login.choisirProjet();
});
    

And("Il choisit l'option Appartement comme type de biens", () => {
    login.choisirAppartement();
});


And("Il choisit le Prix Max suivant", (datatable) => {
datatable.hashes().forEach((element) => {
login.ChoisirPrixMax(element.PrixMax);

});
});

And("Il choisit Paris comme Ville", () => {
    login.choisirVille();
});

And("Il clique sur le button Rechercher", () => {
login.clickrechercheButton();
});
Then("La recherche est réalisée avec succès", () => {
login.verifierleresultatderecherche();
});

And("Inclure une capture d'écran à la fin de la recherche dans le rapport", () => {
    cy.screenshot({capture:'runner'})
});