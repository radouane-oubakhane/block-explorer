import {useEffect, useState} from "react";
import provider from "../services/ethereum-provider.js";


const useTransactions = () => {
    const [blockNumber, setBlockNumber] = useState(0)
    const [blockNumberError, setBlockNumberError] = useState('')
    const [isBlockNumberLoading, setIsBlockNumberLoading] = useState(false);

    const [transactionsList, setTransactionsList] = useState([])
    const [transactionsListError, setTransactionsListError] = useState('')
    const [isTransactionsListLoading, setIsTransactionsListLoading] = useState(false);

    useEffect (() => {

        async function getLastTenBlocks() {
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
                    setBlockNumber(res)
                    getLastTenBlocks()
                }
            )
            .catch(err => {
                setBlockNumberError(err)
                setIsBlockNumberLoading(false)
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