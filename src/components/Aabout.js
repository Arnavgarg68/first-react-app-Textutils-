import React, { useState } from 'react'

export default function Aabout(props) {
  const myStyle={
    color:props.mode==="dark"?"white":"black",
    backgroundColor:props.mode==="dark"?"black":"white"
  }
  return (
    <div className='container my-3'>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={myStyle} >
              <strong>Open Source</strong>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <code>Open source</code> refers to software whose source code is accessible and freely available for anyone to view, use, modify, and distribute. Embracing collaboration and transparency, open source fosters community-driven development. Contributors worldwide enhance projects, leading to innovation and reliability. Notable examples include the Linux operating system and the Apache HTTP Server. Open source empowers diverse individuals and organizations, promoting shared knowledge and the democratization of technology, ultimately benefiting users and the global digital ecosystem
            </div>
          </div>
        </div>
        <div class="accordion-item"style={myStyle}>
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={myStyle}>
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            A <code>free-to-use</code> site provides services or content without requiring payment. Users can access features, resources, or information without incurring charges. While some sites offer complimentary services supported by ads, others operate on a freemium model, providing basic functions at no cost and premium features for a fee.
            </div>
          </div>
        </div>
        <div class="accordion-item"style={myStyle}>
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={myStyle}>
              <strong>Browser Friendly</strong>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <code>Browser-friendly</code> websites are designed to work seamlessly across various web browsers, ensuring a consistent user experience. They adhere to web standards, utilize responsive design principles, and employ compatibility testing. This approach guarantees accessibility, functionality, and optimal performance, irrespective of the browser or device used by the visitor.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
