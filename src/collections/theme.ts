import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        archivoBlack: `'Archivo Black', 'sans-serif'`,
        albertSans: `'Albert Sans', 'sans-serif'`,
    },
    colors: {
        ngDarkblue: '#11132e',
    },
});

export default theme