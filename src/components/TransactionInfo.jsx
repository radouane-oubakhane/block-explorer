import {Card, CardBody, Heading, HStack, Icon, Stack, StackDivider, Text} from "@chakra-ui/react";
import {CgNotes} from "react-icons/all.js";


function TransactionInfo({transaction, index}) {
    return (
        <Card marginBottom={2}>
            <HStack>
                <Icon
                    boxSize={6}
                    margin={5}
                    as={CgNotes}
                />
                <Heading size='md'>Transaction {index + 1}</Heading>
            </HStack>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <HStack>
                        <Text textTransform='uppercase'>
                            Hash
                        </Text>
                        <Text color="aqua">
                            {transaction.hash.slice(0,30)}...
                        </Text>
                    </HStack>
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
                </Stack>
            </CardBody>
        </Card>
    )
}

export default TransactionInfo