import {
    AccordionButton,
    AccordionItem,
    Box,
    HStack,
    Icon,
    SimpleGrid, Text, useColorMode
} from "@chakra-ui/react";
import {CgNotes} from "react-icons/all.js";


function Transaction({transaction}) {
    const { colorMode } = useColorMode()
    return (
        <AccordionItem>

                <AccordionButton>
                    <Box as="span" textAlign='left'>
                        <HStack>
                            <Icon
                                boxSize={6}
                                margin={5}
                                as={CgNotes}
                            />
                            <SimpleGrid columns={1} spacing={2}>
                                    <Box as="span" color={colorMode === 'dark' ? "aqua" : "blue.400"} fontSize={16}>{transaction.hash.slice(0,30)}...</Box>
                                    <Box></Box>
                                <HStack>
                                    <Text textTransform='uppercase' fontFamily={"monospace"}>
                                        From
                                    </Text>
                                    <Text color={colorMode === 'dark' ? "aqua" : "blue.400"} fontSize='sm'>
                                        {transaction.from}
                                    </Text>
                                </HStack>
                                <HStack>
                                    <Text textTransform='uppercase' fontFamily={"monospace"}>
                                        To
                                    </Text>
                                    <Text fontSize='sm' color={colorMode === 'dark' ? "aqua" : "blue.400"}>
                                        {transaction.to}
                                    </Text>
                                </HStack>
                            </SimpleGrid>
                        </HStack>
                    </Box>
                </AccordionButton>

        </AccordionItem>
    )
}

export default Transaction