import {Accordion, Alert, AlertIcon, Box, Heading} from "@chakra-ui/react";
import useTransactions from "../hooks/useTransactions.js";
import Transaction from "./Transaction.jsx";
import TransactionSkeleton from "./TransactionSkeleton.jsx";


function TransactionsList() {
    const {transactionsList, isTransactionsListLoading, transactionsListError} = useTransactions()
    if (transactionsListError)
        return (
            <Alert status='error' paddingBottom="100%">
                <AlertIcon />
                There was an error processing your request
            </Alert>)

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
            <Heading paddingY={3}>Latest Transactions</Heading>
            <Accordion
                overflow="hidden"
                allowToggle
            >
                {isTransactionsListLoading && skeletons.map((skeleton, index) => <TransactionSkeleton key={index} />)}
                {transactionsList.map((transaction, index) =>
                    <Transaction key={index} transaction={transaction} />
                )}
            </Accordion>
        </Box>
    )
}

export default TransactionsList
