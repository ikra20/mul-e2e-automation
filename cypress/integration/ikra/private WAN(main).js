/// <reference types="cypress" />
describe('Private WAN Testing', function () {
    it('Main section', function(){
        cy.visit('https://multapplied-staging.w3engineers.com/login?redirect=%2F')
        cy.get('#email').type('tasnim@w3engineers.com')
        cy.get('#password').type('user123')
        cy.get('.el-button > span').click()
        cy.get('.myBtn > :nth-child(4) > :nth-child(1) > a > .el-menu-item > .el-tooltip',{timeout:10000}).click()
        cy.wait(18000)
        cy.get(':nth-child(3) > [style="padding-left: 40px;"] > .d-flex',{timeout:10000}).click()
        cy.wait(12000)
        cy.get('#tab-wan',{timeout:10000}).click()
        cy.wait(12000)
        cy.get('.el-col > :nth-child(2) > .el-checkbox > .el-checkbox__input > .el-checkbox__inner').click()
        cy.get('#pane-main > .submit-btn-wrapper > .el-button > span').click()
        cy.wait(8000)
        cy.get('.el-col > :nth-child(2) > .el-checkbox > .el-checkbox__input > .el-checkbox__inner').click()
        cy.get('#pane-main > .submit-btn-wrapper > .el-button > span').click()
        cy.wait(8000)
        cy.get(':nth-child(1) > .el-radio > .el-radio__input > .el-radio__inner').click()
        cy.get('#pane-main > .submit-btn-wrapper > .el-button > span').click()
        cy.wait(8000)
        cy.get(':nth-child(3) > .el-radio > .el-radio__input > .el-radio__inner').click()
        cy.get('#pane-main > .submit-btn-wrapper > .el-button > span').click()
        cy.wait(8000)
        cy.get(':nth-child(2) > .el-radio > .el-radio__input > .el-radio__inner').click()
        cy.get('#pane-main > .submit-btn-wrapper > .el-button > span').click()

    })
})