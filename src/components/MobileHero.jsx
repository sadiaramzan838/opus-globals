import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import moviesImg from "../assets/movies.jpeg";
import newsImg from "../assets/news.jpeg";
import sportsImg from "../assets/sports.jpeg";
import movieImg from "../assets/movie.jpeg";

function HeroResponsive() {
  const projects = [
    { title: "Vision TV", description: "Focused on promoting StarVision TV, a fictional entertainment channel offering dramas, reality shows, and celebrity content.", img: moviesImg },
    { title: "NewsHub 24/7", description: "For NewsHub 24/7, a dynamic digital news channel, we provided SEO optimization, social media branding, and content marketing strategies.", img: newsImg },
    { title: "SportsLive Arena", description: "For SportsLive Arena, a fictional sports TV channel, we handled social media promotions, match highlight editing, and fan engagement strategies.", img: sportsImg },
    { title: "CineMax HD – Movie", description: "We developed branding and promotional materials for CineMax HD, a fictional streaming platform showcasing blockbuster movies and TV series.", img: movieImg },
  ];

  const services = [
    { title: "TV Channel Promotion", description: " We help TV channels grow their global audience throughstrategic marketing combining targeted ads, influencerpartnerships, and organic growth.Wether launching or scaling ,our tailored approach drives viewership and builds a strong online presence", color: "success" },
    { title: "Digital Marketing", description: "We manage and optimize social media campaigns across Facebook, Instagram, YouTube, and Twitter with data-driven strategies to grow your audience, boost a loyal community around your content.", color: "primary" },
    { title: "Influencer & PR Marketing", description: "We connect TV channels with influencers, bloggers, and media outlets to amplify exposure through PR and collaborations, we build credibility and attract new viewers, and create buzz around your channel.", color: "danger" },
    { title: "Video Editing & Thumbnails", description: "High-quality video editing services ensure promos, teasers, and programs are appealing and engaging for viewers. Our professional video editing services ensure that your program will engage.", color: "success" },
    { title: "Channel Monetization Assistance", description: "Looking to monetize your TV channel? We help you generate revenue via YouTube, Facebook, sponsorships, and subscriptions.", color: "warning" },
    { title: "Marketing & Reporting", description: "Boost engagement with analytics-driven strategies, video editing, and performance reporting that deliver measurable results. We help you generate revenue via YouTube, Facebook, sponsorships, and subscriptions.", color: "info" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-4 bg-light">
        <Container>
          <Row>
            <Col xs={12}>
              <p className="text-uppercase small fw-bold">
                <span className="text-dark">Welcome to</span>{" "}
                <span className="text-primary">OPUS GLOBALS</span>
              </p>
              <h2 className="fw-bold mb-3">
                Marketing support <br /> when you <span className="text-primary">need it</span>
              </h2>
              <p className="text-secondary mb-3">
                Join over 200+ brands advertising on TV with OPUS GLOBALS. Our clients come from all stages; from TV novices to experienced advertisers and different industries. No matter the size of the budget – our technology and service put your goals first.
              </p>
              <Button variant="primary" className="w-100 rounded-pill mb-4">Get Started</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-4">
        <Container>
          <Row className="mb-3">
            <Col xs={12}>
              <h2 className="fw-bold">
                Driving Growth Through{" "}
                <span className="text-primary">Our Services</span>
              </h2>
              <p className="text-muted">
                Elevate your TV channel with impactful marketing and strategic
                promotions. Expand your global reach, boost viewer engagement,
                and grow your brand like never before.
              </p>
            </Col>
          </Row>
          <Row className="g-3">
            {services.map((service, index) => (
              <Col xs={12} key={index}>
                <Card className="shadow-sm border-0" style={{ backgroundColor: "#fff0f5" }}>
                  <Card.Body>
                    <h6 className={`text-${service.color} mt-2 fw-bold`}>{service.title}</h6>
                    <p className="small">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Who We Serve Section */}
      <section className="py-4 text-light" style={{ backgroundColor: "black" }}>
        <Container>
          <Row className="mb-3">
            <Col xs={12}>
              <p className="text-uppercase small fw-bold text-white">Who we serve</p>
              <h5 className="fw-bold text-white">Powering all kind of productions</h5>
              <p className="small text-white">
                Explore our innovative projects crafted with creativity and expertise. From concepts to competition, we bring ideas to life
              </p>
            </Col>
          </Row>
          <Row className="g-3">
            {projects.map((project, index) => (
              <Col xs={12} key={index}>
                <Card className="border-0 shadow-sm text-light" style={{ backgroundColor: "black" }}>
                  <Card.Img variant="top" src={project.img} style={{ height: "200px", objectFit: "cover" }} />
                  <Card.Body>
                    <h6 className="fw-bold text-white ">{project.title}</h6>
                    <p className="small text-white">{project.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HeroResponsive;
