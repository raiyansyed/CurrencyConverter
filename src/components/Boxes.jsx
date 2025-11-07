export default function Boxes({
    displayTag, 
    inputDisabled = false,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd'
}) {
    return (
        <div className="bg-gray-50 rounded-2xl p-6 mb-4 transition-all duration-300 hover:bg-gray-100">
            <div className="flex justify-between items-end gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-2">
                        {displayTag}
                    </label>
                    <input 
                        type="number" 
                        placeholder='0'
                        value={amount}
                        disabled={inputDisabled}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        className="w-full text-2xl font-semibold bg-transparent border-none outline-none focus:ring-0 text-gray-900 disabled:text-gray-500"
                    />
                </div>
                <div className="min-w-[120px]">
                    <label className="block text-sm font-medium text-gray-500 mb-2 text-right">
                        Currency
                    </label>
                    <select 
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        className="w-full text-lg font-semibold bg-transparent border-none outline-none focus:ring-0 cursor-pointer text-right text-gray-900 appearance-none"
                    >
                        {currencyOptions.map((currency) => 
                            <option key={currency} value={currency}>
                                {currency.toUpperCase()}
                            </option> 
                        )}
                    </select>
                </div>
            </div>
        </div>
    );
}