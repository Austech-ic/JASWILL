
import React, {useEffect} from 'react'
import { useRouter } from 'next/router';
import Indiv from '../../Components/PropertyComp/[category]/page'

const PropertyIndiv = () => {
    const router = useRouter();
    const { id } = router.query;
  
    if (!id) {
      // Handle loading or error state
      return null;
    }
  return (
    <Indiv id={id} />
  )
}

export default PropertyIndiv