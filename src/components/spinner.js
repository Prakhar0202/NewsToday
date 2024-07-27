import React, { Component } from 'react'
import hourglass from './Hourglass.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={hourglass} alt="hourglass"/>
      </div>
    )
  }
}