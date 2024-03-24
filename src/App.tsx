import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Checkout } from "./pages/Checkout"

import { Home } from './pages/Home'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { OrderSuccess } from "./pages/OrderSuccess"


const router= createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      }, 
      {
        path: "/checkout",
        element: <Checkout/>
      },
      {
        path: "/order-success",
        element: <OrderSuccess/>
      }
    ]
  },

])

export function App() {

  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      
    <RouterProvider router={router} />
    </ThemeProvider>
    <GlobalStyle  />
    </>
  )
}

