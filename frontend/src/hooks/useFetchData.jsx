import { useEffect, useState } from 'react';
import { token } from '../config';
import { toast } from 'react-toastify';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const result = await res.json();
        setLoading(false);
        if (!res.ok) {
          toast.error(result.message);
        } else {
          setData(result);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
