import "./Header.scss"

import { useAppSelector } from "store/hooks"

function Header() {
  const user = useAppSelector(state => state.user)

  return (
    <header>
      <section className="mob-menu-section">
        <ul className="mob-menu">
          <li className="mob-menu-item">
            <a href="index.html" className="mob-menu-link">What is Algo Academy?</a>
          </li>
          <li className="mob-menu-item">
            <a href="about.html" className="mob-menu-link">About us</a>
          </li>
          <li className="mob-menu-item">
            <a href="course.html" className="mob-menu-link">Full Course</a>
          </li>
          <li className="mob-menu-item">
            <a href="purchase.html" className="mob-menu-link">Purchase</a>
          </li>
          <li className="mob-menu-item">
            <a href="account1.html" className="mob-menu-link">Log In</a>
          </li>
        </ul>
      </section>
    </header>
  )
}

export default Header
