import Head from "next/head";

export default function ExpediaHub() {
  const guides = [
    {
      title: "Expedia Customer Service: How to Get Help With an Existing Booking",
      url: "/blog/expedia-customer-service/",
      description:
        "Find Expedia customer service options for existing bookings, reservations, changes, cancellations, and other travel issues.",
    },
    {
      title: "How to Contact Expedia Customer Service",
      url: "/blog/How-to-Contact-Expedia/",
      description:
        "Learn how to contact Expedia for booking assistance by phone and through available online support options.",
    },
    {
      title: "Top Ways to Reach Expedia",
      url: "/blog/Ways-to-Reach-Expedia/",
      description:
        "Explore practical ways to reach Expedia when you need help with a reservation or upcoming trip.",
    },
    {
      title: "How to Change an Expedia Flight Booking",
      url: "/blog/How-to-Change-an-Expedia-Flight/",
      description:
        "Learn how Expedia flight changes work, including airline rules, fare differences, fees, and rebooking options.",
    },
    {
      title: "How to Cancel an Expedia Booking and Request a Refund",
      url: "/blog/how-to-cancel-Expedia-booking/",
      description:
        "Understand how to cancel an Expedia booking and check the applicable cancellation and refund conditions.",
    },
    {
      title: "Expedia Missed Flight: Rebooking and Refund Options",
      url: "/blog/expedia-missed-flight/",
      description:
        "Find out what to do after missing a flight booked through Expedia and understand possible rebooking and refund options.",
    },
    {
      title: "Expedia Reviews",
      url: "/expedia-reviews/",
      description:
        "Explore information and reviews related to Expedia bookings, customer service, and travel experiences.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Expedia Help Center: Customer Service, Changes & Cancellations
        </title>

        <meta
          name="description"
          content="Explore Expedia help guides for customer service, booking changes, cancellations, refunds, missed flights and reservation assistance."
        />

        <link
          rel="canonical"
          href="https://getadvisior.vercel.app/expedia/"
        />

        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        {/* Hero */}
        <section className="py-5 bg-light border-bottom">
          <div className="container">
            <div className="article-width">
              <h1 className="fw-bold">Expedia Help Center</h1>

              <p className="lead text-secondary mt-3">
                Find Expedia customer service information and practical guides
                for flight changes, cancellations, refunds, missed flights,
                existing reservations, and other booking issues.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-5">
          <div className="container">
            <div className="article-width">
              <h2 className="fw-bold mb-3">
                Expedia Customer Service & Booking Help
              </h2>

              <p>
                Need help with an Expedia reservation? This resource hub brings
                together our Expedia guides so you can quickly find information
                related to your specific booking issue.
              </p>

              <p>
                Choose a guide below depending on whether you need to contact
                customer service, change a flight, cancel a reservation, request
                a refund, or deal with a missed flight.
              </p>
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="pb-5">
          <div className="container">
            <div className="article-width">
              <h2 className="fw-bold mb-4">
                Expedia Help Guides
              </h2>

              <div className="row">
                {guides.map((guide) => (
                  <div
                    className="col-md-6 mb-4"
                    key={guide.url}
                  >
                    <div className="card h-100 shadow-sm">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-bold">
                          <a href={guide.url}>
                            {guide.title}
                          </a>
                        </h3>

                        <p className="mb-0">
                          {guide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="article-width">
              <h2 className="fw-bold mb-4">
                What Expedia Topics Do We Cover?
              </h2>

              <p>
                Our Expedia guides cover common questions travellers may have
                before or after making a reservation.
              </p>

              <ul>
                <li>Expedia customer service</li>
                <li>Existing booking assistance</li>
                <li>Flight changes and rebooking</li>
                <li>Booking cancellations</li>
                <li>Refund requests</li>
                <li>Missed flights</li>
                <li>Reservation assistance</li>
                <li>Expedia reviews</li>
              </ul>

              <p>
                Select the relevant guide above to find more detailed
                information about your situation.
              </p>
            </div>
          </div>
        </section>

        {/* Independent Information */}
        <section className="py-5">
          <div className="container">
            <div className="article-width">
              <h2 className="fw-bold mb-3">
                About This Expedia Resource
              </h2>

              <p>
                GetAdvisor is an independent information and directory website.
                We provide guides designed to help travellers understand common
                booking and customer service processes.
              </p>

              <p>
                Expedia policies and booking conditions can vary depending on
                the airline, hotel, fare, property, travel dates, and terms
                attached to an individual reservation. Check the terms of your
                booking and Expedia&apos;s official information when making a
                decision about a reservation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .article-width {
          max-width: 950px;
          margin: 0 auto;
        }

        .card {
          border: 1px solid #e5e5e5;
        }

        .card a {
          text-decoration: none;
          font-weight: 700;
        }

        .card a:hover {
          text-decoration: underline;
        }

        .article-width p,
        .article-width li {
          font-size: 17px;
          line-height: 1.75;
        }

        .article-width li {
          margin-bottom: 8px;
        }
      `}</style>
    </>
  );
}