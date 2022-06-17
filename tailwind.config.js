module.exports = {
    content: [
        './assets/**/*.js',
        './layout/**/*.liquid',
        './sections/**/*.liquid',
        './snippets/**/*.liquid',
        './templates/**/*.liquid',
        './config/**/*.json'
    ],
    theme: {
        extend: {
            backgroundImage: {
                checkmark: 'var(--input-checkmark-bg)',
                selectArrow: 'var(--input-select-arrow-bg)',
                selectArrowFocus: 'var(--input-select-arrow-bg-focus)'
            },
            backgroundPosition: {
                selectBgPosition: 'center right var(--input-x-padding)'
            },
            backgroundSize: {
                '50%': 'auto 40%'
            },
            borderRadius: {
                buttonBorderRadius: 'var(--button-border-radius)',
                inputBorderRadius: 'var(--input-border-radius)'
            },
            colors: {
                buttonBg: 'var(--button-primary-background-color)',
                buttonBorder: 'var(--button-primary-border-color)',
                buttonText: 'var(--button-primary-text-color)',
                buttonSecondaryBg: 'var(--button-secondary-background-color)',
                buttonSecondaryBorder: 'var(--button-secondary-border-color)',
                buttonSecondaryText: 'var(--button-secondary-text-color)',
                buttonBgHover: 'var(--button-primary-background-color-hover)',
                buttonTextHover: 'var(--button-primary-text-color-hover)',
                buttonSecondaryBgHover: 'var(--button-secondary-background-color-hover)',
                buttonSecondaryTextHover: 'var(--button-secondary-text-color-hover)',
                inputBg: 'var(--input-background-color)',
                inputBorderColor: 'var(--input-border-color)',
                inputTextColor: 'var(--input-text-color)',
                inputBgFocus: 'var(--input-background-color-focus)',
                inputBorderColorFocus: 'var(--input-border-color-focus)',
                inputTextColorFocus: 'var(--input-text-color-focus)',
            },
            fontFamily: {
                body: 'var(--body-font-family)',
                button: 'var(--button-font-family)',
                heading: 'var(--header-font-family)'
            },
            fontSize: {
                body: ['var(--body-font-size)', 'var(--body-line-height)'],
                button: ['var(--button-font-size)', 'var(--button-line-height)'],
                h1: ['var(--h1-font-size)', 'var(--h1-line-height)'],
                h2: ['var(--h2-font-size)', 'var(--h2-line-height)'],
                h3: ['var(--h3-font-size)', 'var(--h3-line-height)'],
                h4: ['var(--h4-font-size)', 'var(--h4-line-height)'],
                h5: ['var(--h5-font-size)', 'var(--h5-line-height)'],
                h6: ['var(--h6-font-size)', 'var(--h6-line-height)'],
                input: ['var(--input-font-size)', 1],
                label: ['var(--input-label-font-size)', 1],
                inputMessage: ['var(--input-message-font-size)', 1]
            },
            fontWeight: {
                body: 'var(--body-font-weight)',
                button: 'var(--button-font-weight)',
                heading: 'var(--heading-font-weight)',
                input: 'var(--input-font-weight)',
                label: 'var(--input-label-font-weight)',
                inputMessage: 'var(--input-message-font-weight)'
            },
            minHeight: {
                buttonMinHeight: 'var(--button-min-height)',
                inputMinHeight: 'var(--input-min-height)'
            },
            minWidth: {
                buttonMinWidth: 'var(--button-min-width)'
            },
            spacing: {
                buttonBottom: 'var(--button-bottom-padding)',
                buttonLeft: 'var(--button-left-padding)',
                buttonTop: 'var(--button-top-padding)',
                buttonRight: 'var(--button-right-padding)',
                inputTop: 'var(--input-top-padding)',
                inputBottom: 'var(--input-bottom-padding)',
                inputX: 'var(--input-x-padding)'
            }
        },
    },
    plugins: [],
}