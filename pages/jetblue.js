import Head from "next/head";

export default function JetBlueHub() {
  const guides = [
    {
      title: "How to Reach JetBlue Immediately?",
      url: "/blog/How-to-Reach-JetBlue-Immediately/",
      description:
        "Find JetBlue customer service options for urgent booking and travel assistance.",
    },
    {
      title: "How to Change a JetBlue Flight",
      url: "/blog/How-to-Change-a-JetBlue-Flight/",
      description:
        "Learn about JetBlue flight changes, fare differences, fees, and rebooking.",
    },
    {
      title: "How to Cancel a JetBlue Flight and Request a Refund",
      url: "/blog/How-to-Cancel-a-JetBlue-Flight/",
      description:
        "Understand JetBlue cancellation rules, refunds, and Travel Bank credit.",
    },
    {
      title: "JetBlue Delayed Flight",
      url: "/JetBlue-Delayed-Flight/",
      description:
        "Learn your options for rebooking, refunds, and support after a JetBlue delay.",
    },
    {
      title: "JetBlue Same-Day Flight Change",
      url: "/JetBlue-Same-Day-Flight-Change/",
      description:
        "Check JetBlue same-day switch, standby rules, fees, and eligibility.",
    },
    {
      title: "JetBlue Customer Service for International Flights",
      url: "/JetBlue-Customer-Service-for-International-Flights/",
      description:
        "Get help with international JetBlue bookings, changes, cancellations, and disruptions.",
    },
  ];

  return (
    <>
      <Head>
        <title>JetBlue Help Center: Customer Service, Changes & Cancellations</title>
        <meta
          name="description"
          content="Explore JetBlue help guides for customer service, flight changes, cancellations, refunds, delays, same-day travel and international bookings."
        />
        <link
          rel="canonical"
          href="https://getadvisior.vercel.app/jetblue/"
        />
      </Head>

      <main>
        <section className="py-5 bg-light border-bottom">
          <div className="container">
            <div className="article-width">
              <h1 className="fw-bold">
                JetBlue Help Center
              </h1>

              <p className="lead text-secondary">
                Find JetBlue customer service information and practical guides
                for flight changes, cancellations, refunds, delays, same-day
                travel, and international bookings.
              </p>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="article-width">
              <h2 className="fw-bold mb-4">
                JetBlue Customer Service & Booking Guides
              </h2>

              <div className="row">
                {guides.map((guide) => (
                  <div className="col-md-6 mb-4" key={guide.url}>
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
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

              <h2 className="fw-bold mt-5">
                What Can You Find Here?
              </h2>

              <p>
                This JetBlue resource hub brings together guides covering
                customer service, reservation changes, cancellations, refunds,
                delayed flights, same-day switches, and international travel.
              </p>

              <p>
                Choose the guide that matches your situation to see the
                relevant steps, rules, and support options.
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

        .card a {
          text-decoration: none;
          font-weight: 700;
        }

        .card a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}