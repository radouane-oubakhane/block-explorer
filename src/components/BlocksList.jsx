import {Accordion, Box, Heading} from "@chakra-ui/react";
import useBlocks from "../hooks/useBlocks.js";
import BlockInfo from "./BlockInfo.jsx";


function BlocksList() {
    const {blocksList} = useBlocks()
    return (
        <Box
            paddingX={{
                base: 2,
                lg: 10,
                xl: 20
            }}
            paddingY={6}
        >
            <Heading padding={3}>Latest Blocks</Heading>
            <Accordion
                allowToggle
            >
                {blocksList.map((block, index) =>
                    block.number != '0' ? <BlockInfo key={index} block={block} /> : null
                )}
            </Accordion>
        </Box>
    )
}

export default BlocksList
