// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Composables
import { createVuetify } from 'vuetify';

/*
#FBFBF3 background
#2E2925 text
#D6AB46 primary
#416788 accent
#8B323C
*/

export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#D6AB46',
                    secondary: '#8B323C',
                    warn: '#FFB100',
                    error: '#b00020',
                    background: '#FBFBF3',
                    surface: '#FBFBF3',
                    "on-surface": '#2E2925',
                    "on-background": '#2E2925',
                },
            },
        },
    },
})
