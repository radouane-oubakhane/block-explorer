import {Card, CardBody, CardHeader, Heading, HStack, Text, useColorMode} from "@chakra-ui/react";



function InfoCard({title, value, unit, description}) {
    const { colorMode } = useColorMode()
    return (
        <Card>
            <CardHeader>
                <Heading size='md'> {title}</Heading>
                <HStack>
                    <Text color={colorMode === 'dark' ? "aqua" : "blue.400"}>{value}</Text>
                    <Text>{unit && unit}</Text>
                </HStack>
            </CardHeader>
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
        </Card>
    )
}

export default InfoCard