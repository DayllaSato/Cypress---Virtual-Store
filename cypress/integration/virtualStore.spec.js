/// <reference types="cypress" />

import Login from '../support/pages/Login'
import Register from '../support/pages/Register'

describe('Teste de Cadastro', () => {
    it.only('Criar um cadastro na plataforma', () => {

        Register.acessarCadastro();
        Register.preencherCadastro();
        Register.validarCadastro();

    })

})