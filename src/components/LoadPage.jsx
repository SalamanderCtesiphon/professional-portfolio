import React from 'react'

import RingLoader from "react-spinners/ClipLoader";

function LoadPage(color,loading) {
  return (
    <div className='load-page'>
      <RingLoader
      color={color}
      loading={loading}
      size={75}
      aria-label="Loading Spinner"
      data-testid="loader"
      speedMultiplier={.35}
      />
    </div>
  )
}

export default LoadPage