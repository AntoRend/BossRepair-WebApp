import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'

export default class ImageInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedFile: null,
      selectedFiles: null
    }
  }

  singleFileChangedHandler = ( event ) => {
    this.setState({
     selectedFile: event.target.files[0]
    });  
  }

  render () {
    return (
      <div className='card border-light mb-3 mt-5' style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
        <div className='card-header'>
          {/* <h3 style={{ color: '#555', marginLeft: '12px' }}>Single Image Upload</h3> */}
          <p className='text-muted' style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p>
        </div>
        <div className='card-body'>
          <p className='card-text'>Please upload an image for your repair</p>
          <input type='file' onChange={this.singleFileChangedHandler} />
          <div className='mt-5'>
            <button className='btn btn-info' onClick={this.singleFileUploadHandler}>Upload!</button>
          </div>
        </div>
      </div>
    )
  }
}
