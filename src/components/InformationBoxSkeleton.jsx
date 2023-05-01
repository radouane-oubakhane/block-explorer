import {Divider, SimpleGrid, Skeleton, Stack} from "@chakra-ui/react";


function InformationBoxSkeleton() {
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
                <Stack>
                    <Skeleton height='20px' marginBottom={16} />
                    <Skeleton height='20px' />
                </Stack>
                <Stack>
                    <Skeleton height='20px' marginBottom={16} />
                    <Skeleton height='20px' />
                </Stack>
                <Stack>
                    <Skeleton height='20px' marginBottom={16} />
                    <Skeleton height='20px' />
                </Stack>
                <Stack>
                    <Skeleton height='20px' marginBottom={16} />
                    <Skeleton height='20px' />
                </Stack>
            </SimpleGrid>
            <Divider />
        </>
    )
}

export default InformationBoxSkeleton