import {Grid, GridItem} from "@chakra-ui/react";
import InformationBox from "./InformationBox.jsx";
import BlocksList from "./BlocksList.jsx";


function MainPageContent() {
    return (
        <Grid
            templateAreas={{
                base: `"InformationBox" "BlocksList" "TransactionsList"`,
                lg: `"InformationBox InformationBox" "BlocksList TransactionsList"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '1fr 1fr'
            }}
        >

            <GridItem area="InformationBox">
                <InformationBox />
            </GridItem>
            <GridItem area="BlocksList">
                <BlocksList />
            </GridItem>
            <GridItem area="TransactionsList">
                TransactionsList
            </GridItem>

        </Grid>
    )
}

export default MainPageContent