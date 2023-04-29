import {SimpleGrid} from "@chakra-ui/react";
import InfoCard from "./InfoCard.jsx";
import useBlockchain from "../hooks/useBlockchain.js";


function InformationBox() {
    const {blockNumber, gasPrice, etherPrice} = useBlockchain()
    return (
        <SimpleGrid
            paddingX={{
                base: 4,
                lg: 20,
                xl: 40
            }}
            paddingY={6}
            spacing={4}
            templateColumns={{
                base: 'repeat(2, minmax(200px, 1fr))',
                lg: 'repeat(4, minmax(200px, 1fr))'
        }}
            justifyContent="space-between"
        >
            <InfoCard title="LAST FINALIZED BLOCK" value={blockNumber} unit={''} description={"Latest confirmed Ethereum block"} />
            <InfoCard title="GAS PRICE" value={gasPrice} unit={'Gwei'} description={"Ethereum transaction fee"} />
            <InfoCard title="ETHER PRICE" value={etherPrice.ethbtc} unit={'BTC'} description={"Ethereum/Bitcoin trading pair"} />
            <InfoCard title="ETHER PRICE" value={etherPrice.ethusd} unit={'$'} description={"Ethereum/USD trading pair"} />
        </SimpleGrid>
    );
}

export default InformationBox