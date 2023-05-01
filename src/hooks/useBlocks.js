import {useEffect, useState} from "react"
import provider from '../services/ethereum-provider.js'

const useBlocks = () => {
    const [blockNumber, setBlockNumber] = useState(0)
    const [blockNumberError, setBlockNumberError] = useState('')
    const [isBlockNumberLoading, setIsBlockNumberLoading] = useState(false);

    const [blocksList, setBlocksList] = useState([])
    const [blocksListError, setBlocksListError] = useState('')
    const [isBlocksListLoading, setIsBlocksListLoading] = useState(false);

    useEffect (() => {

        async function getLastTenBlocks() {
            setIsBlocksListLoading(true)
            try {
                const blocks = []
                for (let i = blockNumber; i > blockNumber - 10; i--) {
                    const block = await provider.core.getBlockWithTransactions(i)
                    blocks.push(block)
                }
                setBlocksList(blocks)
            } catch (e) {
                setBlocksListError(e.message)
            } finally {
                setIsBlocksListLoading(false)
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
        blocksList,
        blocksListError,
        isBlocksListLoading
    })
}

export default useBlocks