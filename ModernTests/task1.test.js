import { URLS } from '../config'

export default function runTests (version) {
  describe('Task 1', () => {
    it('Should Cross-Device Elements Test', () => {
      cy.visit(URLS(version).homePage)

      cy.eyesOpen({
        appName: 'UFG Hackathon',
        testName: 'Task 1',
        stepName: 'Cross-Device Elements Test'
      })
      cy.eyesCheckWindow({
        tag: 'homepage'
      })

      cy.eyesClose()
    })
  })
}
