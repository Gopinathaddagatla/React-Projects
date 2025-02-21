import { Badge, Col, Container, Row} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import SignOutUser from './localStorageLogin/SignOutUser'

function Header() {
    const cart = useSelector(state => state.cart);
    const Header = {
        backgroundColor: 'darkslategrey',
        color: '#fff',
    }

  return (
    <div>
        <br />
        <div className='topHeader text-end py-1'>
            <Container>
                <Row>
                    <Col md={12}>
                        <Link to={'/cart'} className='bg-dark px-3 py-2 text-white rounded box-border-box text-decoration-none' >Cart <Badge>{cart.length}</Badge></Link>
                    </Col>
                </Row>
            </Container>
        </div>
        <br />
        <header style={Header}>
            <Container>
                <Row className='d-flex justify-content-between align-items-center p-3'>
                    <Col md={4}>
                        <Link to={'/'} className='logo'>ReactTopics</Link>
                    </Col>
                    <Col md={8}>
                        <ul className='d-flex justify-content-end mb-0' type='none' >
                            <li><Link to={'/signup'}>Crud</Link></li> &nbsp;
                            <li><Link to={'/contextapi'}>ContextApi</Link></li> &nbsp;
                            <li><Link to={'/redux'}>REDUX</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>
        <br />
    </div>
  )
}

export default Header