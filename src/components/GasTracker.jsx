import {HStack, Icon, Text} from "@chakra-ui/react";
import useBlockchain from "../hooks/useBlockchain.js";
import {FaGasPump} from "react-icons/fa";

function GasTracker() {
    const {gasPrice} = useBlockchain()
    return (
        <HStack>
            <Icon as={FaGasPump} />
            <Text>Gas: {gasPrice && gasPrice} Gwei</Text>
        </HStack>
    )
}

export default GasTracker