import {Accordion, Box, Heading} from "@chakra-ui/react";
import useTransactions from "../hooks/useTransactions.js";
import Transaction from "./Transaction.jsx";


function TransactionsList() {
    const {transactionsList} = useTransactions()
    return (
        <Box
            paddingX={{
                base: 2,
                lg: 10,
                xl: 20
            }}
            paddingY={6}
        >
            <Heading padding={3}>Latest Transactions</Heading>
            <Accordion
                allowToggle
            >
                {transactionsList.map((transaction, index) =>
                    <Transaction key={index} transaction={transaction} />
                )}
            </Accordion>
        </Box>
    )
}

export default TransactionsList
