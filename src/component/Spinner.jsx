import React, { Component } from 'react'
import loding from '../component/loding.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loding} alt='loding'/>
      </div>
    )
  }
}
