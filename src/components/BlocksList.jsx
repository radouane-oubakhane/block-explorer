import {Accordion, Box, Heading} from "@chakra-ui/react";
import useBlock from "../hooks/useBlock.js";
import BlockInfo from "./BlockInfo.jsx";


function BlocksList() {
    const {blocksList} = useBlock()
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
                    block.number !== '0' ? <BlockInfo key={index} block={block} /> : null
                )}
            </Accordion>
        </Box>
    )
}

export default BlocksList
