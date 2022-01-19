/// <reference types="cypress" />

import Login from '../support/pages/Login'
import Register from '../support/pages/Register'

describe('Cadastro de novo usuário', () => {
    it('Criar um cadastro na plataforma com sucesso', () => {
        //Register.acessarPaginaCadastro();
        //Register.preencherCadastro();
        //Register.validarCadastroComSucesso();
    })

    it('Cadastro sem sucesso - campos obrigatorios nao preenchidos', () => {
        Register.acessarPaginaCadastro();
        Register.camposObrigatoriosNaoPreenchidos();
        Register.validarCadastroSemSucesso();
    })

// describe('Login', () => {
//     it('Login com sucesso', () => {
//         Login.acessarPaginaLogin();
//         Login.fazerLoginComSucesso();
//         Login.validarLoginComSucesso();
//     })

//     it('Login sem sucesso', () => {
//         Login.acessarPaginaLogin();
//         Login.fazerLoginSemSucesso();
//         Login.validarLoginSemSucesso();
//     })



    
})

