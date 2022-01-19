const el = require('./elements').ELEMENTS;

class Login {
    acessarPaginaLogin() {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    }

    fazerLoginComSucesso() {
        cy.get(el.email).type('Belarrinia55966@teleworm.us')
        cy.get(el.password).type('123456')
        cy.get(el.buttonLogin).click()
    }

    validarLoginComSucesso() {
        cy.get(el.msgSucesso).should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')
    }

    fazerLoginSemSucesso() {
        cy.get(el.email).type('Belarrinia55966')
        cy.get(el.password).type('123456')
        cy.get(el.buttonLogin).click()
    }

    validarLoginSemSucesso() {
        cy.get(el.msgEmailInvalido).should('have.text', 'There is 1 error')
    }
    
    //TO DO
    //Validar login sem sucesso (senha invalida)
}

export default new Login(); 

