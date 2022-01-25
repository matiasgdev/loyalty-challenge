export const theme = {
    colors: {
        gray900:'#252F3D',
        gray600:'#7C899C',
        gray500:'#8FA3BF',
        gray300:'#DAE4F2',
        gray200:' #E6EDF7',
        gray100:'#F5F9FF',
        white: '#FFFFFF',
        green: '#29CC74',
        greenLight: '#CCFFE3',
        red: '#E07F4F',
        redLight: '#FFDFD9',
        blue: '#176FEB'
    },
    bgColors: {
        brand: 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);',
        brandHover: 'linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%);',
        ligth: '#E5F0FF',
        light2: '#CCE1FF',
        specials: {
            illustration: 'linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%);',
            illustrationLight: 'linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);',
            aerolab: 'linear-gradient(180deg, #FF8800 0%, #FF6600 100%);'
        },
    },
    mainFont: 'Montserrat',
    spacing: {
        sideMargin: {
            desktop: '80px',
            desktopMedium: '40px',
            mobile: '20px'
        },
        content: {
            desktop: '1384px'
        }
    },
    bp: {
        tablet: '1024px',
        tabletMedium: '840px',
        mobile: '576px',
        mobileSmall: '365px',
        desktop: '1920px',
        desktopMedium: '1400px'
    },
    textSizes: {
        titles: {
            desktop: {
                l1: '200px',
                l2: '48px',
                l3: '32px',
            },
            mobile: {
                l1: '96px',
                l2: '32px',
                l3: '24px',
            },
        },
        texts: {
            desktop: {
                l1: '18px',
                l2: '14px',
            },
            mobile: {
                l1: '16px',
                l2: '12px',
            },
        }
    }
}

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}


