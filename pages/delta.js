import Head from "next/head";

export default function DeltaHub() {
  const guides = [
    {
      title: "How to Change a Delta Airlines Flight",
      url: "/blog/how-to-change-my-delta-flight/",
      description:
        "Learn how to change a Delta flight, including rebooking options, fare differences, applicable rules, and booking changes.",
    },
    {
      title: "Delta Airlines Rebooking Guide",
      url: "/blog/delta-airlines-rebooking-guide/",
      description:
        "Find out how to rebook a Delta flight after a delay, cancellation, schedule change, or other travel disruption.",
    },
    {
      title: "Delta Flight Cancellation & Refund",
      url: "/blog/delta-flight-cancellation-refund/",
      description:
        "Understand Delta flight cancellation options, refund eligibility, credits, and what to check before cancelling a trip.",
    },
    {
      title: "Delta Airlines Name Change",
      url: "/blog/delta-airlines-name-change/",
      description:
        "Learn about correcting or changing passenger information on a Delta booking and what to do when a ticket name is incorrect.",
    },
    {
      title: "Delta Legal Name Change",
      url: "/blog/delta-legal-name-change/",
      description:
        "Find information about Delta ticket updates when a passenger has undergone a legal name change.",
    },
    {
      title: "Missed Your Delta Flight? What to Do Next",
      url: "/blog/delta-missed-flight/",
      description:
        "Learn what to do after missing a Delta flight, including rebooking, no-show concerns, missed connections, and available options.",
    },
    {
      title: "Delta Airlines Reservation Help",
      url: "/blog/delta-reservation-help/",
      description:
        "Find guidance for modifying an existing Delta reservation, including common booking and itinerary issues.",
    },
    {
      title: "Delta Airlines Same-Day Flight Change",
      url: "/blog/delta-same-day-flight-change/",
      description:
        "Understand Delta same-day flight change options when you want to travel on an earlier or later flight.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Delta Airlines Help Center: Changes, Cancellations & Rebooking
        </title>

        <meta
          name="description"
          content="Explore Delta Airlines guides for flight changes, cancellations, refunds, rebooking, missed flights, name corrections and reservation help."
        />

        <link
          rel="canonical"
          href="https://getadvisior.vercel.app/delta/"
        />

        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-5 bg-light border-bottom">
          <div className="container">
            <div className="article-width">
              <h1 className="fw-bold">Delta Airlines Help Center</h1>

              <p className="lead text-secondary mt-3">
                Find Delta Airlines guides covering flight changes,
                cancellations, refunds, rebooking, missed flights, name
                corrections, same-day changes, and existing reservations.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-5">
          <div className="container">
            <div className="article-width">
              <h2 className="fw-bold mb-3">
                Delta Airlines Booking & Travel Help
              </h2>

              <p>
                Need information about an existing Delta flight? This resource
                hub brings together our Delta Airlines guides so you can quickly
                find information related to your specific travel situation.
              </p>

              <p>
                Choose the relevant guide below for flight changes,
                cancellations, refunds, rebooking, missed flights, passenger
                name issues, or reservation assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Child Pages */}
        <section className="pb-5">
          <div className="container">
            <div className="article-width">
              <h2 className="fw-bold mb-4">
                Delta Airlines Help Guides
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
                What Delta Airlines Topics Do We Cover?
              </h2>

              <p>
                Our Delta Airlines resources cover common questions travellers
                may have before departure or when something changes with their
                trip.
              </p>

              <ul>
                <li>Delta flight changes</li>
                <li>Flight cancellations</li>
                <li>Refund options</li>
                <li>Flight rebooking</li>
                <li>Missed flights</li>
                <li>Missed connections</li>
                <li>Same-day flight changes</li>
                <li>Name changes and corrections</li>
                <li>Existing reservation help</li>
              </ul>

              <p>
                Select the guide that most closely matches your situation for
                more detailed information.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-5">
          <div className="container">
            <div className="article-width">
              <h2 className="fw-bold mb-3">
                About This Delta Airlines Resource
              </h2>

              <p>
                GetAdvisor is an independent information and directory website.
                These guides are designed to make common airline booking and
                travel processes easier to understand.
              </p>

              <p>
                Airline policies, fees, fare conditions, and available options
                can change and may depend on the individual ticket. Travellers
                should verify important information with Delta before changing
                or cancelling a reservation.
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