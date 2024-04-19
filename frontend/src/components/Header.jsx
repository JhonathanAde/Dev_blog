import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  return(
    <>
      <header className="main-header">
        <div>
          <h1>Logo</h1>
        </div>
        <nav>
          <ul>
            <li>Sign Up</li>
            <li>Login</li>
            <li>
              <GiHamburgerMenu />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;