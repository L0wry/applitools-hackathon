import { platformViewports, platforms, URLS } from '../config'

export default function runTestsForVersion (version) {
  const elements = {
    searchBar: {
      selector: '#DIV__customsear__41',
      isVisible: [platforms.TABLET, platforms.LAPTOP]
    },
    leftSideNav: {
      selector: '#ASIDE__collg__67',
      isVisible: [platforms.LAPTOP]
    },
    mainMenu: {
      selector: '#DIV__mainmenu__15',
      isVisible: [platforms.LAPTOP]
    },
    leadProductImage: {
      selector: '#DIV__topbanner__187',
      isVisible: [platforms.LAPTOP, platforms.MOBILE, platforms.TABLET]
    },
    basketCount: {
      selector: '#STRONG____50',
      isVisible: [platforms.LAPTOP, platforms.TABLET]
    }
  }

  for (const [device, { viewPorts }] of Object.entries(platformViewports)) {
    describe(`Task 1 – Cross-Device Elements Test for device: ${device}`, () => {
      for (const [element, meta] of Object.entries(elements)) {
        const shouldElementBeShown = meta.isVisible.includes(device)
          ? 'be.visible'
          : 'not.be.visible'

        const [width, height] = viewPorts

        it(`element: ${element} (${meta.selector}) should ${shouldElementBeShown} for viewport: [${width}, ${height}] `, () => {
          cy.visit((URLS(version).homePage))
          cy.viewport(width, height)
          cy.get(meta.selector).should(shouldElementBeShown)
        })
      }
    })
  }
}
