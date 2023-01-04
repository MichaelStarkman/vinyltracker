import React from 'react';
import { Menu, Container, Button, Image } from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';
import vinyl from '../asset/vinyl.svg';

const NavBar = () => {
    const navigate = useNavigate();

  return (
    <Menu 
        // inverted
        borderless
        style={{
            padding: '0.3rem', marginBotton: "20px"
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
                <h2>Vinyl Tracker</h2>
            </Menu.Item>
            <Menu.Item
                position='right'
            >
                <Button
                    size='mini'
                    primary
                    onClick={() => navigate('/add')}
                >
                    Add Vinyl
                </Button>
            </Menu.Item>
        </Container>
    </Menu>
  )
}

export default NavBar