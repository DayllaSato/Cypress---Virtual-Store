const el = require('./elements').ELEMENTS;

class Register {
    acessarPaginaCadastro() {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    }

    preencherCadastro() {
        cy.get(el.email).type('Belarrinia55966@teleworm.us')
        cy.get(el.submit).click()
        cy.get(el.title).click()    
        cy.get(el.name).type('Daylla')
        cy.get(el.lastName).type('Sato')
        cy.get(el.password).type('123456')
        cy.get(el.diaNascimento).select('30')
        cy.get(el.mesNascimento).select('September')
        cy.get(el.anoNascimento).select('1996')
        cy.get(el.endereco).type('Rua Castelo de Sao Jorge, 45')
        cy.get(el.cidade).type('Braga')
        cy.get(el.estado).select('Alaska')
        cy.get(el.codigoPostal).type('64797')
        //cy.get(el.pais).select('United States')
        cy.get(el.telefone).type('986327388')
        cy.get(el.emailAlternativo).clear().type('daylla@hotmail.com')
        cy.get(el.submitAccount).click()
    }

    validarCadastroComSucesso() {
        cy.get(el.msg1).should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.') 
        cy.get(el.msg2).should('have.text', "Daylla Sato")
    }

    camposObrigatoriosNaoPreenchidos() {
        cy.get(el.email).type('Belarrinia55961236@teleworm.us')
        cy.get(el.submit).click()
        cy.get(el.campoEmail).clear()
        cy.get(el.submitAccount).click()
    }

    validarCadastroSemSucesso() {
        cy.get(el.alert).should('have.text', 'There are 8 errors')
    }


}

export default new Register();

