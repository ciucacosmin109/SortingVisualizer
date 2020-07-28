import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    renderItems() {
        return (<>
            <NavItem>
                <NavLink tag={Link} 
                    isActive={(/*match*/_, location) => ["/", "/index"].includes(location.pathname)} 
                    activeClassName="active-nav-link" 
                    className="nav-link text-dark" to="/">
                        <p style={{display: "inline"}}>Home</p>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} 
                    exact 
                    activeClassName="active-nav-link" 
                    className="nav-link text-dark" to="/about">
                        <p style={{display: "inline"}}>About</p>
            </NavLink>
            </NavItem>
        </>);
    }
    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-black border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Sorting Visualizer</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                {this.renderItems()}
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
