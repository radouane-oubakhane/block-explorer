import provider from '../services/ethereum-provider.js'
import {useEffect, useState} from "react";
import {Utils} from 'alchemy-sdk';
import apiClient from "../services/api-client";
import {CanceledError} from "axios";

const useBlockchain = () => {
    const [gasPrice, setGasPrice] = useState(null)
    const [gasPriceError, setGasPriceError] = useState('')
    const [isGasPriceLoading, setIsGasPriceLoading] = useState(false);

    const [blockNumber, setBlockNumber] = useState(0)
    const [blockNumberError, setBlockNumberError] = useState('')
    const [isBlockNumberLoading, setIsBlockNumberLoading] = useState(false);

    const [etherPrice, setEtherPrice] = useState({})
    const [etherPriceError, setEtherPriceError] = useState('')
    const [isEtherPriceLoading, setIsEtherPriceLoading] = useState(false);





    useEffect(() => {
        // ================= GAS PRICE =================
        setIsGasPriceLoading(true)
        provider.core.getGasPrice()
            .then(res => {
                setGasPrice(Utils.formatUnits(res, "gwei").slice(0, 5))
                setIsGasPriceLoading(false)
            })
            .catch(err => {
                setGasPriceError(err)
                setIsGasPriceLoading(false)
            })
        // ================= BLOCK NUMBER =================

        setIsBlockNumberLoading(true)
        provider.core.getBlockNumber()
            .then(res => {
                setBlockNumber(res)
                setIsBlockNumberLoading(false)
            })
            .catch(err => {
                setBlockNumberError(err)
                setIsBlockNumberLoading(false)
            })

        // ================= ETHER PRICE =================

        setIsEtherPriceLoading(true)
        const controller = new AbortController();

        apiClient.get('', {signal: controller.signal})
            .then(res => {
                if (res.data.status !== '1') {
                    setEtherPriceError(res.data.result)
                    setIsEtherPriceLoading(false);
                    return
                }
                const price = {
                    ethbtc: res.data.result.ethbtc,
                    ethusd: res.data.result.ethusd
                }
                setEtherPrice(price)
                setIsEtherPriceLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setEtherPriceError(err.message)
                setIsEtherPriceLoading(false)
            });

        return () => {
            controller.abort()
        }
    }, [])


    return ({
        gasPrice,
        gasPriceError,
        isGasPriceLoading,

        blockNumber,
        blockNumberError,
        isBlockNumberLoading,

        etherPrice,
        etherPriceError,
        isEtherPriceLoading,
    })

}

export default useBlockchain

