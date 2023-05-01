import {Divider, Grid, GridItem, Show} from "@chakra-ui/react";
import InformationBox from "./InformationBox.jsx";
import BlocksList from "./BlocksList.jsx";
import TransactionsList from "./TransactionsList.jsx";


function MainPageContent() {
    return (
        <Grid
            templateAreas={{
                base: `"InformationBox" "BlocksList" "TransactionsList"`,
                lg: `"InformationBox InformationBox InformationBox" "BlocksList Divider TransactionsList"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '1fr 1px 1fr'
            }}
        >

            <GridItem area="InformationBox">
                <InformationBox />
            </GridItem>
            <GridItem area="BlocksList">
                <BlocksList />
            </GridItem>
            <Show above="lg">
            <GridItem area="Divider">
                <Divider orientation='vertical'/>
            </GridItem>
            </Show>
            <GridItem area="TransactionsList">
                <TransactionsList />
            </GridItem>

        </Grid>
    )
}

export default MainPageContent