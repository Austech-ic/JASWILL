import { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar/navbar'
import React from 'react'
import Loading from '@/Components/loading'
import Footer from '@/Components/Footer/footer'
import Property from '../../Components/PropertyComp/property'

const PropertiesLanding = () => {
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
    <main>
       {loading ? (
        <Loading />
      ) : (
        <div>
    {/* <Navbar /> */}
    <Property  />
  <Footer />
     </div>
      )}
    </main>
    
  )
}

export default PropertiesLanding