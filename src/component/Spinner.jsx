import React  from 'react'
import loding from '../component/loding.gif'
const Spinner = () => {

  return (
    <div className="text-center">
      <img className='my-3' src={loding} alt='loding' />
    </div>
  )

}
export default Spinner