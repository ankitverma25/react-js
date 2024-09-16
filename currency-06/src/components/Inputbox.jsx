function InputBox({
  label,
  amount,
  onAmountchange,
  onCurrencychange,
  currencyOptions = [],
  selectcurrency,
  amountdisable,
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>

        <input
          className="outline-none w-full py-1.5 text-white"
          type="number"
          placeholder="Amount"
          value={isNaN(amount) ? '' : amount}
          onChange={(e) => {
            const value = Number(e.target.value);
            onAmountchange && onAmountchange(isNaN(value) ? 0 : value); // Handle NaN gracefully
          }}
          disabled={amountdisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black"
          value={selectcurrency}
          onChange={(e)=>{onCurrencychange&&onCurrencychange(e.target.value)}}
          >
          {currencyOptions.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
