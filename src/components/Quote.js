import { useState, useEffect } from 'react';
import './Quote.css';

function QuoteData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const request = await fetch('https://api.api-ninjas.com/v1/quotes?category=knowledge', {
          method: 'GET',
          headers: {
            'content-Type': 'application/json',
            'X-Api-Key': 'fnAT/M7RXW/Z6o/USLJf8w==YPBOWhYVvzydMXmi',
          },
        });
        const response = await request.json();
        setData(response);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);
  if (error) return <div className="error">SomeThing went Wrong</div>;
  if (isLoading) return <div className="load">Loading...</div>;

  return (
    <div className="quote-container">
      {data.map((item) => (
        <div key={data.indexOf(item)}>
          <div className="quote">{item.quote}</div>
          <div className="quote-auther">{item.author}</div>
        </div>
      ))}
    </div>
  );
}

export default QuoteData;
