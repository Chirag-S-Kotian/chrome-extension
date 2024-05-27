import { useState, useEffect } from 'react';

export default function ViewUrls() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const response = await fetch('/api/get-urls');
      const data = await response.json();
      setUrls(data.urls);
    };
    fetchUrls();
  }, []);

  return (
    <div>
      <h1>Saved URLs</h1>
      <ul>
        {urls.map((url, index) => (
          <li key={index}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
        ))}
      </ul>
    </div>
  );
}
