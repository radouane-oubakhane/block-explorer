import {Divider, HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo-etherscan-light.svg';


function NavBar() {
    return (
        <>
            <HStack padding={2}>
                <Image height="40px" src={logo} alt="logo" />
            </HStack>
            <Divider />
        </>

    )
}

export default NavBar