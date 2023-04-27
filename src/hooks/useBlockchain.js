import alchemy from '../services/ethereum-provider.js'
import {useEffect, useState} from "react";
import {Utils} from 'alchemy-sdk';

const useBlockchain = () => {
    const [gasPrice, setGasPrice] = useState(null)
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        alchemy.getGasPrice()
            .then(res => {
                setGasPrice(Utils.formatUnits(res, "gwei").slice(0, 5))
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })


        return () => {
        }
    }, [])


    return ({gasPrice, isLoading, error})

}

export default useBlockchain;

