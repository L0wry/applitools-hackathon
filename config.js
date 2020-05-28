export const URLS = (version = 1) => ({
    homePage: `https://demo.applitools.com/gridHackathonV${version}.html`,
    productListing: `https://demo.applitools.com/gridHackathonProductDetailsV${version}.html`
})

export const platforms = {
    LAPTOP: 'laptop',
    TABLET: 'tablet',
    MOBILE: 'mobile'
}
export const platformViewports = {
    [platforms.LAPTOP]: {
        viewPorts: [1200, 700]
    },
    [platforms.TABLET]: {
        viewPorts: [768, 700]

    },
    [platforms.MOBILE]: {
        viewPorts:  [500, 700]
    }
}
