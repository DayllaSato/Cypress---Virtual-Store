const el = require('./elements').ELEMENTS;

class Register {
    acessarCadastro() {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    }

    preencherCadastro() {
        cy.get(el.email).type('Belarrinia55966@teleworm.us')
        cy.get(el.submit).click()
        cy.get(el.title).click()
        cy.get(el.name).type('Daylla')
        cy.get(el.lastName).type('Sato')
        cy.get(el.password).type('123456')
        cy.get(el.diaNascimento).select('17')
        cy.get(el.mesNascimento).select('September')
        cy.get(el.anoNascimento).select('1993')
        cy.get(el.endereco).type('Rua Serge Reggiani, 45')
        cy.get(el.cidade).type('Braga')
        cy.get(el.estado).select('Alaska')
        cy.get(el.codigoPostal).type('64797')
        //cy.get(el.pais).select('United States')
        cy.get(el.telefone).type('986327388')
        cy.get(el.emailAlternativo).clear().type('daylla@hotmail.com')
        cy.get(el.submitAccount).click()

    }

    validarCadastro() {
        cy.get('.info-account').should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.'); 
        cy.get('.account > span').should('have.text', "Daylla Sato");
    
    }


}

export default new Register();

