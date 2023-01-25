import React from 'react';
import { Menu, Container, Button, Image } from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';
import vinyl from '../asset/vinyl.svg';
import '../css/navbar.css'

const NavBar = () => {
    const navigate = useNavigate();

  return (
    <Menu 
        // inverted
        borderless
        style={{
            padding: '0.3rem', 
            marginBotton: "20px",
            backgroundColor: "#04BFBF"
        }}
        attached
    >
        <Container>
            <Menu.Item
                name='home'
            >
                <Link to='/'>
                    <Image 
                        size='mini' 
                        src={vinyl}
                        alt='vinyl'
                    />
                </Link>
            </Menu.Item>
            <Menu.Item>
                <h1 
                    className='nav-title'
                >
                    Vinyl Tracker
                </h1>
            </Menu.Item>
            <Menu.Item
                position='right'
                style={{ gap: '15px' }}
            >
                <Button
                    size='mini'
                    primary
                    onClick={() => navigate('/add')}
                >
                    Add Vinyl
                </Button>
                <Button
                    color='yellow'
                    onClick={() => navigate('/home')}
                >
                    View Vinyls
                </Button>
                <Button
                    secondary
                    onClick={() => navigate('/contact')}
                >
                    Contact Dev
                </Button>
            </Menu.Item>
        </Container>
    </Menu>
  )
}

export default NavBar