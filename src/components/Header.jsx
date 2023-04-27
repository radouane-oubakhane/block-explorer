import {HStack, Text} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch.jsx";


const Header = () => {

    return (
        <HStack justifyContent="space-between" padding={2}>
            <Text>ETH Price</Text>
            <ColorModeSwitch />
        </HStack>
    )

}

export default Header