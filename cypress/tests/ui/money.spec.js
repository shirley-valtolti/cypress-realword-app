describe('Enviar dinheiro com saldo suficiente', () => {

    it('Enviar dinheiro com saldo suficiente', () => {
      cy.visit('http://localhost:3000')
      cy.get('#username').type('paulovaltolti')
      cy.get('#password').type('paulo123')
      cy.get('[data-test="signin-submit"]').click()
      cy.get('[data-test="nav-top-new-transaction"]').click()
      cy.get('[data-test="user-list-search-input"]').type('Shirley')
      cy.get('[data-test="user-list-item-MOPKMm8if"] > .MuiListItemText-root > .MuiTypography-body1').click()
      cy.get('#amount').type('500')
      cy.get('#transaction-create-description-input').type('Pagamento')
      cy.get('[data-test="transaction-create-submit-payment"]').click()
      cy.get('.MuiAlert-message')
    });

  });