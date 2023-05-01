import {HStack, Icon, Text, useColorMode} from "@chakra-ui/react";
import useBlockchain from "../hooks/useBlockchain.js";
import {FaGasPump} from "react-icons/fa";
import GasTrackerSkeleton from "./GasTrackerSkeleton.jsx";

function GasTracker() {
    const {gasPrice, isGasPriceLoading, gasPriceError} = useBlockchain()
    const { colorMode } = useColorMode()
    return (
        <>
            {isGasPriceLoading ?
                <GasTrackerSkeleton /> :
                (<HStack>
                    <Icon as={FaGasPump} />
                    <Text>Gas: </Text>
                    {gasPriceError && <Text color="red.400">Error</Text>}
                    <Text color={colorMode === 'dark' ? "aqua" : "blue.400"}>{gasPrice}</Text>
                    <Text>Gwei</Text>
                </HStack>)
            }
        </>
    )
}

export default GasTracker