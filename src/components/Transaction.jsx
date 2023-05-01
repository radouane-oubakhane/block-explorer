import {
    AccordionButton,
    AccordionItem,
    Box,
    HStack,
    Icon,
    SimpleGrid, Text
} from "@chakra-ui/react";
import {CgNotes} from "react-icons/all.js";


function Transaction({transaction}) {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        <HStack>
                            <Icon
                                boxSize={6}
                                margin={5}
                                as={CgNotes}
                            />
                            <SimpleGrid columns={2} spacing={5} templateColumns={"1fr 1fr"}>
                                    <Box as="span" color="aqua">{transaction.hash}</Box>
                                    <Box></Box>
                                <HStack>
                                    <Text textTransform='uppercase'>
                                        From
                                    </Text>
                                    <Text color="aqua">
                                        {transaction.from}
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Text textTransform='uppercase'>
                                        To
                                    </Text>
                                    <Text fontSize='sm' color="aqua">
                                        {transaction.to}
                                    </Text>
                                </HStack>
                            </SimpleGrid>
                        </HStack>
                    </Box>
                </AccordionButton>
            </h2>
        </AccordionItem>
    )
}

export default Transaction