import { platformViewports, platforms, URLS } from '../config'

export default function runTestsForVersion (version) {
  const showFilterSelector = '#A__openfilter__206'
  const filterBlackSelector = '#colors__Black'
  const gridItemSelector = '.grid_item'

  const filter = {
    [platforms.LAPTOP]: () => cy.get(filterBlackSelector).click(),
    [platforms.TABLET]: () => {
      cy.get(showFilterSelector).click()
      cy.get(filterBlackSelector).click()
    },
    [platforms.MOBILE]: () => {
      cy.get(showFilterSelector).click()
      cy.get(filterBlackSelector).click()
    }
  }

  for (const [device, { viewPorts }] of Object.entries(platformViewports)) {
    describe(`Task 2 – Shopping Experience Test for ${device}`, () => {
      const [width, height] = viewPorts

      it(`should filter by black and display two results for veiwport: [${width}, ${height}] `, () => {
        cy.visit(URLS().homePage)
        cy.viewport(width, height)

        cy.get(gridItemSelector).should('have.length', 9)
        filter[device]()
        cy.get(gridItemSelector).should('have.length', 2)
      })
    })
  }
}
