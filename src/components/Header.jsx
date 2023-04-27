import {Divider, HStack} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch.jsx";
import GasTracker from "./GasTracker.jsx";


function Header() {

    return (
        <>
            <HStack justifyContent="space-between" padding={2}>
                <GasTracker />
                <ColorModeSwitch />
            </HStack>
            <Divider />
        </>
    )
}

export default Header