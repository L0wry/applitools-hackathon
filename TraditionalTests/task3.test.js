import { platformViewports, platforms, URLS } from '../config'

export default function runTestsForVersion(version) {

    const elements = {
        mainImage: {
            selector: '#shoe_img',
            isVisible: [platforms.LAPTOP, platforms.MOBILE, platforms.TABLET]
        },
        rating: {
            selector: '#SPAN__rating__76',
            isVisible: [platforms.LAPTOP, platforms.MOBILE, platforms.TABLET]
        },
        description: {
            selector: '#P____83',
            isVisible: [platforms.LAPTOP, platforms.MOBILE, platforms.TABLET]
        },
        addToCart: {
            selector: '#DIV__btnaddtoca__113',
            isVisible: [platforms.LAPTOP, platforms.MOBILE, platforms.TABLET]
        },
        price: {
            selector: '#DIV__pricemain__108',
            isVisible: [platforms.LAPTOP, platforms.MOBILE, platforms.TABLET]
        }
    }

    for (const [device, { viewPorts }] of Object.entries(platformViewports)) {
        describe(`Task 3 –  Product Details Responsive Test for ${device}`, () => {
            for (const [element, meta] of Object.entries(elements)) {

                const shouldElementBeShown = meta.isVisible.includes(device)
                    ? 'be.visible'
                    : 'not.be.visible'

                const [width, height] = viewPorts

                it(`element: ${element} (${meta.selector}) should ${shouldElementBeShown} for veiwport: [${width}, ${height}] `, () => {
                    cy.visit(`${URLS().productListing}?id=1`)
                    cy.viewport(width, height)
                    cy.get(meta.selector).should(shouldElementBeShown)
                })
            }
        })
    }
}