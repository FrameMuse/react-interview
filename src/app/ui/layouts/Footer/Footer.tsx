import "./Footer.scss"

import Logo from "app/ui/synthetic/Logo/Logo"

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <Logo />
        <div className="copyright">Copyright &copy; {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}

export default Footer
