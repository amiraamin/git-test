import { Component, Fragment } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../img/ogo.jpg";



class Navbars extends Component{
    render(){
        return(
            <Fragment>
                <Navbar fixed="top" expand="lg" style={{backgroundColor: this.props.bg}}>
                    <div className="container">
                        <Navbar.Brand href="/home"><img style={{width:"100px", height:"70px"}} src={logo} alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/home">الرئيسية</Nav.Link>
                                <Nav.Link href="/allSahaba">الشخصيات</Nav.Link>
                                <Nav.Link href="/allSefat">الصفات</Nav.Link>
                                <Nav.Link href="/lab">المكتبة</Nav.Link>
                                <Nav.Link href="#link">الصوتيات</Nav.Link>
                                <NavDropdown title="المزيد" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">الخرائط</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">النبذة</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.1">تحميل</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">سجل</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>

            </Fragment>
        )
    }
}

export default Navbars