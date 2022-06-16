import React from 'react'

const Loader = props => {
  return (
    <div className='ui active dimmer'>
      <div className="ui big text loader">{props.message}</div>
    </div>
  )
}

Loader.defaultProops = {
  message: 'Loading...'
};

export default Loader
