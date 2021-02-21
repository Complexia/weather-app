import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useHistory } from 'react-router-dom';
import '../stylesheets/navbar.css'
function NavigationBar(props: any) {
    
    let username = props.username;
    
    
    return (
        <Navbar>
            <Navbar.Brand href="#home">Weather App {username}</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                
                    
                    {!username ? (
                        <Navbar.Text>
                            <Link to="/login">
                            <Button className="navbarButton">Login</Button>
                            </Link>

                            <Link to="/register">
                                <Button className="navbarButton">Register</Button>
                            </Link>
                        </Navbar.Text>
                    ) 
                    :
                    (   
                        <Navbar.Text>

                            <p>Welcome, { username }</p>
                            
                            <Button className="navbarButton" onClick={() => {
                                localStorage.clear();
                                username = null;
                                window.location.href='/'

                            }}>Logout</Button>
                            
                        </Navbar.Text>


                        

                    )}
                    
                    

                    
                    
                
            </Navbar.Collapse>
        </Navbar>
        
    )
}

export default NavigationBar