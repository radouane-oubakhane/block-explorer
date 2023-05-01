import {useEffect, useState} from "react";
import provider from "../services/ethereum-provider.js";


const useTransactions = () => {

    const [transactionsList, setTransactionsList] = useState([])
    const [transactionsListError, setTransactionsListError] = useState('')
    const [isTransactionsListLoading, setIsTransactionsListLoading] = useState(false);

    useEffect (() => {

        async function getLastTenBlocks(blockNumber) {
            setIsTransactionsListLoading(true)
            try {
                const block = await provider.core.getBlockWithTransactions(blockNumber)
                setTransactionsList(block.transactions.slice(0,10))
                console.log("transactionsList = ", transactionsList)
            } catch (e) {
                setTransactionsListError(e.message)
            } finally {
                setIsTransactionsListLoading(false)
            }
        }

        provider.core.getBlockNumber()
            .then(res => {
                    getLastTenBlocks(res)
                }
            )
            .catch(err => {
                setTransactionsListError(err)
                setIsTransactionsListLoading(false)
            })








        return () => {

        }
    }, [])

    return ({
        transactionsList,
        transactionsListError,
        isTransactionsListLoading
    })

}

export default useTransactions