/// <reference types="cypress" />
describe('Routing group VLAN assignments', function () {
    it('Landing on private WAN', function(){
        cy.visit('https://multapplied-staging.w3engineers.com/login?redirect=%2F')
        cy.get('#email').type('tasnim@w3engineers.com')
        cy.get('#password').type('user123')
        cy.get('.el-button > span').click()
        cy.get('.myBtn > :nth-child(4) > :nth-child(1) > a > .el-menu-item > .el-tooltip').click()
        cy.wait(12000)
        cy.get(':nth-child(3) > [style="padding-left: 40px;"] > .d-flex',{timeout:10000}).click()
        cy.wait(8000)
        cy.get('#tab-wan',{timeout:10000}).click()
    })
    it('Landing on Routing group VLAN assignments', function(){
        cy.wait(8000)
        cy.get('#tab-aggregator > span').click()
    })
    it('Add', function(){
        cy.wait(8000)
        cy.get('#pane-aggregator > .d-flex > a.mb-10 > .el-button > span').click()
        cy.wait(12000)
        //cy.get('[for="routing_group"] > .el-form-item__label > :nth-child(1) > .el-popover__reference-wrapper > .underline',{timeout:10000}).trigger('mouseover')
        //cy.wait(8000)
        //cy.get('#el-popover-4974',{timeout:10000}).should('be.visible')
        
        cy.get('.el-form-item__content > .el-select > .el-input > .el-input__inner').click()
        cy.wait(8000)
        //cy.get('.el-scrollbar__view > :nth-child(24)').scrollTo('right')
        cy.get('.el-scrollbar__view > :nth-child(20)').click()
        cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('59')
        cy.get(':nth-child(5) > .el-form-item__content > .el-input > .el-input__inner').type('17.155.217.11')
        cy.get(':nth-child(6) > .el-form-item__content > .el-input > .el-input__inner').type('14.43.115.137')
        cy.get(':nth-child(9) > .el-form-item__content > .el-input > .el-input__inner').type('0d6a:dce9:d09c:ad6a:8061:bc1b:0ef0:a0d4')
        cy.get('.mb-8 > .el-form-item__content > .el-input > .el-input__inner').type('66a7:79fc:38a0:76a6:479e:3d76:9fe4:83c5')
        cy.wait(8000)
        //cy.get('body > div.app-wrapper.hideSidebar.withoutAnimation.mobile > div.main-container > section > div:nth-child(2) > div > div.form-wrapper > form > div.submit-btn-wrapper > button > span',{timeout:10000}).click()
        cy.xpath('/html/body/div[1]/div[2]/section/div[1]/div/div[2]/form/div[2]/button/span').within(() => 
        {cy.xpath('/html/body/div[1]/div[2]/section/div[1]/div/div[2]/form/div[2]/button/span')}).click()
        cy.wait(4000)
        cy.get('#tab-aggregator > span').click()
        cy.wait(4000)
        cy.get(':nth-child(1) > .el-table_11_column_77 > .cell > .el-table__expand-icon > .el-icon').click() 
        cy.wait(8000)   
    })
    it('No aggregators with managed mesh VLAN interfaces for this space validation', function(){
        cy.on('.mb-5 > span', (text) => {
            expect(text).to.contains('No aggregators have managed mesh VLAN interfaces for this space and routing group.');
            cy.get('.expanded > .el-table_11_column_77 > .cell > .el-table__expand-icon > .el-icon').click()
          });
        })
    it('Edit', function(){
        cy.wait(8000)
        cy.get(':nth-child(1) > .el-table_11_column_88 > .cell > .el-button--default > span > .el-icon-edit').click()
        cy.wait(8000)
        cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear()
        cy.wait(4000)
        cy.get('.is-error > .el-form-item__content > .el-input > .el-input__inner').type('145')
        cy.xpath('/html/body/div[1]/div[2]/section/div[1]/div/div[2]/form/div[2]/button/span').within(() => 
        {cy.xpath('/html/body/div[1]/div[2]/section/div[1]/div/div[2]/form/div[2]/button/span')}).click()
        cy.wait(8000)
        cy.get('#tab-aggregator > span').click()
        cy.wait(8000)
    })
    it('Delete', function(){
        cy.get(':nth-child(1) > .el-table_21_column_153 > .cell > .el-button--danger > span > .el-icon-delete').click()
        cy.get('.el-message-box__btns > .el-button--primary > span').click()
    })
})