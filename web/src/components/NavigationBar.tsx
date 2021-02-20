import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import '../stylesheets/navbar.css'
function NavigationBar() {
    let user = {
        username: "Jack"
    }
    
    return (
        <Navbar>
            <Navbar.Brand href="#home">Weather App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    
                    <Button className="navbarButton">Login</Button>
                    <Button className="navbarButton">Register</Button>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        
    )
}

export default NavigationBar