import { useEffect, useState } from 'react';
import Loading from '../../Components/loading'; 
import Property from '@/Components/PropertyComp/property'
import Footer from '@/Components/Footer/footer'

const Propertypage = () => {
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

  return (
    <main className=' overflow-x-auto'>
    {
      loading ? (
        <Loading />
      ) : (
        <div>
        <Property />
        <Footer />
      </div>
      )
    }
   </main>
  )
}

export default Propertypage