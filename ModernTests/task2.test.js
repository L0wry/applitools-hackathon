import { URLS } from '../config'

const filterBlackSelector = '#colors__Black'
const productGridSelector = '#product_grid'

export default function runTests (version) {
  describe('Task 2', () => {
    it('Should Filter Results', () => {
      cy.visit(URLS(version).homePage)

      cy.eyesOpen({
        appName: 'UFG Hackathon',
        testName: 'Task 2',
        stepName: 'Filter Results'
      })

      cy.eyesCheckWindow({
        tag: 'Pre Filter Results',
        selector: productGridSelector
      })

      cy.get(filterBlackSelector).click()

      cy.eyesCheckWindow({
        tag: 'After Filter Results',
        selector: productGridSelector
      })

      cy.eyesClose()
    })
  })
}
