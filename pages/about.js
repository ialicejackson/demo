import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About GetAdvisor | Travel & Service Directory</title>

        <meta
          name="description"
          content="Learn about GetAdvisor, an independent directory helping users find travel companies, service providers, contact details, guides, and useful information."
        />

        <link
          rel="canonical"
          href="https://getadvisor.vercel.app/about"
        />

        <meta name="robots" content="index, follow" />
      </Head>

      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">About GetAdvisor</h1>

          <p className="lead mt-3">
            A practical directory for finding travel companies, service providers,
            contact information, reviews, and helpful guides in one place.
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
                GetAdvisor is an independent online directory created to help
                users find useful information about travel companies, airlines,
                booking platforms, cruise providers, and other service
                businesses.
              </p>

              <p>
                Our goal is to make it easier to find important details such as
                customer service information, phone numbers, company details,
                booking guidance, cancellation information, reviews, and other
                practical resources.
              </p>

              <p>
                Instead of searching across multiple websites, users can browse
                GetAdvisor to find organised information about different
                companies and services in one place.
              </p>
            </div>

            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
                alt="Travel and service directory"
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
              <div className="p-4 shadow-sm bg-white rounded h-100">
                <h3 className="fw-bold">Our Mission</h3>

                <p>
                  Our mission is to make useful business and travel information
                  easier to find, understand, and compare.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="p-4 shadow-sm bg-white rounded h-100">
                <h3 className="fw-bold">Our Vision</h3>

                <p>
                  Our vision is to build a useful directory where visitors can
                  quickly find reliable information about companies, services,
                  customer support options, and common travel questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">What You Can Find on GetAdvisor</h2>

          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Airlines</h5>

                  <p className="card-text">
                    Airline customer service information, reservation help,
                    flight changes, cancellations, refunds, and travel guides.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Travel Companies</h5>

                  <p className="card-text">
                    Information about online travel agencies, booking platforms,
                    cruise companies, and other travel-related businesses.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Contact Information</h5>

                  <p className="card-text">
                    Phone numbers, customer service channels, company addresses,
                    official websites, and regional contact details.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Reviews & Guides</h5>

                  <p className="card-text">
                    Helpful guides, user reviews, booking information, refund
                    guidance, and practical answers to common questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How GetAdvisor Helps */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="fw-bold text-center mb-4">
                How GetAdvisor Helps
              </h2>

              <p>
                GetAdvisor organises information around the questions users
                commonly search before or after making a booking.
              </p>

              <p>
                For example, visitors may use GetAdvisor to find an airline
                customer service number, understand how to change a flight,
                learn about cancellation or refund options, locate a company
                office, or compare available support channels.
              </p>

              <p>
                We aim to present this information in a simple, direct format so
                visitors can quickly understand what their next step should be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Independent Directory */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="fw-bold text-center mb-4">
                An Independent Directory
              </h2>

              <p>
                GetAdvisor is an independent information and directory website.
                Unless specifically stated otherwise, we are not affiliated
                with, endorsed by, or officially connected to the airlines,
                travel agencies, cruise companies, or other businesses listed
                on the website.
              </p>

              <p>
                Company names and trademarks belong to their respective owners.
                Users should always verify important booking, pricing, policy,
                and contact information directly with the relevant company
                before making a travel decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold">Explore GetAdvisor</h2>

          <p className="mt-3">
            Browse our travel guides, company listings, customer service
            information, and helpful resources.
          </p>

          <a href="/" className="btn btn-light mt-3 px-4">
            Explore Directory
          </a>
        </div>
      </section>
    </>
  );
}