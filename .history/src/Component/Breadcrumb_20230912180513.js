import React from 'react'

const Breadcrumb = ({title}) => {
  return (
    <div className='BreadCrumb' style={} >
        <div className='container'>
                <ol>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'> {title} </a>
                    </li>
                </ol>
        </div>
    </div>
  )
}

export default Breadcrumb