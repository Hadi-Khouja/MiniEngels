// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Composables
import { createVuetify } from 'vuetify';

/*
#8B323C
#8FBFBC
#FFB100
#416788
*/

export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#8B323C',
                    secondary: '#8FBFBC',
                    warn: '#FFB100',
                    error: '#b00020'
                },
            },
        },
    },
})
