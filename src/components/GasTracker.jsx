import {HStack, Icon, Text} from "@chakra-ui/react";
import useBlockchain from "../hooks/useBlockchain.js";
import {FaGasPump} from "react-icons/fa";
import GasTrackerSkeleton from "./GasTrackerSkeleton.jsx";

function GasTracker() {
    const {gasPrice, isGasPriceLoading} = useBlockchain()
    return (
        <>
            {isGasPriceLoading ?
                <GasTrackerSkeleton /> :
                (<HStack>
                    <Icon as={FaGasPump} />
                    <Text>Gas: {gasPrice && gasPrice} Gwei</Text>
                </HStack>)
            }
        </>
    )
}

export default GasTracker