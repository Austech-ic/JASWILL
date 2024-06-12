import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Components/Layouts/AdminLayout/AdminLayout'
import Setting from '@/Components/DashboardComp/SettingComp/setting'
import Load from '../../Components/loading';


const Page = () => {
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
    <div>
      {loading ? (
      <Load />
    ) : (
<React.Fragment>
<AdminLayout>
   <Setting />
    </AdminLayout>
</React.Fragment>
    )}
    </div>
   
  )
}

export default Page