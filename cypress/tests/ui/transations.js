describe('Login com sucesso', () => {
    it('Login com um usuário válido', () => {
      cy.visit('http://localhost:3000')
      cy.get('#username').type('shirleyvaltolti')
      cy.get('#password').type('202122')
      cy.get('[data-test="signin-submit"]').click()
    });

    it('Login com um usuário inválido', () => {
        cy.visit('http://localhost:3000')
        cy.get('#username').type('teste')
        cy.get('#password').type('teste123')
        cy.get('[data-test="signin-submit"]').click()
        cy.get('.css-1pxa9xg-MuiAlert-message')
      });

      it('Registro de novo usuário com sucesso', () => {
        cy.visit('http://localhost:3000/signup')
        cy.get('#firstName').type('Paulo')
        cy.get('#lastName').type('Valtolti')
        cy.get('#username').type('paulovaltolti')
        cy.get('#password').type('paulo123')
        cy.get('#confirmPassword').type('paulo123')
        cy.get('[data-test="signup-submit"]').click()
      });

      it('Registro de novo usuário com informações incompletas', () => {
        cy.visit('http://localhost:3000/signup')
        cy.get('#firstName').type('Paulo')
        cy.get('#lastName').type('Valtolti')
        cy.get('#username').type('paulovaltolti')
        cy.get('#password').type('paulo123')
        cy.get('#confirmPassword').type('paulo')
        cy.get('.MuiFormHelperText-contained')
        
      });
  });