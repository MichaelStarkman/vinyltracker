import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import pdf from '../asset/Michael-Starkman-Resume.pdf'

const Footer = () => {

  return (
    <Menu
        borderless
        style={{
            padding: '0.4rem', 
            backgroundColor: "#025959",
            marginTop: '0px'
        }}
    >
        <Container>
            <Menu.Item
                position='center'
                style={{            
                    color: 'white'
            }}
            >
                <h3>Built by Michael Starkman © 2023</h3>
            </Menu.Item>
            <Menu.Item
                position='right'
            >
                <Button
                    color='pink'
                    href={pdf} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Hire Me!
                </Button>
            </Menu.Item>
        </Container>

    </Menu>
  )
}

export default Footer

