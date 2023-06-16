import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  const date = new Date()
  return (
    <Nav className='bg-primary p-2 background'>
      <Container className='d-flex justify-content-between align-items-center'>
        <h3>Welcome To Debanshu habittracer</h3>
        <h3 className='fw-bold'>Daily Habits</h3>
        <span>{date.toDateString()}</span>
      </Container>
    </Nav>
  )
}

export default Header