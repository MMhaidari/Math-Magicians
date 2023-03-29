import './Calculator.css';

function Calculator() {
  return (
    <CalculaorUI />
  );
}

const CalculaorUI = () => {
  const numbers = ['AC', '+/-', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'];
  const operators = ['=', '+', '-', '*', '/'];

  const numbersBtn = numbers.map((number) => (
    <button className="btn" key={number} type="button">{number}</button>
  ));

  const operatorBtn = operators.map((operator) => (
    <button className="btn" key={operator} type="button">{operator}</button>
  ));

  return (
    <div className="app-container">
      <div className="calculator">
        <div className="display">0</div>
        <div className="operator-numbers">
          <div className="digits">{numbersBtn}</div>
          <div className="operators">{operatorBtn}</div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
