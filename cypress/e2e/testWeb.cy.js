import user from '../fixtures/user.json'

// describe('Unsplash page', () => {
//     it('', () => {
//         cy.visit('https://unsplash.com/');
//         cy.get('[href="https://unsplash.com/login"]').click();
//         cy.get('#user_email').type(user.email);
//         cy.get('#user_password').type(user.password);
//         cy.get('[type=submit]').click();
//         cy.get('[itemprop="contentUrl"]').first().click();
//         const url = cy.url();
//         cy.get('[data-test="photos-route"] [title="Like"]').trigger("click");
//         cy.visit('https://unsplash.com/@leminh1997/likes');
//         cy.log('href: ', url);
//         cy.get('[itemprop="contentUrl"]').invoke('attr', 'href').then(href => {
//             cy.log('href: ', href);
//             expect(url.should('contain', href));
//             cy.request({
//                 method: 'DELETE',
//                 url: `https://api.unsplash.com${href}/like`,
//                 auth: {
//                     'bearer': user.token
//                 }
//             }).then((resp) => {
//                 expect(resp.status).to.eq(200)
//             })
//         });
//     })
// })

describe("template spec", () => {
    // it('passes', () => {
    //   cy.visit('https://the-internet.herokuapp.com/login')
    //   cy.get('#username').type('tomsmith')
    //   cy.get('#password').type('SuperSecretPassword!')
    //   cy.get('button[type="submit"]').click()
    //   cy.get("#flash").invoke('text').then((text) => {
    //     expect(text).contain('You logged into a secure area!')
    //   });
    //   cy.on('window:confirm', (text) => {
    //     // Return false to simulate clicking "Cancel"
    //     return true;
    //   });
    // })
  
    it("test shadowdoom", () => {
      cy.visit("https://practice.expandtesting.com/shadowdom");
      cy.get('[id="my-btn"][type="button"]').invoke("text").then(
        (text) => {
          expect(text).to.equal('This button is inside a Shadow DOM.')
        }
      );
    });
  });
  