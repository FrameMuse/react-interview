import _ from "lodash"
import { HTMLAttributes, useContext } from "react"
import { classWithModifiers } from "utils/common"

import tabRouterContext from "./tabRouterContext"

interface TabLinkProps extends HTMLAttributes<HTMLButtonElement> {
  to: string | number
  verification?: () => (boolean | PromiseLike<boolean>)
}

function TabLink(props: TabLinkProps) {
  const [tab, setTab] = useContext(tabRouterContext)

  async function onClick() {
    if (props.verification) {
      if (await props.verification() === false) {
        return
      }
    }

    setTab(props.to)
  }

  const className = props.className && classWithModifiers(props.className, props.to === tab && "active")
  return (
    <button type="button" {..._.omit(props, "verification")} className={className} onClick={onClick}>
      {props.children}
    </button>
  )
}

export default TabLink
