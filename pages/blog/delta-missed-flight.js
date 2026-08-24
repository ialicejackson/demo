import Head from "next/head";
import Script from "next/script";

export default function DeltaMissedFlight() {
  const faqs = [
    {
      question: "Will Delta rebook me if I miss my flight?",
      answer:
        "It depends on why the flight was missed, your ticket conditions, itinerary, whether you contacted Delta before departure, and the availability of alternative flights.",
    },
    {
      question: "What is the Delta missed flight phone number?",
      answer:
        "Delta lists 800-221-1212 as its U.S. General Sales & Services / Reservations number. Verify the current contact details through Delta's official website before calling.",
    },
    {
      question:
        "What happens if I do not tell Delta that I am going to miss my flight?",
      answer:
        "Failing to change or cancel before departure may affect the value of your ticket and could also impact remaining flights on the same itinerary.",
    },
    {
      question:
        "Will Delta cancel my return flight if I miss the outbound flight?",
      answer:
        "It may happen in some no-show situations. Check your booking immediately and confirm that all remaining flight segments are still active.",
    },
    {
      question:
        "What if Delta caused me to miss my connecting flight?",
      answer:
        "When a misconnection results from a qualifying Delta disruption, rebooking options may be available. Check the Fly Delta app or speak with an airport representative.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Missed Your Delta Flight? What to Do Next and How to Rebook
        </title>

        <meta
          name="description"
          content="Missed your Delta flight? Learn what to do next, how to rebook, protect your remaining itinerary, contact Delta Reservations, and check refund options."
        />

        <meta
          name="keywords"
          content="Delta missed flight, missed Delta flight, Delta rebooking, Delta flight rebooking, Delta missed connection, Delta reservations phone number"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="canonical"
          href="https://getadvisior.vercel.app/blog/delta-missed-flight/"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <main>
        {/* HERO */}
        <section className="hero-section py-5">
          <div className="container py-lg-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <a href="/" className="text-decoration-none">
                    Home
                  </a>
                </li>

                <li className="breadcrumb-item">
                  <a href="/blog" className="text-decoration-none">
                    Blog
                  </a>
                </li>

                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                >
                  Delta Missed Flight
                </li>
              </ol>
            </nav>

            <div className="row align-items-center g-5">
              <div className="col-lg-8">
                <span className="badge text-bg-danger mb-3">
                  Delta Airlines Guide
                </span>

                <h1 className="display-5 fw-bold mb-4">
                  Missed Your Delta Flight? What to Do Next and How to Rebook
                </h1>

                <p className="lead text-secondary mb-4">
                  Missed your Delta flight? Learn what to do immediately,
                  how to protect the rest of your itinerary, and what
                  rebooking options may be available.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <a href="#what-to-do" className="btn btn-danger btn-lg">
                    What to Do Now
                  </a>

                  <a
                    href="#rebook"
                    className="btn btn-outline-dark btn-lg"
                  >
                    Rebooking Steps
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="quick-card p-4">
                  <h2 className="h5 fw-bold mb-3">
                    Missed Your Flight?
                  </h2>

                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">✓ Check My Trips immediately</li>
                    <li className="mb-3">✓ Confirm remaining flights</li>
                    <li className="mb-3">✓ Look for the next available flight</li>
                    <li>✓ Contact Delta if rebooking is unavailable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              {/* SIDEBAR */}
              <aside className="col-lg-3">
                <div className="sticky-lg-top toc-card p-4">
                  <h2 className="h5 fw-bold mb-3">
                    Quick Navigation
                  </h2>

                  <nav className="nav flex-column">
                    <a className="nav-link px-0" href="#what-to-do">
                      What to do immediately
                    </a>

                    <a className="nav-link px-0" href="#phone">
                      Delta phone number
                    </a>

                    <a className="nav-link px-0" href="#what-happens">
                      What happens after a missed flight
                    </a>

                    <a className="nav-link px-0" href="#rebook">
                      How to rebook
                    </a>

                    <a className="nav-link px-0" href="#connection">
                      Missed connection
                    </a>

                    <a className="nav-link px-0" href="#refund">
                      Refund options
                    </a>

                    <a className="nav-link px-0" href="#faqs">
                      FAQs
                    </a>
                  </nav>
                </div>
              </aside>

              {/* ARTICLE */}
              <article className="col-lg-9 article-content">
                <p className="fs-5">
                  Missing a Delta flight can quickly disrupt your entire trip,
                  especially if you have connecting or return flights on the
                  same reservation. The most important thing is to act
                  immediately rather than ignore the booking or automatically
                  purchase another ticket.
                </p>

                <p>
                  If you already know that you will not make the flight, try to
                  change or cancel the reservation before departure whenever
                  possible. If the flight has already departed, check your
                  booking in My Trips or the Fly Delta app and review the status
                  of all remaining flight segments.
                </p>

                <div className="alert alert-warning border-0 rounded-4 my-4">
                  <strong>Important:</strong> A missed outbound flight can affect
                  other flights on the same reservation. Always confirm that
                  your connecting and return flights are still active.
                </div>

                <section id="what-to-do" className="content-section">
                  <h2>
                    What Should You Do Immediately After Missing a Delta Flight?
                  </h2>

                  <p>
                    Start with these three actions as soon as you realise the
                    flight has been missed.
                  </p>

                  <div className="step-card">
                    <span className="step-number">1</span>
                    <div>
                      <h3 className="h4">Check Your Reservation</h3>
                      <p className="mb-0">
                        Open My Trips or the Fly Delta app and review the
                        current status of your booking, including any
                        connections and return flights.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <span className="step-number">2</span>
                    <div>
                      <h3 className="h4">
                        Speak With an Airport Representative
                      </h3>
                      <p className="mb-0">
                        If you are still at the airport, visit a Delta service
                        desk or speak with an available representative about
                        rebooking options.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <span className="step-number">3</span>
                    <div>
                      <h3 className="h4">Contact Reservations if Needed</h3>
                      <p className="mb-0">
                        If online rebooking is unavailable or the booking is
                        complex, contact Delta Reservations and explain that
                        your original flight has been missed.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="phone" className="content-section">
                  <div className="phone-box p-4 p-md-5">
                    <span className="small fw-bold text-uppercase">
                      Delta Reservations
                    </span>

                    <h2 className="mt-2">
                      Delta Reservations Phone Number
                    </h2>

                    <p className="mb-3">
                      Delta currently lists the following U.S. General Sales
                      &amp; Services / Reservations number:
                    </p>

                    <a
                      href="tel:+18002211212"
                      className="phone-number text-decoration-none"
                    >
                      800-221-1212
                    </a>

                    <p className="mt-4 mb-0">
                      Before calling, keep your confirmation number, passenger
                      name, original flight details, ticket information, and
                      SkyMiles number available if applicable.
                    </p>
                  </div>

                  <div className="alert alert-light border mt-4">
                    <strong>Note:</strong> Verify the latest contact information
                    on Delta&apos;s official website before calling. If the
                    ticket was issued by a third-party travel agency, you may
                    need to contact the original agency for servicing.
                  </div>
                </section>

                <section id="what-happens" className="content-section">
                  <h2>What Happens If You Miss a Delta Flight?</h2>

                  <p>
                    The outcome depends on your ticket, itinerary, why the
                    flight was missed, and whether the reservation was changed
                    or cancelled before departure.
                  </p>

                  <p>
                    In some no-show situations, the remaining flights on the
                    same reservation may also be affected. This is especially
                    important when you have a round-trip or multi-city booking.
                  </p>

                  <div className="example-box p-4">
                    <h3 className="h5 fw-bold">
                      Example: Round-Trip Booking
                    </h3>

                    <p className="mb-2">
                      <strong>Outbound:</strong> New York → Atlanta
                    </p>

                    <p className="mb-3">
                      <strong>Return:</strong> Atlanta → New York
                    </p>

                    <p className="mb-0">
                      If you miss the outbound flight and travel to Atlanta by
                      another method without updating the reservation, do not
                      assume your return flight will remain confirmed. Check the
                      booking immediately.
                    </p>
                  </div>
                </section>

                <section id="rebook" className="content-section">
                  <h2>How to Rebook After Missing a Delta Flight</h2>

                  <p>
                    There is no single rebooking outcome for every passenger.
                    Your options depend on the original ticket, seat
                    availability, itinerary, and reason the flight was missed.
                  </p>

                  <h3 className="h4 mt-4">1. Check My Trips</h3>

                  <p>
                    Open your reservation and look for available options to
                    modify or rebook the itinerary. Some eligible reservations
                    can be changed online.
                  </p>

                  <h3 className="h4 mt-4">
                    2. Check the Next Available Flight
                  </h3>

                  <p>
                    Look for the next suitable Delta flight to your destination.
                    Before purchasing another ticket, confirm whether your
                    existing reservation still has rebooking options.
                  </p>

                  <h3 className="h4 mt-4">
                    3. Contact Reservations When Online Rebooking Does Not Work
                  </h3>

                  <p>
                    Some tickets and itineraries require additional assistance.
                    This can include complex international bookings, tickets
                    involving other airlines, or reservations with special
                    services.
                  </p>

                  <h3 className="h4 mt-4">
                    4. Confirm the Rest of Your Itinerary
                  </h3>

                  <p>
                    Do not stop after finding another outbound flight. Confirm
                    the status of every remaining segment, especially if you
                    have:
                  </p>

                  <ul>
                    <li>Round-trip tickets</li>
                    <li>Connecting flights</li>
                    <li>Multi-city bookings</li>
                    <li>International itineraries</li>
                  </ul>
                </section>

                <section id="connection" className="content-section">
                  <h2>
                    What If You Missed a Connection Because of Delta?
                  </h2>

                  <p>
                    A missed connection caused by a delay or disruption is
                    different from arriving late for your original flight.
                  </p>

                  <p>
                    If your first Delta flight arrives late and causes you to
                    miss a connecting flight, check the Fly Delta app first.
                    Rebooking information may already be available. If not,
                    speak with an airport representative before buying another
                    ticket.
                  </p>

                  <div className="alert alert-primary border-0 rounded-4">
                    <strong>Tip:</strong> When the missed connection is caused by
                    an airline disruption, check available rebooking assistance
                    before making separate travel arrangements.
                  </div>
                </section>

                <section id="refund" className="content-section">
                  <h2>
                    Can You Get a Refund If You Miss a Delta Flight?
                  </h2>

                  <p>
                    Simply missing a flight does not automatically mean you will
                    receive a refund.
                  </p>

                  <p>
                    Refund eligibility depends on the ticket conditions, reason
                    for the disruption, and whether the reservation was changed
                    or cancelled before departure.
                  </p>

                  <p>
                    If Delta cancels a flight or makes a qualifying significant
                    schedule change, different refund or rebooking options may
                    apply.
                  </p>
                </section>

                <section className="content-section">
                  <h2>
                    What If You Know You Are Going to Miss Your Flight?
                  </h2>

                  <p>
                    Do not wait for the scheduled departure time if you already
                    know you cannot make the flight.
                  </p>

                  <p>
                    If you are stuck in traffic, delayed at security, or
                    otherwise unable to reach the gate on time, open My Trips
                    or contact Delta while the original flight is still
                    scheduled to depart.
                  </p>

                  <div className="action-box p-4">
                    <h3 className="h5 fw-bold">
                      Before Departure
                    </h3>

                    <ul className="mb-0">
                      <li>Check whether your flight can be changed.</li>
                      <li>Review cancellation options.</li>
                      <li>Protect any remaining itinerary segments.</li>
                      <li>Contact support if self-service options do not work.</li>
                    </ul>
                  </div>
                </section>

                <section className="content-section">
                  <h2>Missed Delta Flight: Quick Answers</h2>

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered align-middle">
                      <thead className="table-dark">
                        <tr>
                          <th>Situation</th>
                          <th>What to Do</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Flight has not departed yet</td>
                          <td>
                            Change or cancel immediately, or contact Delta.
                          </td>
                        </tr>

                        <tr>
                          <td>Flight already departed</td>
                          <td>
                            Check My Trips and review rebooking options.
                          </td>
                        </tr>

                        <tr>
                          <td>Missed connection after a disruption</td>
                          <td>
                            Check automatic rebooking or speak with an agent.
                          </td>
                        </tr>

                        <tr>
                          <td>Return flight on the same booking</td>
                          <td>
                            Confirm that the remaining itinerary is still active.
                          </td>
                        </tr>

                        <tr>
                          <td>Online rebooking unavailable</td>
                          <td>Contact Reservations.</td>
                        </tr>

                        <tr>
                          <td>Ticket purchased through an agency</td>
                          <td>
                            Contact the original travel agency when required.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="faqs" className="content-section">
                  <h2>Frequently Asked Questions</h2>

                  <div
                    className="accordion mt-4"
                    id="deltaMissedFlightFaq"
                  >
                    {faqs.map((faq, index) => (
                      <div
                        className="accordion-item"
                        key={faq.question}
                      >
                        <h3
                          className="accordion-header"
                          id={`faq-heading-${index}`}
                        >
                          <button
                            className={`accordion-button ${
                              index !== 0 ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq-collapse-${index}`}
                            aria-expanded={index === 0}
                            aria-controls={`faq-collapse-${index}`}
                          >
                            {faq.question}
                          </button>
                        </h3>

                        <div
                          id={`faq-collapse-${index}`}
                          className={`accordion-collapse collapse ${
                            index === 0 ? "show" : ""
                          }`}
                          aria-labelledby={`faq-heading-${index}`}
                          data-bs-parent="#deltaMissedFlightFaq"
                        >
                          <div className="accordion-body">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="content-section">
                  <div className="final-box p-4 p-md-5">
                    <h2>Final Word</h2>

                    <p>
                      If you miss a Delta flight, do not ignore the reservation.
                      Check My Trips immediately, review your rebooking options,
                      and confirm the status of every remaining flight on your
                      itinerary.
                    </p>

                    <p className="mb-0">
                      If you know beforehand that you cannot make the flight,
                      try to change or cancel the booking before departure. This
                      can help reduce the risk of losing ticket value or having
                      other segments of your trip affected.
                    </p>
                  </div>
                </section>

                <div className="disclaimer p-4 mt-5">
                  <strong>Disclaimer:</strong> This page provides general travel
                  information and is not affiliated with or endorsed by Delta
                  Air Lines. Airline policies, fees, phone numbers, and
                  procedures may change. Verify current information through
                  Delta&apos;s official website before making travel decisions.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section py-5">
          <div className="container py-4">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <p className="text-uppercase fw-bold small mb-2">
                  Missed Your Flight?
                </p>

                <h2 className="fw-bold mb-3">
                  Check Your Booking Before Making a New Reservation
                </h2>

                <p className="lead mb-0">
                  Confirm your current itinerary, remaining flights, and
                  available rebooking options first.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end">
                <a
                  href="https://www.delta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light btn-lg px-4"
                >
                  Visit Delta
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #ffffff;
          color: #222222;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.7;
        }

        .hero-section {
          background:
            radial-gradient(
              circle at top right,
              rgba(220, 53, 69, 0.12),
              transparent 35%
            ),
            linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
          border-bottom: 1px solid #e9ecef;
        }

        .hero-section h1 {
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .quick-card,
        .toc-card,
        .example-box,
        .action-box {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
        }

        .toc-card {
          top: 25px;
        }

        .toc-card .nav-link {
          color: #333333;
          padding-top: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eeeeee;
        }

        .toc-card .nav-link:last-child {
          border-bottom: 0;
        }

        .toc-card .nav-link:hover {
          color: #dc3545;
        }

        .article-content {
          max-width: 900px;
        }

        .article-content p,
        .article-content li {
          font-size: 17px;
        }

        .content-section {
          padding-top: 38px;
          margin-top: 18px;
          scroll-margin-top: 20px;
        }

        .content-section h2 {
          font-size: 32px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 20px;
        }

        .content-section h3 {
          font-weight: 700;
        }

        .step-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          margin-top: 20px;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          background: #ffffff;
        }

        .step-number {
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #dc3545;
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
        }

        .phone-box {
          border-radius: 18px;
          color: #ffffff;
          background: linear-gradient(135deg, #b00020, #dc3545);
        }

        .phone-number {
          display: inline-block;
          color: #ffffff;
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .phone-number:hover {
          color: #ffffff;
          opacity: 0.9;
        }

        .table {
          overflow: hidden;
          border-radius: 12px;
        }

        .accordion-item {
          margin-bottom: 12px;
          border: 1px solid #e5e7eb !important;
          border-radius: 12px !important;
          overflow: hidden;
        }

        .accordion-button {
          font-size: 17px;
          font-weight: 700;
        }

        .accordion-button:not(.collapsed) {
          color: #842029;
          background: #f8d7da;
          box-shadow: none;
        }

        .accordion-button:focus {
          box-shadow: none;
        }

        .final-box {
          background: #f8f9fa;
          border-left: 5px solid #dc3545;
          border-radius: 14px;
        }

        .disclaimer {
          background: #fff3cd;
          border: 1px solid #ffecb5;
          border-radius: 12px;
          font-size: 15px;
        }

        .cta-section {
          background: #b00020;
          color: #ffffff;
        }

        @media (max-width: 991.98px) {
          .toc-card {
            position: static !important;
          }
        }

        @media (max-width: 767.98px) {
          .hero-section h1 {
            font-size: 36px;
          }

          .content-section h2 {
            font-size: 27px;
          }

          .step-card {
            flex-direction: column;
          }
        }

        @media (max-width: 575.98px) {
          .hero-section h1 {
            font-size: 32px;
          }

          .article-content p,
          .article-content li {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}