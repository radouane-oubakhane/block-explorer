import {useEffect, useState} from "react"
import provider from '../services/ethereum-provider.js'

const useBlocks = () => {
    const [blocksList, setBlocksList] = useState([])
    const [blocksListError, setBlocksListError] = useState('')
    const [isBlocksListLoading, setIsBlocksListLoading] = useState(false);

    useEffect (() => {

        async function getLastTenBlocks(blockNumber) {
            setIsBlocksListLoading(true)
            try {
                const blocks = []
                for (let i = blockNumber; i > blockNumber - 11; i--) {
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

                    getLastTenBlocks(res)
                }
            )
            .catch(err => {
                setBlocksListError(err)
                setIsBlocksListLoading(false)
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