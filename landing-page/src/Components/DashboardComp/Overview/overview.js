
import React, { useEffect } from 'react'
import { HiHome } from 'react-icons/hi'
import { AiOutlineFileAdd, AiOutlineClockCircle } from 'react-icons/ai'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import { MdCreate, MdOutlineCreateNewFolder } from 'react-icons/md'
import styles from './overview.module.css'
import { FiEdit } from 'react-icons/fi'
// import PageLoader from '@/helper/loading'


const Overview = () => {
  const details = [
    {
      id: 1,
      text: "0",
      label: "Active properties"
    },
    {
      id: 2,
      text: "0",
      label: "Pending properties"
    },
    {
      id: 3,
      text: "0",
      label: "Expired properties"
    },
    {
      id: 4,
      text: "0",
      label: "Agents"
    }
  ]

  const update = [
    {
      id: 1,
      icon: <FiEdit />,
      label: "Recent Posts"
    },
    {
      id: 2,
      icon: <AiOutlineClockCircle />,
      label: "Top Most Visit Page"

    },
    {
      id: 3,
      icon: <AiOutlineClockCircle />,
      label: "Top Browser"

    },
    {
      id: 4,
      icon: <AiOutlineClockCircle />,
      label: "Activities Logs"

    },
    {
      id: 5,
      icon: <FiEdit />,
      label: "Site Analytics"

    }
  ]


  // const data = []
  // if(!data){return ( <PageLoader/>)}

  // if (error) {return <ErrorHandler/>}
  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <HiHome />
        <p>Dashboard</p>
      </div>
      <div className={styles.cont}>
        {
          details.map((datum) => (
            <div className={styles.subcont} key={datum.id}>
              <p className={styles.bold}>{datum.text}</p>
              <p>{datum.label}</p>
            </div>
          ))
        }
      </div>

     <div className={styles.subtwo}>
     <div className={styles.conts}>
        {
          update.map((items) => (
            <div className={styles.subconts} key={items.id}>
              <p>{items.icon}</p>
              <p>{items.label}</p>
            </div>
          ))
        }
      </div>
     </div>






    </div>
  )
}

export default Overview;