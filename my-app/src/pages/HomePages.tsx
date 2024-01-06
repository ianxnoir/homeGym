import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Col, Container, Row } from 'reactstrap';
import { push } from 'connected-react-router';

import RegPT1 from './Pictures/step1forpt.png'
import RegPT2 from './Pictures/step2forpt.png'
import RegPT3 from './Pictures/step3forpt.png'
import RegPT4 from './Pictures/step4forpt.png'
import RegStudent1 from './Pictures/step1forstu.png'
import RegStudent2 from './Pictures/step2forstu.png'
import RegStudent3 from './Pictures/step3forstu.png'
import RegStudent4 from './Pictures/step4forstu.png'


import bodyBuilding from './Pictures/bodybuild.png'
import boxing from './Pictures/boxing.png'
import cardio from './Pictures/cardio.png'
import coreFusion from './Pictures/corefusion.png'
import keepfit from './Pictures/keepfit.png'
import functional from './Pictures/functional.png'
import yoga from './Pictures/yoga.png'
import stretching from './Pictures/stretching.png'
import ca1 from './Pictures/home1.png'
import ca2 from './Pictures/home2.png'
import ca3 from './Pictures/home3.png'

import { useDispatch} from "react-redux"


export function HomePage() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any) => {

    setIndex(selectedIndex);
  }
  const dispatch = useDispatch();

  const directionButtons = (direction: {} | null | undefined) => {
    return (
      <span
        aria-hidden="true"
        className={direction === "Next" ? "button-next" : "button-prev"}>
        {direction}
      </span>
    );
  };


  return ( 
    

    <Container fluid="md" >

      <Row>

        <Col>
          <div className="opacity-low">
            <Carousel className="board w-100"
              nextLabel={"Next"}
              prevLabel={"Previous"}
              controls={true} activeIndex={index} onSelect={handleSelect} nextIcon={directionButtons("Next")}
              prevIcon={directionButtons("Previous")}>
              <Carousel.Item interval={10000}>
                <img
                  className="d-block w-100"
                  src={ca2}
                  alt="First slide"
                />
                 <Carousel.Caption>
                  <h3 className="carTitle">Welcome to Our HomeGym Platform</h3>
                  <p className="carTitle2">Get fit in a quick session any time during the day.</p>
                </Carousel.Caption>
                
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <img
                  className="d-block w-100"
                  src={ca3}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 className="carTitle">Welcome to Our HomeGym Platform</h3>
                  <p className="carTitle2">Get fit in a quick session any time during the day.</p>
                
                </Carousel.Caption>
            
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <img
                  className="d-block w-100"
                  src={ca1}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 className="carTitle">Welcome to Our HomeGym Platform</h3>
                  <p className="carTitle2">Get fit in a quick session any time during the day.</p>
                </Carousel.Caption>
        
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>



      </Row>

      <Row className="justify-content-md-center">
        <Col xs lg="2">
          
        </Col>
        <Col md="auto"> <div className="highlight fronttitle"> Categories </div></Col>
        <Col xs lg="2">
          
        </Col>




      </Row>


     <div className="rowCol">
      <Row>
        <Col sm className="rowPicture">
                          <a className="catPic" href="/select-pt/1">
                          <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <div className="picPad"><img width="100%" alt="Stretching"  src={stretching} /></div>
                                    </div>
                                    <div className="flip-card-back">
                                       <div className="highlight"> Stretching</div> 
                                    </div>
                                </div>
                            </div>
  
            
            </a>
          <a className="catPic"href="/select-pt/2">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <div className="picPad">       <img width="100%" alt="Yoga"  src={yoga} /></div>
                                    </div>
                                    <div className="flip-card-back">
                                       <div className="highlight"> Yoga</div> 
                                    </div>
                                </div>
                            </div>
            
     
            
            </a>
          <a  className="catPic"href="/select-pt/3">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <div className="picPad">      <img width="100%" alt="Boxing" src={boxing} />  </div>
                                    </div>
                                    <div className="flip-card-back">
                                       <div className="highlight"> Boxing</div> 
                                    </div>
                                </div>
                            </div>
            
          
            
            </a>
          <a className="catPic" href="/select-pt/4">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <div className="picPad">   <img width="100%"  alt="Core Fusion" src={coreFusion} /> </div>
                                    </div>
                                    <div className="flip-card-back">
                                       <div className="highlight"> Core Fusion</div> 
                                    </div>
                                </div>
                            </div>
            
            
            
            </a>
        </Col>

      </Row>
      <Row>
        <Col sm className="rowPicture">
                           <a className="catPic"href="/select-pt/5">
                             <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <div className="picPad">   
                                <img width="100%" alt="Functional Training"  src={functional} />
                                   </div>
                                    </div>
                                    <div className="flip-card-back">
                                       <div className="highlight"> Functional Training</div> 
                                    </div>
                                </div>
                            </div>
           
            
                          </a>
          <a className="catPic" href="/select-pt/6">
                              <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <div className="picPad">   
                                 
                                   <img width="100%" alt="KeepFit" src={keepfit} />
                                   </div>
                                    </div>
                                    <div className="flip-card-back">
                                       <div className="highlight"> Keep Fit</div> 
                                    </div>
                                </div>
                            </div>
           
           
            
            </a>
          <a className="catPic" href="/select-pt/7">
                             <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <div className="picPad">   
                                 
                                    <img width="100%" alt="BodyBuilding" src={bodyBuilding} />
                                   </div>
                                    </div>
                                    <div className="flip-card-back">
                                       <div className="highlight"> BodyBuilding</div> 
                                    </div>
                                </div>
                            </div>
           
           
           
            
            </a>
          <a className="catPic"href="/select-pt/8">

                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <div className="picPad">   
                                 
                                    <img width="100%" alt="Cardio" src={cardio} />
                                   </div>
                                    </div>
                                    <div className="flip-card-back">
                                       <div className="highlight"> Cardio</div> 
                                    </div>
                                </div>
                            </div>
           
            
            
            </a>
        </Col>

      </Row>
      </div>
     <Row>

       <Col>
     <div className="highlight fronttitle"> Student Register 
     </div>
     </Col>

     </Row>

      <Row>
     
      <div className="displayFlexC white">
        <Col xs={3}>
        <img  width="100%"  alt="Register process PT1"  src={RegStudent1}/>
        </Col>  
        <Col xs={3}>
        <img width="100%" alt="Register process PT2"  src={RegStudent3}/>
        </Col>    
        <Col xs={3}>
        <img width="100%"  alt="Register process PT3"  src={RegStudent2}/>
        </Col>    
        <Col xs={3}>
        <img width="100%"  alt="Register process PT4"  src={RegStudent4}/>
        </Col>    
        </div>
          
      
      
      </Row>
      <Row>
      <div className="displayFlexC paddingContent">
       
        <Col sm>1. Register as a student member of Fever</Col>
        <Col sm>2. Find your PT from the List </Col>
        <Col sm>3. Select the Date & Time of a course to attend</Col>
        <Col sm >4. Have a great HomeGym experinece!</Col>

      </div>


      </Row>
      <Row>
        <Col>  
        <div className="displayFlexC paddingBtn">
        <div className="registerPTBtn"  onClick={(event) => 
                  {
                    event?.stopPropagation()
                  dispatch(push('/register/student'))
                  }}>
                    
                   Register Now
                  
                  </div>
                  </div>
                  
        </Col>

      </Row>

      <Row>
        <Col > 
        <div className="highlight fronttitle"> Personal Trainer Register 
        </div>
        </Col>
      </Row>

      <Row>

        <div className="displayFlexC white">
        <Col xs={3}>
        <img  width="100%" alt="Register process PT1"  src={RegPT1}/>
        </Col>  
        <Col xs={3}>
        <img width="100%" alt="Register process PT2"  src={RegPT2}/>
        </Col>    
        <Col xs={3}>
        <img width="100%"  alt="Register process PT3"  src={RegPT3}/>
        </Col>    
        <Col xs={3}>
        <img width="100%"  alt="Register process PT4"  src={RegPT4}/>
        </Col>    
        </div>


  

      </Row>

      <Row>
      <div className="displayFlexC paddingContent">

        <Col xs={3} >1. Register as a Personal Trainer member of Fever</Col>
        <Col xs={3}>2. Upload your personal pic and write down the qualification to attract students </Col  >
        <Col xs={3}>3. Select the Date & Time of a course to start a Live </Col>
        <Col xs={3}>4. Get more students to enroll your courses!</Col>

        </div>
        
      </Row>
      <Row>

          <Col>
              <div className="displayFlexC paddingBtn">
             <div className="registerPTBtn" onClick={(event) => 
                  {
                    event?.stopPropagation()
                  dispatch(push('/register/pt'))
                  }}>
          
          Register now
          </div>
          </div>
          </Col>

      </Row>




    </Container>

 



  );
}
