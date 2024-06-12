import React from 'react'
import Overview from '@/Components/DashboardComp/Overview/overview'
import AdminLayout from '@/Components/Layouts/AdminLayout/AdminLayout'

const Dashboard = () => {
  return (
    <AdminLayout>
      <Overview />
    </AdminLayout>
  )
}

export default Dashboard