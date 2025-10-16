import { Container, Logo, Button } from "../index"
import { data, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const authStatus = useSelector((state) => { state.auth.status });
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Posts',
      slug: '/',
      active: authStatus
    }
  ]
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav>
          <div className="mr-4">
            <Link to="/"><Logo /></Link>
          </div>
          <div>
            <ul className="flex ml-auto">
              {navItems.map(items =>
                items.active ? (
                  <li key={items.name}
                    className=""
                  >
                    <button onClick={() => { useNavigate(items.slug) }}>{items.name}</button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li><Button text = "Logout"/></li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>

  )
}

export default Header
