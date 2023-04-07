import "assets/scss/base.scss"
import "assets/scss/modal.scss"
import "react-toastify/scss/main.scss"

import { ReactNode, StrictMode, Suspense } from "react"
import { ModalContainer } from "react-modal-global"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer, ToastOptions } from "react-toastify"
import store from "store/store"

import AppRoutes from "./AppRoutes"
import CookiesNotice from "./containers/CookiesNotice/CookiesNotice"
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary"
import ErrorFallback from "./containers/ErrorFallback/ErrorFallback"

/**
 * TODO: Better move it from here
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const DEFAULT_TOAST_CONFIG: ToastOptions<{}> = {
  position: "bottom-center"
}

export const APP_TITLE = "Algo Academy"
export function formatAppTitle(...titles: (string | null | undefined)[]): string {
  if (titles.length > 0) {
    return [...titles, APP_TITLE].filter(Boolean).join(" | ")
  }

  return APP_TITLE
}

function App() {
  return (
    <StrictMode>
      <Suspense fallback={"fallback..."}>
        <ErrorBoundary fallback={ErrorFallback}>
          <AppProviders>
            <AppRoutes />

            <CookiesNotice />
            <ModalContainer />
            <ToastContainer {...DEFAULT_TOAST_CONFIG} />
          </AppProviders>
        </ErrorBoundary>
      </Suspense>
    </StrictMode>
  )
}

function AppProviders(props: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        {props.children}
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
