import {HStack, Icon, Text} from "@chakra-ui/react";
import useBlockchain from "../hooks/useBlockchain.js";
import {FaGasPump} from "react-icons/fa";

function GasTracker() {
    const {gasPrice, isGasPriceLoading} = useBlockchain()
    return (
        <HStack>
            <Icon as={FaGasPump} />
            {isGasPriceLoading ?
                <Text>Loading...</Text> :
                <Text>Gas: {gasPrice && gasPrice} Gwei</Text>
            }
        </HStack>
    )
}

export default GasTracker