import React ,{ useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LogoRotator.css';

const TrustedBy = () => {
   
  const logos = [
  '/images/logo1ff.png',
  '/images/logo2ff.png',
  '/images/logo3ff.png',
  '/images/logo4ff.png',
];

 const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % logos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 className="h4" style={{color: "rgba(255, 255, 255, 0.6)"}}>
              Trusted by 100+ event organizers across India
            </h2>
          </Col>
        </Row>
        {/* <Row className="justify-content-center align-items-center g-4">
          <Col xs={6} md={4} lg={2} className="text-center">
            <img src="/images/logo1ff.png" alt="Trusted company" className="img-fluid" style={{ height: '100px', width:"100px",opacity: '0.7' }} />
          </Col>
          <Col xs={6} md={4} lg={2} className="text-center">
            <img src="/images/logo2ff.png" alt="Trusted company" className="img-fluid" style={{ height: '100px',width:"100px", opacity: '0.7' }} />
          </Col>
          <Col xs={6} md={4} lg={2} className="text-center">
            <img src="/images/logo3ff.png" alt="Trusted company" className="img-fluid" style={{ height: '100px', width:"100px",opacity: '0.7' }} />
          </Col>
          <Col xs={6} md={4} lg={2} className="text-center">
            <img src="/images/logo4ff.png" alt="Trusted company" className="img-fluid" style={{ height: '100px', width:"100px",opacity: '0.7' }} />
          </Col>
        </Row> */}

      <Row className="justify-content-center align-items-center g-4">
      {logos.map((logo, index) => (
        <Col key={index} xs={6} md={4} lg={2} className="text-center">
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className={`img-fluid logo-img ${activeIndex === index ? 'rotate' : ''}`}
            style={{ height: '100px', width: '100px', opacity: 0.7 }}
          />
        </Col>
      ))}
    </Row>
      </Container>
    </section>
  );
};

export default TrustedBy;