'use client';
import { useState } from 'react';
import axios from 'axios';

// test demo page
export default function Index() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/generate/essay-writer', {
        content1: 'swimming',
        essayType: 'essayType',
        words: '20',
        language: 'language',
      });
      setData(response.data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Click to Fetch Data from API</h1>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button>

      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {data && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
