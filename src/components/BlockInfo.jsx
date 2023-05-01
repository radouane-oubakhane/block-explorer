import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    HStack,
    Icon,
    SimpleGrid
} from "@chakra-ui/react";
import timeSince from '../services/time-ago.js'
import {BsBoxFill} from "react-icons/all.js";
import TransactionInfo from "./TransactionInfo.jsx";


function BlockInfo({block}) {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        <HStack>
                            <Icon
                                boxSize={6}
                                margin={5}
                                as={BsBoxFill}
                            />
                            <SimpleGrid columns={2} spacing={5}>
                                <Box as="span" color="aqua">{block.number}</Box>
                                <Box as="span">{block.hash.slice(0,30)}...</Box>
                                <Box as="span" fontSize="sm" fontFamily={"monospace"}>{timeSince(block.timestamp)}</Box>
                                <HStack>
                                    <Box as="span" color="aqua">{block.transactions.length}</Box>
                                    <Box as="span">txns</Box>
                                </HStack>
                            </SimpleGrid>
                        </HStack>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {block.transactions.slice(0, 10).map((transaction, index) =>
                    <TransactionInfo key={index} transaction={transaction} index={index} />)}
            </AccordionPanel>
        </AccordionItem>
    )
}

export default BlockInfo