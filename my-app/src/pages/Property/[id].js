
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '../../Components/loading'; 
import Indiv from '../../Components/PropertyComp/[category]/page'

const PropertyIndiv = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or data fetching
    const fetchData = async () => {
      // Your actual data fetching logic goes here
      // For demonstration purposes, let's use a timeout
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

    const router = useRouter();
    const { id } = router.query;
  
    if (!id) {
      // Handle loading or error state
      return null;
    }
  return (
    <main className=' overflow-x-auto'>
    {
      loading ? (
        <Loading />
      ): (
        <Indiv id={id} />
      )
    }
   </main>
  )
}

export default PropertyIndiv