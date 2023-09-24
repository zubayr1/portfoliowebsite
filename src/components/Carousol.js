import React, { useState } from 'react';
import react from '../assets/react.png';
import node from '../assets/node.png';
import csharp from '../assets/c#.png';
import python from '../assets/python.png';
import aws from '../assets/aws.png';
import azure from '../assets/azure.png';
import firebase from '../assets/firebase.png';
import mongodb from '../assets/mongodb.png';
import rust from '../assets/rust.png';
import solidity from '../assets/solidity.png';
import java from '../assets/java.png';

import { Image,} from 'semantic-ui-react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  './carousol.css'

function Carousol({ onImageClick }) {

    const [selectedIndex, setSelectedIndex] = useState(0);


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const handleImageClick = (index) => {
        setSelectedIndex(index);

        onImageClick(index);
      };
    
      return (
        <div>

        <div style={{marginLeft:'2%', marginRight:'2%'}}>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'2%'}}>
              <p style={{color:'#FE560C', fontSize:'24px'}}> Skills Set</p>
          </div>

        </div>
        <div style={{ marginLeft: '5%'}}>
          <Carousel responsive={responsive}>
              {imageData.map((image, index) => (
                <div style={{ padding: "1%"}}
                  key={index}
                  className={`carousel-container carousel-image ${index === selectedIndex ? 'selected' : ''}`}
                  onClick={() => handleImageClick(index + 1)}
                >
                  <Image src={image.src} size='small' />
                </div>
              ))}
            </Carousel>

        </div>
          
        </div>
      );
    }
    
    const imageData = [
      { src: react },
      { src: node },
      { src: csharp },
      { src: python },
      { src: aws },
      { src: azure },
      { src: firebase },
      { src: mongodb },
      { src: rust },
      { src: solidity },
      { src: java },
    ];
    
    export default Carousol;