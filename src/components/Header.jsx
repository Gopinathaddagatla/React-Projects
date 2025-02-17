import { Col, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import SignOutUser from './localStorageLogin/SignOutUser'

function Header() {
    const Header = {
        backgroundColor: 'darkslategrey',
        color: '#fff',
    }

  return (
    <div>
        <div className='topHeader text-end py-1'>
            <Container>
                <Row>
                    <Col>
                        {<div>Welcome : <strong>{JSON.parse(localStorage.getItem('userName'))}</strong></div>}
                    </Col>
                </Row>
            </Container>
        </div>
        <header style={Header}>
            <Container>
                <Row className='d-flex justify-content-between align-items-center py-3'>
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