import { useState } from 'react'
import InputBox from './components/Inputbox'
import useCurrencyinfo from './hooks/usecurrencyinfo';





function App() {
    const [amount, setAmount] = useState();
    const [amountchange, setAmountchange] = useState()
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')


    const currency_details = useCurrencyinfo(from)

    const options = Object.keys(currency_details)

    const convert = () => {
        const result = amount * currency_details[to]
        setAmountchange(result)
    }

    function swapCurrencies() {
        setFrom(to);
        setTo(from);
    }
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountchange={(e) => setAmount(e)}
                                onCurrencychange={(e) => setFrom(e)}
                                currencyOptions={options}
                                selectcurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapCurrencies}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox

                                label="To"
                                amount={amountchange}
                                onAmountchange={setAmountchange}
                                onCurrencychange={(e) => setTo(e)}
                                currencyOptions={options}
                                selectcurrency={to}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
