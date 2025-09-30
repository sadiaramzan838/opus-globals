import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import moviesImg from "../assets/movies.jpeg";
import newsImg from "../assets/news.jpeg";
import sportsImg from "../assets/sports.jpeg";
import movieImg from "../assets/movie.jpeg";

function Hero() {
  const projects = [
    {
      title: "Vision TV",
      description:
        "Focused on promoting StarVision TV, a fictional entertainment channel offering dramas, reality shows, and celebrity content.",
      img: moviesImg,
    },
    {
      title: "NewsHub 24/7",
      description:
        "For NewsHub 24/7, a dynamic digital news channel, we provided SEO optimization, social media branding, and content marketing strategies.",
      img: newsImg,
    },
    {
      title: "SportsLive Arena",
      description:
        "For SportsLive Arena, a fictional sports TV channel, we handled social media promotions, match highlight editing, and fan engagement strategies.",
      img: sportsImg,
    },
    {
      title: "CineMax HD – Movie",
      description:
        "We developed branding and promotional materials for CineMax HD, a fictional streaming platform showcasing blockbuster movies and TV series.",
      img: movieImg,
    },
  ];

  return (
    <>
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-uppercase small fw-bold">
                <span className="text-dark">Welcome to</span>{" "}
                <span className="text-primary">OPUS GLOBALS</span>
              </p>

              <h1 className="display-4 fw-bold">
                Marketing support <br /> when you{" "}
                <span className="text-primary">need It</span>
              </h1>

              <p className="text-secondary mb-4">
                Join over <strong>200+ brands</strong> advertising on TV with
                OPUS GLOBALS. Our clients come from all stages; from TV novices
                to experienced advertisers and different industries. No matter
                the size of the budget – our technology and service put your
                goals first.
              </p>

              <div className="d-flex gap-3">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center mb-5">

            <Col md={4}>
              <p className="text-uppercase small fw-bold text-secondary mb-0">
                What We Do
              </p>
            </Col>

            <Col md={8}>
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

          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: "#fff0f5" }}>
                <Card.Body>
                  <h5 className="text-success mt-5">TV Channel Promotion</h5>
                  <p>
                    We help TV channels grow their global audience through
                    strategic marketing combining targeted ads, influencer
                    partnerships, and organic growth.Wether launching or scaling
                    ,our tailored approach drives viewership and builds a strong online presence
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: "#fff0f5" }}>
                <Card.Body>
                  <h5 className="text-primary mt-5">Digital Marketing</h5>
                  <p>
                    We manage and optimize social media campaigns across
                    Facebook, Instagram, YouTube, and Twitter with data-driven
                    strategies to grow your audience, boost a loyal community around your content.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: "#fff0f5" }}>
                <Card.Body>
                  <h5 className="text-danger mt-5">Influencer & PR Marketing</h5>
                  <p>
                    We connect TV channels with influencers, bloggers, and media
                    outlets to amplify exposure through PR and collaborations, we build credibility and attract
                    new viewers, and create buzz around your channel
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: "#fff0f5" }}>
                <Card.Body>
                  <h5 className="text-success mt-5">Video Editing & Thumbnails</h5>
                  <p>
                    High-quality video editing services ensure promos, teasers,
                    and programs are appealing and engaging for viewers.our professional vedio editing services ensures that
                    your program will engage.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: "#fff0f5" }}>
                <Card.Body>
                  <h5 className="text-warning mt-5">
                    Channel Monetization Assistance
                  </h5>
                  <p>
                    Looking to monetize your TV channel? We help you generate
                    revenue via YouTube, Facebook, sponsorships, and
                    subscriptions. High-quality video editing services ensure promos, teaser
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: "#fff0f5" }}>
                <Card.Body>
                  <h5 className="text-info mt-5">Marketing & Reporting</h5>
                  <p>
                    Boost engagement with analytics-driven strategies, video
                    editing, and performance reporting that deliver measurable
                    results. We help you generate
                    revenue via YouTube, Facebook, sponsorships, and
                    subscriptions.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Who We Serve Section */}
      <section className="py-5 text-light" style={{ backgroundColor: "black" }}>
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={4}>
              <p className="text-uppercase small fw-bold text-white">
                Who we serve
              </p>
            </Col>

            <Col md={8}>
              <h2 className="fw-bold">Powering all kind of productions</h2>
              <p className="text-white">
                Explore our innovative projects crafted with creativity and expertise.
                From concepts to competition, <br /> we bring ideas to life
              </p>
            </Col>
          </Row>

          {/* Grid Layout*/}
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col key={index} md={3}>
                <div className="text-light" style={{ backgroundColor: "black" }}>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-100 rounded-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="p-3">
                    <h5 className="fw-bold text-white">{project.title}</h5>
                    <p className="small text-light">{project.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


    </>
  );
}

export default Hero; 