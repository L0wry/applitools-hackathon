import { platformViewports, platforms } from '../../../deviceConfig'

const URL = 'https://demo.applitools.com/gridHackathonV1.html'

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
  describe(`V1 responsiveness for device: ${device}`, () => {
    for (const [element, test] of Object.entries(elements)) {
      const shouldElementBeShown = test.isVisible.includes(device)
        ? 'be.visible'
        : 'not.be.visible'

      it(`element: ${element} should ${shouldElementBeShown}`, () => {
        cy.visit(URL)
        const [width, height] = viewPorts
        cy.viewport(width, height)
        cy.get(test.selector).should(shouldElementBeShown)
      })
    }
  })
}
