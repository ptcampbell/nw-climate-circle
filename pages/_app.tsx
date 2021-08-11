import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #727272;
    color:#fff;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', Arial, Helvetica, sans-serif;
    font-size: 24px;
	  line-height: 150%;
    font-weight: 400;
  }
`

const theme = {
	colors: {
		primary: '#0070f3',
	},
}

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
