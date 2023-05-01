import {Box, Skeleton} from "@chakra-ui/react";


function BlockInfoSkeleton() {
    return (
        <Skeleton>
            <Box marginBottom={3}>contents wrapped</Box>
            <Box marginBottom={3}>won't be visible</Box>
        </Skeleton>
    )
}

export default BlockInfoSkeleton