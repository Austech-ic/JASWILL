import { useEffect, useState } from 'react';
import React from 'react'
import Navbar from '@/Components/Navbar/navbar'
import Loading from '@/Components/loading'
import Footer from '@/Components/Footer/footer'
import PropertyDetails from '@/Components/PropertyComp/[category]/page'

const PropertiesDetails = () => {
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
        <PropertyDetails />
        <Footer />
      </div>
      )}
    </main>

   
  )
}

export default PropertiesDetails