describe('Test Suite I', function() {
    it('Visits the homepage', function() {
        cy.visit('http://localhost:3000')
    })

    it('Finds "Iniciar" button', function() {
        cy.visit('http://localhost:3000')
        cy.contains('Iniciar')
    })

    it('Clicks "Iniciar" button, checks for auth cookie and goes to another route', function() {
        cy.visit('http://localhost:3000')        
        cy.contains('Iniciar').click()
        cy.getCookie("ACESS-TOKEN")
        cy.url().should('include', '/cpnj-query')
    })

    it('Finds the CNPJ field', function() {
        cy.url().should('include', '/cpnj-query')
        cy.get('input[name="cnpj"]')
    })

    it('Types a invalid CNPJ, and presents correct feedback', function() {
        cy.get('input[name="cnpj"]').type("12345678900012").should('have.value', "12.345.678/9000-12")
        cy.contains("CNPJ Inválido")
    })

    it('Clear input', function() {        
        cy.get('input[name="cnpj"]').clear()
    })

    it('Does not contains authorization token, and the application fails to continue', () => {
        cy.server()
        cy.route('GET', 'http://localhost:3004/enterprises/89739528000190').as('getEnterprises')
        cy.url().should('include', '/cpnj-query')
        cy.get('input[name="cnpj"]').type("89739528000190").should('have.value', "89.739.528/0001-90")        
        cy.get('button[type="submit"]').click()
        cy.wait('@getEnterprises') // Wait for API response
        cy.get('@getEnterprises').then(function (xhr) {
            expect(xhr.status).to.eq(401)
            expect(xhr.requestHeaders).to.not.have.property('ACCESS-TOKEN')
            expect(xhr.method).to.eq('GET')
          })
    })

    it('Types a valid CNPJ, if non existant presents error icon', function() {
        cy.server()
        cy.route('GET', 'http://localhost:3004/enterprises/89739528000190').as('getEnterprises')
        cy.visit('http://localhost:3000')        
        cy.contains('Iniciar').click()
        cy.getCookie("ACESS-TOKEN")
        cy.url().should('include', '/cpnj-query')
        cy.get('input[name="cnpj"]').type("89739528000190").should('have.value', "89.739.528/0001-90")        
        cy.get('button[type="submit"]').click()
        
        cy.wait('@getEnterprises') // Wait for API response
        cy.get('@getEnterprises').then(function (xhr) {
            expect(xhr.status).to.eq(404)
            expect(xhr.requestHeaders).to.have.property('ACCESS-TOKEN')
            expect(xhr.method).to.eq('GET')
        })

        cy.get(".icon-times-circle")
    })

    it('Types a valid CNPJ, if exists present the checkmark icon', function() {
        cy.server()
        cy.route('GET', 'http://localhost:3004/enterprises/08174788000164').as('getEnterprise1')
        cy.visit('http://localhost:3000')        
        cy.contains('Iniciar').click()
        cy.getCookie("ACESS-TOKEN")
        cy.url().should('include', '/cpnj-query')
        cy.get('input[name="cnpj"]').type("08174788000164").should('have.value', "08.174.788/0001-64")        
        cy.get('button[type="submit"]').click()
        
        cy.wait('@getEnterprise1') // Wait for API response
        cy.get('@getEnterprise1').then(function (xhr) {
            expect(xhr.status).to.eq(200)
            expect(xhr.requestHeaders).to.have.property('ACCESS-TOKEN')
            expect(xhr.method).to.eq('GET')
        })
        cy.get(".icon-check-circle")
    })

    it('Attempts to add a previous added enterprise', function() {
        cy.server()
        cy.route('GET', 'http://localhost:3004/enterprises/08174788000164').as('getEnterprise1')
        cy.visit('http://localhost:3000')        
        cy.contains('Iniciar').click()
        cy.getCookie("ACESS-TOKEN")
        cy.url().should('include', '/cpnj-query')
        cy.get('input[name="cnpj"]').type("08174788000164").should('have.value', "08.174.788/0001-64")        
        cy.get('button[type="submit"]').click()
        
        cy.wait('@getEnterprise1') // Wait for API response
        cy.get('@getEnterprise1').then(function (xhr) {
            expect(xhr.status).to.eq(200)
            expect(xhr.requestHeaders).to.have.property('ACCESS-TOKEN')
            expect(xhr.method).to.eq('GET')
        })
        cy.get('button[type="submit"]').click()        
        cy.get(".icon-check-circle")
        cy.contains("CNPJ já adicionado!")
    })

    it('Adds two enterprises, and deletes one of them', function() {
        cy.server()
        cy.route('GET', 'http://localhost:3004/enterprises/08174788000164').as('getEnterprise1')
        
        cy.visit('http://localhost:3000')        
        cy.contains('Iniciar').click()
        cy.getCookie("ACESS-TOKEN")
        cy.url().should('include', '/cpnj-query')
        cy.get('input[name="cnpj"]').type("08174788000164").should('have.value', "08.174.788/0001-64")        
        cy.get('button[type="submit"]').click()
        
        cy.wait('@getEnterprise1') // Wait for API response
        cy.get('@getEnterprise1').then(function (xhr) {
            expect(xhr.status).to.eq(200)
            expect(xhr.requestHeaders).to.have.property('ACCESS-TOKEN')
            expect(xhr.method).to.eq('GET')
        })

        cy.get(".icon-check-circle")

        cy.get('input[name="cnpj"]').clear()

        cy.route('GET', 'http://localhost:3004/enterprises/31147511000164').as('getEnterprise2')

        cy.get('input[name="cnpj"]').type("31147511000164").should('have.value', "31.147.511/0001-64")        
        cy.get('button[type="submit"]').click()

        cy.wait('@getEnterprise2') // Wait for API response
        cy.get('@getEnterprise2').then(function (xhr) {
            expect(xhr.status).to.eq(200)
            expect(xhr.requestHeaders).to.have.property('ACCESS-TOKEN')
            expect(xhr.method).to.eq('GET')
        })

        cy.get(".icon-check-circle")
        cy.get(".delete-icon-0").click()
    })

    it('Adds two enterprises, and visits one of them', function() {
        cy.server()
        cy.route('GET', 'http://localhost:3004/enterprises/08174788000164').as('getEnterprise1')
        
        cy.visit('http://localhost:3000')        
        cy.contains('Iniciar').click()
        cy.getCookie("ACESS-TOKEN")
        cy.url().should('include', '/cpnj-query')
        cy.get('input[name="cnpj"]').type("08174788000164").should('have.value', "08.174.788/0001-64")        
        cy.get('button[type="submit"]').click()
        
        cy.wait('@getEnterprise1') // Wait for API response
        cy.get('@getEnterprise1').then(function (xhr) {
            expect(xhr.status).to.eq(200)
            expect(xhr.requestHeaders).to.have.property('ACCESS-TOKEN')
            expect(xhr.method).to.eq('GET')
        })

        cy.get(".icon-check-circle")

        cy.get('input[name="cnpj"]').clear()

        cy.route('GET', 'http://localhost:3004/enterprises/31147511000164').as('getEnterprise2')

        cy.get('input[name="cnpj"]').type("31147511000164").should('have.value', "31.147.511/0001-64")        
        cy.get('button[type="submit"]').click()

        cy.wait('@getEnterprise2') // Wait for API response
        cy.get('@getEnterprise2').then(function (xhr) {
            expect(xhr.status).to.eq(200)
            expect(xhr.requestHeaders).to.have.property('ACCESS-TOKEN')
            expect(xhr.method).to.eq('GET')
        })

        cy.get(".icon-check-circle")
        cy.get(".enterprise-title-0").click()
        cy.url().should('include', '/detail')
        cy.contains("Bear Inc.")
        cy.contains("08.174.788/0001-64")
    })

    it('Clicks in voltar button, and listing does not disapear', function() {
        cy.url().should('include', '/detail')        
        cy.get('button').click()
        cy.contains("Bear Inc.")
        cy.contains("08.174.788/0001-64")
    })
})