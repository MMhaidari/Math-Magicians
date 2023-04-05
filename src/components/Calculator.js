import { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const obj = {
  total: 0,
  next: '',
  operation: '',
};

function Calculator() {
  return <CalculaorUI />;
}

const CalculaorUI = () => {
  const [vaule, setValue] = useState(obj);

  const onClickHandler = (e) => {
    setValue(calculate(vaule, e.target.textContent));
  };

  const numbers = ['AC', '+/-', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'];
  const operators = ['=', '+', '-', 'x', '÷'];

  const numbersBtn = numbers.map((number) => (
    <button
      className="btn"
      key={number}
      type="button"
      onClick={onClickHandler}
    >
      {number}
    </button>
  ));

  const operatorBtn = operators.map((operator) => (
    <button
      className="btn"
      key={operator}
      type="button"
      onClick={onClickHandler}
    >
      {operator}
    </button>
  ));

  return (
    <div>
      <div className="app-container">
        <div>
          <h1 className="calculator-header">Let&apos;s Do Some Math!</h1>
        </div>
        <div className="calculator">
          <div className="display">
            {vaule.total}
            {vaule.operation}
            {vaule.next}
          </div>
          <div className="operator-numbers">
            <div className="digits">{numbersBtn}</div>
            <div className="operators">{operatorBtn}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
