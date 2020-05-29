import { platformViewports, platforms, URLS, BROWSER } from '../config'

export default function runTestsForVersion (version) {
  const showFilterSelector = '#A__openfilter__206'
  const filterBlackSelector = '#colors__Black'
  const gridItemSelector = '.grid_item'
  const filterButtonSelector = '#filterBtn'

  const filter = {
    [platforms.LAPTOP]: () => {
      cy.get(filterBlackSelector).click()
      cy.get(filterButtonSelector).click()
    },
    [platforms.TABLET]: () => {
      cy.get(showFilterSelector).click()
      cy.get(filterBlackSelector).click()
      cy.get(filterButtonSelector).click()
    },
    [platforms.MOBILE]: () => {
      cy.get(showFilterSelector).click()
      cy.get(filterBlackSelector).click()
      cy.get(filterButtonSelector).click()
    }
  }

  for (const [device, { viewPorts }] of Object.entries(platformViewports)) {
    describe(`${BROWSER} : Task 2 – Shopping Experience Test for ${device}`, () => {
      const [width, height] = viewPorts

      it(`should filter by black and display two results for viewport: [${width}, ${height}] `, () => {
        cy.visit(URLS(version).homePage)
        cy.viewport(width, height)

        cy.get(gridItemSelector).should('have.length', 9)
        filter[device]()
        cy.get(gridItemSelector).should('have.length', 2)
      })
    })
  }
}
