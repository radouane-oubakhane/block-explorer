import {Divider, SimpleGrid} from "@chakra-ui/react";
import InfoCard from "./InfoCard.jsx";
import useBlockchain from "../hooks/useBlockchain.js";
import InformationBoxSkeleton from "./InformationBoxSkeleton.jsx";


function InformationBox() {
    const {gasPrice,
        gasPriceError,
        isGasPriceLoading,
        blockNumber,
        blockNumberError,
        isBlockNumberLoading,
        etherPrice,
        etherPriceError,
        isEtherPriceLoading} = useBlockchain()

    if (isBlockNumberLoading || isGasPriceLoading || isEtherPriceLoading)
        return <InformationBoxSkeleton />
    return (
        <>
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
                {!blockNumberError ?
                <InfoCard title="LAST FINALIZED BLOCK" value={blockNumber} unit={''} description={"Latest confirmed Ethereum block"} /> :
                    <InfoCard title="LAST FINALIZED BLOCK" value={"-"} unit={''} description={"Latest confirmed Ethereum block"} />
                }
                {!gasPriceError ?
                <InfoCard title="GAS PRICE" value={gasPrice} unit={'Gwei'} description={"Ethereum transaction fee"} /> :
                    <InfoCard title="GAS PRICE" value={"-"} unit={'Gwei'} description={"Ethereum transaction fee"} />
                }
                {!etherPriceError ?
                <InfoCard title="ETHER PRICE" value={etherPrice.ethbtc} unit={'BTC'} description={"Ethereum/Bitcoin trading pair"} /> :
                    <InfoCard title="ETHER PRICE" value={"-"} unit={'BTC'} description={"Ethereum/Bitcoin trading pair"} />
                }
                {!etherPriceError ?
                <InfoCard title="ETHER PRICE" value={etherPrice.ethusd} unit={'$'} description={"Ethereum/USD trading pair"} /> :
                    <InfoCard title="ETHER PRICE" value={"-"} unit={'$'} description={"Ethereum/USD trading pair"} />
                }
            </SimpleGrid>
            <Divider />
        </>
    )
}

export default InformationBox