import React from 'react';
import './home.css'

export function Home() {
  var [url, setUrl] = React.useState('')
  React.useEffect(() => {
    fetch('https://bpit-att.herokuapp.com/api/version/check_updates?platform=android')
      .then(res => res.json())
      .then(data => {
        setUrl(data.url)
      })
  }, [])

  return (
    <div className='home container-fluid' style={{
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), url(${process.env.PUBLIC_URL + '/images/college.jpg'})`
    }}>
      <header className='row w-100 navbar'>
        <div className="col-12 text-white">
          <div className="float-end fw-3 p-3">
            <i className="fas fa-bars"></i>
          </div>
          <div className="float-end fw-3 p-3">
            Facebook
          </div>
          <div className="float-end fw-3 p-3">
            Instagram
          </div>
          <div className="float-end fw-3 p-3">
            About Us
          </div>
          <div className="float-start fw-3 p-3">
            <img src={process.env.PUBLIC_URL + '/images/topleftbar.svg'} alt="toplefticon" />
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column justify-content-center align-items-center text-white">
            <div className='my-2 fw-bold heading-name'>Bhagwan Parshuram Institute of Technology</div>
            <div className='my-2 coming-soon'>C O M I N G &nbsp; S O O N</div>
            <div className='my-2 heading-desc'>We are working on our website and will be live soon till then visit</div>
            <div className='my-5'>
              <a className='button_outline' href='http://www.bpitindia.com'>bpitindia.com</a> &nbsp;
              <a className='button_outline' href={url}>Download attendance APK</a>
            </div>
            <div className="my-3 progress_bar_container">
              <div className="progress_bar"></div>
            </div>
          </div>
        </div>
      </div>

      <footer className='text-white position-fixed fixed-bottom p-3'>
        &copy; BPIT 2022
      </footer>
    </div>
  )
}