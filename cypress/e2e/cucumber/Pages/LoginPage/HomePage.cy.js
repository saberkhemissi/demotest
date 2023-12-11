class LoginPage {
    enterURL() {
      cy.viewport(1024,1000)
      cy.visit("https://fr.foncia.com/",{log:false})
      cy.wait(1000,{log:false})
   }
   
   verifierHomePage() {
    cy.get('.cookie-cta-accept > .p-button').click({ force: true })
    cy.title().should("eq",  'Foncia : Agence immobilière,Vente, Location, Syndic, Gestion locative');
  }
  verifierLogo() {
    return cy.get('.logo').should('be.visible');
  }

  verifierTexte() {
    return cy.get('.home-search-subtitle > p').should('include.text', 'Foncia, 1er syndic et 1er loueur de France');
  }
   choisirProjet() {
    cy.get('#projectToggle').click({ force: true })
    cy.get(':nth-child(2) > .p-radiobutton > .p-radiobutton-box').click({ force: true })
    return this;
  }

  choisirAppartement() {
    cy.get('#propertyToggle').click({ force: true })
    cy.get('.popup-form > :nth-child(1) > :nth-child(1) > .p-checkbox > .p-checkbox-box').click({ force: true })
    return this;
  }
  ChoisirPrixMax(PrixMax) {
    cy.get('#price').type(PrixMax);
    
     return this;
   }
   choisirVille() {
    cy.get('.p-autocomplete > .ng-tns-c57-17').type('Paris',{ force: true })
    cy.get('#pr_id_7_list > :nth-child(2) > .ng-tns-c57-17').click({ force: true })
    return this;
  }
    clickrechercheButton() {
      cy.wait(800,{ log: false })
     cy.get('[type="submit"]').eq(0).click();
     return this;
   }
    verifierleresultatderecherche() {
     return cy.title().should("eq",  'Location appartement Paris (75)');
   }
 }
 const login = new LoginPage();
 export default login;