import { Container, Grid, ThemeProvider } from "@mui/material"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { CountrySelect } from "./CountrySelect"
import { createTheme } from './theme'
import { YourChoise } from "./YourChoise"

function App() {
  const { t, i18n } = useTranslation()
  const theme = createTheme(i18n.language)

  useEffect(() => {
    document.title = `${t('TITLE')} | Satheler`;
    document.documentElement.setAttribute('lang', i18n.language);
  }, [t, i18n.language])

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid sx={{ position: 'fixed', top: '0', width: 'inherit', padding: 'inherit', margin: 'inherit', display: 'flex', justifyContent: 'flex-end' }}>
          <CountrySelect />
        </Grid>
        <YourChoise />
      </Container>
    </ThemeProvider>
  )
}

export default App
