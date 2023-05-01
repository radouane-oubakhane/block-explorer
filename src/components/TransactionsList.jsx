import {Accordion, Box, Heading} from "@chakra-ui/react";
import useTransactions from "../hooks/useTransactions.js";
import Transaction from "./Transaction.jsx";
import TransactionSkeleton from "./TransactionSkeleton.jsx";


function TransactionsList() {
    const {transactionsList, isTransactionsListLoading, transactionsListError} = useTransactions()
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
                overflow="hidden"
                allowToggle
            >
                {isTransactionsListLoading && skeletons.map(skeleton => <TransactionSkeleton />)}
                {transactionsList.map((transaction, index) =>
                    <Transaction key={index} transaction={transaction} />
                )}
            </Accordion>
        </Box>
    )
}

export default TransactionsList
