import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Checkout } from "./pages/Checkout"

import { Home } from './pages/Home'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { OrderSuccess } from "./pages/OrderSuccess"
import { CartContextProvider } from "./contexts/CartContext"
// import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"


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
    < >
      <CartContextProvider>
        <ToastContainer closeOnClick limit={2} autoClose={3000} pauseOnHover={false}/>
    <ThemeProvider theme={defaultTheme}>
    <RouterProvider router={router} />
    </ThemeProvider>
    <GlobalStyle  />
      </CartContextProvider>
    </>
  )
}

