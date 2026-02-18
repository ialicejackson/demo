import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Microsoft Cloud & Business Solutions Experts</title>
        <meta
          name="description"
          content="Learn about our company, our mission, and how we help businesses grow using Microsoft Cloud, Azure, Dynamics 365, and modern digital solutions."
        />
        <link
          rel="canonical"
          href="https://www.stonediscoveasdasdr.com/about"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">About Our Company</h1>
          <p className="lead mt-3">
            Empowering businesses with Microsoft Cloud and digital transformation solutions.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">Who We Are</h2>
              <p>
                We are a technology-driven company specializing in Microsoft
                Cloud solutions including Azure, Microsoft 365, Dynamics 365,
                and Power Platform. Our mission is to help organizations modernize,
                automate, and scale their operations.
              </p>
              <p>
                With deep industry knowledge and technical expertise, we deliver
                enterprise-grade cloud implementations tailored to your business goals.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Team Working"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <div className="p-4 shadow-sm bg-white rounded">
                <h3 className="fw-bold">Our Mission</h3>
                <p>
                  To empower businesses through secure, scalable, and intelligent
                  cloud technologies that drive growth and innovation.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="p-4 shadow-sm bg-white rounded">
                <h3 className="fw-bold">Our Vision</h3>
                <p>
                  To become a trusted global partner in Microsoft Cloud solutions,
                  enabling digital transformation across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">What We Offer</h2>

          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Azure Cloud</h5>
                  <p className="card-text">
                    Infrastructure, security, and scalable cloud solutions for modern enterprises.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Dynamics 365</h5>
                  <p className="card-text">
                    ERP and CRM solutions to manage finance, sales, and operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Microsoft 365</h5>
                  <p className="card-text">
                    Productivity tools for collaboration, communication, and security.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Power Platform</h5>
                  <p className="card-text">
                    Business intelligence, app development, and workflow automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold">Ready to Transform Your Business?</h2>
          <p className="mt-3">
            Contact us today to start your Microsoft Cloud journey.
          </p>
          <a href="/contact" className="btn btn-light mt-3 px-4">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
