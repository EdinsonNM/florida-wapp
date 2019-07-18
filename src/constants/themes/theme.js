export default {
    typography: {
        useNextVariants: true,
        h3:{
            fontSize: 20,
            fontWeight: 200
        },
        caption:{
            fontSize: 8,
            color: '#ffffff',
            a:{
                color: '#ffffff'
            }
        }
    },
    palette: {
        default:{
            main: '#fffff',
            contrastText: '#fff',
        },
        primary: {
            light: '#fff',
            main: '#B71C1C',
            dark: '#ed7536',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#ed7536',
            dark: '#ed7536',
            contrastText: '#fff',
        },
    },
    overrides: {
        // Name of the component ⚛️ / style sheet
        MuiButton: {
            root:{
                textTransform: 'none'
            },
            // Name of the rule
            contained: {
                boxShadow: 'none',
            },
        },
        MuiDialog: {
            paper:{
                borderRadius: 10,

            }
        }
    },
}