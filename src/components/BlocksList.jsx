import {Accordion, Alert, AlertIcon, Box, Heading} from "@chakra-ui/react";
import useBlocks from "../hooks/useBlocks.js";
import BlockInfo from "./BlockInfo.jsx";
import BlockInfoSkeleton from "./BlockInfoSkeleton.jsx";


function BlocksList() {
    const {blocksList, isBlocksListLoading, blocksListError} = useBlocks()
    if (blocksListError)
        return (
            <Alert status='error' paddingBottom="100%">
                <AlertIcon />
                There was an error processing your request
            </Alert>)

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return (
        <Box
            paddingX={{
                base: 2,
                lg: 10,
                xl: 20
            }}
            paddingY={6}
        >
            <Heading paddingY={3}>Latest Blocks</Heading>
            <Accordion
                allowToggle
            >
                {isBlocksListLoading && skeletons.map((skeleton, index) => <BlockInfoSkeleton key={index} />)}
                {blocksList.map((block, index) =>
                    block.number !== 0 ? <BlockInfo key={index} block={block} /> : null
                )}
            </Accordion>
        </Box>
    )
}

export default BlocksList
