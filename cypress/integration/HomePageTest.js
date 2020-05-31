/// <reference types="cypress" />

describe("HomePageTest", () => {
  it("Check URL", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "/react-basics/items/salwars");
    cy.url().should("eq", "http://localhost:3000/react-basics/items/salwars");
  });
  it("Check Page Title", () => {
    cy.get("#pageTitle").contains("Salwar Materials");
  });
  it("Check Add to Cart", () => {
    cy.get("#pageTitle").contains("Salwar Materials");
  });
});
