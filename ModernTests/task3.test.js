import { URLS } from '../config'

export default function runTests (version) {
  describe('Task 3', () => {
    it('Should display product listing page correctly', () => {
      cy.visit(URLS(version).productListing)

      cy.eyesOpen({
        appName: 'UFG Hackathon',
        testName: 'Task 3',
        stepName: 'Product Details test'
      })

      cy.eyesCheckWindow({
        tag: 'Product Listing page',
        stepName: 'Product Details test'
      })

      cy.eyesClose()
    })
  })
}
