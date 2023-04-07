import Headings from "app/ui/layouts/Headings/Headings"
import { ErrorInfo } from "react"

import { ErrorBoundaryError, ErrorBoundaryReset } from "../ErrorBoundary/ErrorBoundary.types"

function ErrorFallback(reset: ErrorBoundaryReset, error?: ErrorBoundaryError, errorInfo?: ErrorInfo) {
  return (
    <>
      <Headings>
        <h2>Error {error?.name}</h2>
      </Headings>
      <pre>{errorInfo && JSON.stringify(errorInfo)}</pre>
    </>
  )
}

export default ErrorFallback
