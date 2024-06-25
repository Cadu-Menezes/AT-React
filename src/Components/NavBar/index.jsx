import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: #333;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    ${(props) => props.style}

    @media(min-width: ${(props) => props.breakpoints.small}){
        flex-direction: row;
    }
`;

const Logo = styled.div`
    font-size: 1.5rem;
    color: white; 
    ${(props) => props.style}
`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    padding-left: 0;
    flex-direction: column;
    width: 100%;
    align-items: center;
    ${(props) => props.style}
   
    @media(min-width: ${(props) => props.breakpoints.small}){
        flex-direction: row;
        justify-content: space-between;
        width: 70%;
    }
`;

const MenuItem = styled.li`
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2%;
    ${(props) => props.style}
`;


const linkDefault = {
    color: 'white',
    textDecoration: 'none',
}

const NavBar = (props) => {

    return <> 
    
        
            
            <Nav breakpoints={props.breakpoints} >
                <Logo style={{color: 'withe'}}>{props.LogoTitle}</Logo>
                <Menu breakpoints={props.breakpoints}>
                    <MenuItem><Link style={{...linkDefault}} to="/">Inicio</Link></MenuItem>
                    <MenuItem><Link style={{...linkDefault}} to="/login">Login</Link></MenuItem>
                    <MenuItem><Link style={{...linkDefault}} to="/produtos">Produtos</Link></MenuItem>
                </Menu>
            </Nav>

            
            
            
       
    </>
};

export default NavBar;