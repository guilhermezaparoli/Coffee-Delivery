import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Checkout } from "./pages/Checkout"
export function App() {

  return (
    <>
    <ThemeProvider theme={defaultTheme}>

    <Header/>
    <Checkout/>
    </ThemeProvider>
    <GlobalStyle  />
    </>
  )
}

