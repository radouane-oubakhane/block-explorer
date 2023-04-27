import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo-etherscan-light.svg';


const NavBar = () => {
    return (
        <HStack padding={2}>
            <Image height="40px" src={logo} alt="logo" />
        </HStack>
    )
}

export default NavBar