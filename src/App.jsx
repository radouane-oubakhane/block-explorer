import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";


function App() {
  return (
      <Grid templateAreas={`"header" "nav" "main" "footer"`}
            templateColumns="1fr"
      >

          <GridItem area="header">
              <Header />
          </GridItem>

          <GridItem area="nav">
              <NavBar />
          </GridItem>

          <GridItem area="main">
              main
          </GridItem>

          <GridItem area="footer">
              Footer
          </GridItem>
      </Grid>
  )
}

export default App
