import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './loading.json'
 
export default class Loading extends React.Component {
 
 
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return (
      <div style={{
        margin: '100px auto'
      }}>
        <Lottie
          options={defaultOptions}
          height={160}
          width={160}
        />
      </div>
    )
  }
}