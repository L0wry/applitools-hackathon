
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

export const deviceList = {
    iphoneX: {
        portrait:  [500, 700]
    }
}

export const browserList = ['chrome', 'firefox'] //edge