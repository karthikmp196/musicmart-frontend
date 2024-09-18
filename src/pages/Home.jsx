import React from 'react'
import { Carousel } from 'react-bootstrap'

function Home() {
  return (
    <div>
       <Carousel fade>
      <Carousel.Item>
       <img style={{width:'100%',height:'70vh'}}  src="https://wallpapercosmos.com/w/full/d/d/2/1169610-3840x2160-desktop-4k-musical-instruments-wallpaper-image.jpg"  alt="" />
        <Carousel.Caption>
        <h1 style={{color:'white'}}>Find your voice play your heart</h1> 
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100%',height:'70vh'}} src="https://png.pngtree.com/background/20231117/original/pngtree-3d-render-of-geometric-shapes-background-with-blue-music-instruments-picture-image_6297466.jpg" alt="" />
        <Carousel.Caption>
        <h1 style={{color:'white'}}>Shop now and start your musical journey</h1> 
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%',height:'70vh'}} src="https://wallpapers.com/images/hd/beautiful-music-vintage-piano-a4g1wui6v9j2ybz3.jpg" alt="" />

        <Carousel.Caption>
          <h1 style={{color:'white'}}>Grab yours now!!!</h1> 
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home
