import Head from "next/head";
import Script from "next/script";

export default function DeltaFlightChange() {
  const faqs = [
    {
      question: "What is the Delta Airlines flight change phone number?",
      answer:
        "Delta lists 800-221-1212 for U.S. new and existing reservation assistance. Always verify current contact information through Delta's official website.",
    },
    {
      question: "Can I change my Delta flight online?",
      answer:
        "Many eligible reservations can be changed through My Trips. Open your trip, select Change or Add Flights, choose a replacement flight, review any additional amount due, and confirm the change.",
    },
    {
      question: "Does Delta charge a flight change fee?",
      answer:
        "It depends on your fare, route, Travel Experience, and ticket conditions. You may also need to pay the difference if your replacement flight costs more.",
    },
    {
      question: "Can I change my Delta flight on the same day?",
      answer:
        "Eligible travellers may have same-day confirmed or standby options within 24 hours of the original departure, subject to availability and applicable fare rules.",
    },
    {
      question: "What if I cannot change my Delta ticket online?",
      answer:
        "Some reservations require assistance from Delta Reservations. Contact Delta if the Change or Add Flights option is unavailable or your booking has special conditions.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          How to Change a Delta Airlines Flight: Fees, Rules & Rebooking Guide
        </title>

        <meta
          name="description"
          content="Need to change a Delta flight? Learn how to modify your reservation, check fees and fare differences, use same-day changes, and rebook your ticket."
        />

        <meta
          name="keywords"
          content="Delta Airlines flight change, change Delta flight, Delta flight change fee, Delta rebooking, Delta reservations, change Delta ticket"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="canonical"
          href="https://getadvisior.vercel.app/blog/how-to-change-my-delta-flight/"
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

                <li className="breadcrumb-item active" aria-current="page">
                  Delta Flight Change
                </li>
              </ol>
            </nav>

            <div className="row align-items-center g-5">
              <div className="col-lg-8">
                <span className="badge text-bg-danger mb-3">
                  Delta Airlines Guide
                </span>

                <h1 className="display-5 fw-bold mb-4">
                  How to Change a Delta Airlines Flight: Fees, Rules &
                  Rebooking Guide
                </h1>

                <p className="lead text-secondary mb-4">
                  Need to change your Delta flight? Learn how to modify an
                  existing reservation, check fare differences, understand
                  possible fees and find available rebooking options.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <a href="#how-to-change" className="btn btn-danger btn-lg">
                    Change Flight Steps
                  </a>

                  <a
                    href="#fees"
                    className="btn btn-outline-dark btn-lg"
                  >
                    Check Fees
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="quick-card p-4">
                  <h2 className="h5 fw-bold mb-3">
                    Before Changing Your Flight
                  </h2>

                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">✓ Keep your confirmation number ready</li>
                    <li className="mb-3">✓ Check your ticket conditions</li>
                    <li className="mb-3">✓ Compare replacement flights</li>
                    <li>✓ Review the total price before confirming</li>
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
                    <a className="nav-link px-0" href="#how-to-change">
                      How to change a flight
                    </a>

                    <a className="nav-link px-0" href="#phone">
                      Reservations number
                    </a>

                    <a className="nav-link px-0" href="#fees">
                      Change fees
                    </a>

                    <a className="nav-link px-0" href="#same-day">
                      Same-day changes
                    </a>

                    <a className="nav-link px-0" href="#call">
                      When to call
                    </a>

                    <a className="nav-link px-0" href="#delta-change">
                      Delta changed flight
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
                  Need to change the date, time, or flight on an existing Delta
                  reservation? Many eligible bookings can be modified through
                  My Trips on Delta.com or the Fly Delta app.
                </p>

                <p>
                  When an eligible ticket is changed, the value of the original
                  ticket is generally applied toward the replacement flight.
                  You may need to pay a fare difference and any applicable
                  change fee.
                </p>

                <div className="alert alert-warning border-0 rounded-4 my-4">
                  <strong>Before changing:</strong> Review the total additional
                  amount shown before confirming the new itinerary. Flight
                  change rules vary by fare, route and ticket conditions.
                </div>

                {/* HOW TO CHANGE */}
                <section id="how-to-change" className="content-section">
                  <h2>How Do I Change My Delta Flight?</h2>

                  <div className="step-card">
                    <span className="step-number">1</span>
                    <div>
                      <h3 className="h4">Open My Trips</h3>
                      <p className="mb-0">
                        Visit Delta.com or open the Fly Delta app and retrieve
                        your existing reservation.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <span className="step-number">2</span>
                    <div>
                      <h3 className="h4">Open Trip Details</h3>
                      <p className="mb-0">
                        Select the reservation that contains the flight you
                        want to modify.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <span className="step-number">3</span>
                    <div>
                      <h3 className="h4">Select Change or Add Flights</h3>
                      <p className="mb-0">
                        Choose the flight you want to modify and start searching
                        for another available option.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <span className="step-number">4</span>
                    <div>
                      <h3 className="h4">Choose Your New Flight</h3>
                      <p className="mb-0">
                        Compare available dates, departure times, cabin options
                        and prices.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <span className="step-number">5</span>
                    <div>
                      <h3 className="h4">Review and Confirm</h3>
                      <p className="mb-0">
                        Review the fare difference, applicable fees and updated
                        itinerary before completing the change.
                      </p>
                    </div>
                  </div>
                </section>

                {/* PHONE */}
                <section id="phone" className="content-section">
                  <div className="phone-box p-4 p-md-5">
                    <span className="small fw-bold text-uppercase">
                      Existing Reservation Help
                    </span>

                    <h2 className="mt-2">
                      Delta Reservations Phone Number
                    </h2>

                    <p className="mb-3">
                      Delta currently lists the following number for U.S.
                      reservation assistance:
                    </p>

                    <a
                      href="tel:+18002211212"
                      className="phone-number text-decoration-none"
                    >
                      800-221-1212
                    </a>

                    <p className="mt-4 mb-0">
                      Have your confirmation number, passenger name, current
                      flight information and preferred new travel date ready
                      before calling.
                    </p>
                  </div>

                  <div className="alert alert-light border mt-4">
                    <strong>Important:</strong> This is Delta Air Lines&apos;
                    official U.S. Reservations number. Verify current regional
                    contact information through Delta&apos;s official website
                    when calling from outside the United States.
                  </div>
                </section>

                {/* FEES */}
                <section id="fees" className="content-section">
                  <h2>How Much Does It Cost to Change a Delta Flight?</h2>

                  <p>
                    There is no single fee that applies to every Delta ticket.
                    Your final cost depends on several factors.
                  </p>

                  <div className="row g-3 mt-2">
                    {[
                      "Fare or Travel Experience",
                      "Origin and destination",
                      "Replacement flight price",
                      "Ticket restrictions",
                      "Same-day or advance change",
                      "Applicable change fees",
                    ].map((item) => (
                      <div className="col-md-6" key={item}>
                        <div className="fee-card p-3">
                          ✓ {item}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="h4 mt-5">
                    What If the New Flight Costs More?
                  </h3>

                  <p>
                    You will generally need to pay the difference between the
                    value of your existing ticket and the replacement flight,
                    along with any applicable change fee.
                  </p>

                  <div className="example-box p-4">
                    <p className="mb-2">
                      <strong>Original flight:</strong> $350
                    </p>

                    <p className="mb-2">
                      <strong>Replacement flight:</strong> $425
                    </p>

                    <p className="mb-0">
                      <strong>Potential fare difference:</strong> $75, plus any
                      applicable ticket fee.
                    </p>
                  </div>
                </section>

                {/* SAME DAY */}
                <section id="same-day" className="content-section">
                  <h2>Can I Change a Delta Flight on the Same Day?</h2>

                  <p>
                    Eligible travellers may have same-day flight change options
                    when requesting another flight on the same calendar day as
                    the original departure.
                  </p>

                  <p>
                    Same-day changes are generally requested within 24 hours of
                    the originally scheduled departure and remain subject to
                    flight availability and applicable eligibility rules.
                  </p>

                  <div className="row g-4 mt-2">
                    <div className="col-md-6">
                      <div className="info-card h-100 p-4">
                        <h3 className="h4">
                          Same-Day Confirmed
                        </h3>

                        <p className="mb-0">
                          Eligible passengers may be able to confirm a seat on
                          another qualifying flight on the same travel day.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="info-card h-100 p-4">
                        <h3 className="h4">
                          Same-Day Standby
                        </h3>

                        <p className="mb-0">
                          Some passengers may be eligible to stand by for
                          another flight when a confirmed same-day seat is not
                          available.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* WHEN CALL */}
                <section id="call" className="content-section">
                  <h2>When Should You Contact Delta Reservations?</h2>

                  <p>
                    Not every reservation can be modified online. Consider
                    contacting Reservations when:
                  </p>

                  <ul className="rule-list">
                    <li>
                      Change or Add Flights does not appear in My Trips.
                    </li>
                    <li>
                      Your itinerary includes another airline.
                    </li>
                    <li>
                      Your reservation includes special services.
                    </li>
                    <li>
                      Your ticket has upgrade certificates or certain mileage
                      upgrades.
                    </li>
                    <li>
                      You are travelling with an infant in arms.
                    </li>
                    <li>
                      You receive an error while attempting the change.
                    </li>
                  </ul>
                </section>

                {/* DELTA CHANGED FLIGHT */}
                <section id="delta-change" className="content-section">
                  <h2>What If Delta Changes or Cancels Your Flight?</h2>

                  <p>
                    A flight change initiated by Delta is different from a
                    voluntary change requested by the passenger.
                  </p>

                  <p>
                    If Delta cancels your flight or you experience a qualifying
                    significant delay, the airline may automatically rebook you
                    on another available flight.
                  </p>

                  <div className="alert alert-primary border-0 rounded-4">
                    <strong>Tip:</strong> If Delta changed your itinerary,
                    review the rebooking or refund options associated with the
                    disruption before purchasing another flight yourself.
                  </div>
                </section>

                {/* BASIC */}
                <section className="content-section">
                  <h2>Can You Change a Delta Basic Fare?</h2>

                  <p>
                    Basic fares generally come with more restrictions than
                    higher fare options. Eligibility and fees can vary by
                    Travel Experience, route, market and ticket purchase date.
                  </p>

                  <p>
                    Instead of assuming that your Basic ticket can or cannot be
                    changed, open the booking in My Trips and review the
                    conditions displayed for your specific reservation.
                  </p>
                </section>

                {/* BEFORE DEPARTURE */}
                <section className="content-section">
                  <h2>
                    What If You Know You Cannot Take Your Scheduled Flight?
                  </h2>

                  <p>
                    Do not simply allow the flight to depart without taking
                    action.
                  </p>

                  <p>
                    If your plans change, modify or cancel the booking before
                    departure whenever possible. Becoming a no-show can affect
                    both eligible ticket value and other segments of the
                    itinerary.
                  </p>
                </section>

                {/* QUICK TABLE */}
                <section className="content-section">
                  <h2>Delta Flight Change: Quick Guide</h2>

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
                          <td>Need another travel date</td>
                          <td>
                            Open My Trips and choose Change or Add Flights.
                          </td>
                        </tr>

                        <tr>
                          <td>Need another departure time</td>
                          <td>
                            Search available replacement flights.
                          </td>
                        </tr>

                        <tr>
                          <td>New flight costs more</td>
                          <td>
                            Review the fare difference and applicable fees.
                          </td>
                        </tr>

                        <tr>
                          <td>Travelling within 24 hours</td>
                          <td>
                            Check same-day change eligibility.
                          </td>
                        </tr>

                        <tr>
                          <td>Cannot modify booking online</td>
                          <td>
                            Contact Delta Reservations.
                          </td>
                        </tr>

                        <tr>
                          <td>Delta cancelled the flight</td>
                          <td>
                            Review automatic rebooking options first.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faqs" className="content-section">
                  <h2>Frequently Asked Questions</h2>

                  <div className="accordion mt-4" id="deltaFlightChangeFaq">
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
                          data-bs-parent="#deltaFlightChangeFaq"
                        >
                          <div className="accordion-body">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FINAL */}
                <section className="content-section">
                  <div className="final-box p-4 p-md-5">
                    <h2>Final Word</h2>

                    <p>
                      If you need to change a Delta flight, check My Trips
                      first. Compare the available replacement flights and
                      review any fare difference or applicable fee before
                      confirming.
                    </p>

                    <p className="mb-0">
                      If the reservation cannot be modified online, contact
                      Delta Reservations. If you already know you will not take
                      your scheduled flight, make the change before departure
                      rather than becoming a no-show.
                    </p>
                  </div>
                </section>

                <div className="disclaimer p-4 mt-5">
                  <strong>Disclaimer:</strong> This website provides general
                  travel information and is not affiliated with or endorsed by
                  Delta Air Lines. Airline policies, fees and phone numbers may
                  change. Verify current information through Delta&apos;s
                  official website before making travel decisions.
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
                  Need to Change Your Flight?
                </p>

                <h2 className="fw-bold mb-3">
                  Review Your Existing Reservation Before Booking Again
                </h2>

                <p className="lead mb-0">
                  Check your ticket value, available replacement flights and
                  applicable fare difference before confirming a new itinerary.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end">
                <a
                  href="https://www.delta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light btn-lg px-4"
                >
                  Manage Your Trip
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
        .info-card,
        .fee-card {
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

        .fee-card {
          height: 100%;
        }

        .rule-list li {
          margin-bottom: 12px;
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