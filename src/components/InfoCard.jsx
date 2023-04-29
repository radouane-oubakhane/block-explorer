import {Card, CardBody, CardHeader, Heading, Text} from "@chakra-ui/react";



function InfoCard({title, value, unit, description}) {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'> {title}</Heading>
                <Text>{value} {unit && unit}</Text>
            </CardHeader>
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
        </Card>
    )
}

export default InfoCard