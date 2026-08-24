import Head from "next/head";
import Script from "next/script";

export default function DeltaReservationHelp() {
  const faqs = [
    {
      q: "How do I modify an existing Delta reservation?",
      a: "Open My Trips, retrieve your reservation and use the available change or manage-trip options for your booking.",
    },
    {
      q: "What number do I call to change my Delta reservation?",
      a: "Delta lists 800-221-1212 for U.S. assistance with new or existing reservations. Verify the latest contact details on Delta.com.",
    },
    {
      q: "Can I find my Delta booking without a confirmation number?",
      a: "Delta's My Trips tool may also allow lookup using a ticket number and passenger information.",
    },
    {
      q: "Can I modify a travel-agency booking directly with Delta?",
      a: "It depends on how the ticket was issued. Some agency-issued reservations may need to be serviced by the original travel agency.",
    },
    {
      q: "Can I change my Delta flight on my phone?",
      a: "Eligible reservations can often be managed through Delta.com or the Fly Delta app.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Delta Airlines Reservation Help: Modify an Existing Booking
        </title>

        <meta
          name="description"
          content="Need help with an existing Delta reservation? Learn how to change flights, cancel a booking, modify seats, find your trip and contact Reservations."
        />

        <meta
          name="keywords"
          content="Delta reservation help, modify Delta reservation, Delta existing booking, Delta reservations, change Delta booking"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
         <link
          rel="canonical"
          href="https://getadvisior.vercel.app/blog/delta-reservation-help/"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <main>
        <section className="hero-section py-5">
          <div className="container py-lg-4">
            <span className="badge text-bg-danger mb-3">
              Delta Reservation Guide
            </span>

            <h1 className="display-5 fw-bold mb-4">
              Delta Airlines Reservation Help: How to Modify an Existing Booking
            </h1>

            <p className="lead text-secondary col-lg-9">
              Learn how to find and manage an existing Delta reservation,
              change flights, cancel a trip, update seats and know when to
              contact Reservations.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#find-booking" className="btn btn-danger btn-lg">
                Find Your Booking
              </a>

              <a href="#phone" className="btn btn-outline-dark btn-lg">
                Reservation Help
              </a>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              <aside className="col-lg-3">
                <div className="toc-card sticky-lg-top p-4">
                  <h2 className="h5 fw-bold">Quick Navigation</h2>

                  <nav className="nav flex-column">
                    <a className="nav-link px-0" href="#find-booking">
                      Find reservation
                    </a>
                    <a className="nav-link px-0" href="#phone">
                      Delta phone number
                    </a>
                    <a className="nav-link px-0" href="#what-change">
                      What you can change
                    </a>
                    <a className="nav-link px-0" href="#flight-change">
                      Change date/time
                    </a>
                    <a className="nav-link px-0" href="#cancel">
                      Cancel reservation
                    </a>
                    <a className="nav-link px-0" href="#call">
                      When to call
                    </a>
                    <a className="nav-link px-0" href="#faqs">
                      FAQs
                    </a>
                  </nav>
                </div>
              </aside>

              <article className="col-lg-9 article-content">
                <section id="find-booking">
                  <p className="fs-5">
                    Already booked a Delta flight but need to change something?
                    Many eligible reservations can be managed through My Trips
                    on Delta.com or the Fly Delta app.
                  </p>

                  <h2>How Do You Find an Existing Delta Reservation?</h2>

                  <p>
                    Open My Trips and retrieve your booking using available
                    reservation information.
                  </p>

                  <div className="row g-3 mt-2">
                    {[
                      "Confirmation number",
                      "Ticket number",
                      "Passenger first name",
                      "Passenger last name",
                    ].map((item) => (
                      <div className="col-md-6" key={item}>
                        <div className="info-card p-3">✓ {item}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="phone" className="content-section">
                  <div className="phone-box p-4 p-md-5">
                    <span className="small text-uppercase fw-bold">
                      Existing Reservation Assistance
                    </span>

                    <h2 className="mt-2">Delta Reservations</h2>

                    <a
                      href="tel:+18002211212"
                      className="phone-number text-decoration-none"
                    >
                      800-221-1212
                    </a>

                    <p className="mt-4 mb-0">
                      Keep your confirmation number, passenger name, current
                      flight details and the modification you want to make ready
                      before calling.
                    </p>
                  </div>

                  <div className="alert alert-light border mt-4">
                    Verify the current contact number and booking rules directly
                    through Delta&apos;s official website.
                  </div>
                </section>

                <section id="what-change" className="content-section">
                  <h2>What Can You Change on an Existing Delta Booking?</h2>

                  <div className="row g-3">
                    {[
                      "Change travel date",
                      "Change flight time",
                      "Rebook another flight",
                      "Cancel a reservation",
                      "Select or change seats",
                      "Review upgrade options",
                      "Add eligible special services",
                      "Check same-day change options",
                    ].map((item) => (
                      <div className="col-md-6" key={item}>
                        <div className="change-card p-3">✓ {item}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="flight-change" className="content-section">
                  <h2>How to Change the Date or Time of a Delta Flight</h2>

                  {[
                    [
                      "1",
                      "Find Your Trip",
                      "Open My Trips and retrieve the reservation you want to change.",
                    ],
                    [
                      "2",
                      "Open Trip Details",
                      "Select the booking and review the available management options.",
                    ],
                    [
                      "3",
                      "Start the Change",
                      "Choose the flight-change option available for your reservation.",
                    ],
                    [
                      "4",
                      "Search Replacement Flights",
                      "Select another date, departure time or eligible itinerary.",
                    ],
                    [
                      "5",
                      "Review the Cost",
                      "Check any fare difference, restrictions or applicable charges.",
                    ],
                    [
                      "6",
                      "Confirm the Updated Booking",
                      "Verify the new date, time, airports, passenger details and seat assignment.",
                    ],
                  ].map(([n, title, text]) => (
                    <div className="step-card" key={n}>
                      <span className="step-number">{n}</span>
                      <div>
                        <h3 className="h4">{title}</h3>
                        <p className="mb-0">{text}</p>
                      </div>
                    </div>
                  ))}
                </section>

                <section id="cancel" className="content-section">
                  <h2>Can You Cancel an Existing Delta Reservation?</h2>

                  <p>
                    Eligible reservations may be cancelled through My Trips.
                    The outcome can vary depending on the fare and ticket
                    conditions.
                  </p>

                  <p>
                    You may receive a refund, eCredit or another form of
                    remaining ticket value depending on the reservation.
                  </p>
                </section>

                <section className="content-section">
                  <h2>Can You Change Your Seat After Booking?</h2>

                  <p>
                    Eligible passengers may be able to review or change seat
                    assignments from their existing reservation.
                  </p>

                  <p>
                    Available options can depend on your fare, cabin, flight,
                    status benefits and current seat inventory.
                  </p>
                </section>

                <section className="content-section">
                  <h2>Can You Add Special Services to a Booking?</h2>

                  <p>
                    Some special requests can be managed after booking. More
                    complex requests may require direct assistance.
                  </p>

                  <div className="alert alert-primary">
                    If the option you need does not appear in My Trips, contact
                    Reservations instead of creating a second booking.
                  </div>
                </section>

                <section id="call" className="content-section">
                  <h2>When Should You Contact Delta Reservations?</h2>

                  <ul className="rule-list">
                    <li>Your reservation will not open online.</li>
                    <li>The modification option is missing.</li>
                    <li>Your itinerary includes another airline.</li>
                    <li>You have a complex international booking.</li>
                    <li>Your reservation contains special services.</li>
                    <li>You are travelling with an infant.</li>
                    <li>Your ticket includes special upgrade elements.</li>
                    <li>You receive an error during the change process.</li>
                  </ul>
                </section>

                <section className="content-section">
                  <h2>What If the Booking Was Made Through a Travel Agency?</h2>

                  <p>
                    Some tickets issued by travel agencies or online booking
                    sites may need to be serviced by the original seller.
                  </p>

                  <div className="alert alert-warning">
                    Check who issued the ticket before attempting multiple
                    changes through different channels.
                  </div>
                </section>

                <section className="content-section">
                  <h2>Existing Reservation: Quick Guide</h2>

                  <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                      <thead className="table-dark">
                        <tr>
                          <th>Need</th>
                          <th>First Step</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Change flight date</td>
                          <td>Open My Trips</td>
                        </tr>
                        <tr>
                          <td>Change departure time</td>
                          <td>Search replacement flights</td>
                        </tr>
                        <tr>
                          <td>Cancel reservation</td>
                          <td>Use the cancellation option in My Trips</td>
                        </tr>
                        <tr>
                          <td>Find booking</td>
                          <td>Use confirmation or ticket number</td>
                        </tr>
                        <tr>
                          <td>Same-day change</td>
                          <td>Check same-day eligibility</td>
                        </tr>
                        <tr>
                          <td>Complex booking</td>
                          <td>Contact Reservations</td>
                        </tr>
                        <tr>
                          <td>Agency-issued ticket</td>
                          <td>Contact original seller when required</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="faqs" className="content-section">
                  <h2>Frequently Asked Questions</h2>

                  <div className="accordion" id="reservationFaq">
                    {faqs.map((faq, i) => (
                      <div className="accordion-item" key={faq.q}>
                        <h3 className="accordion-header">
                          <button
                            className={`accordion-button ${
                              i ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#reservation${i}`}
                          >
                            {faq.q}
                          </button>
                        </h3>

                        <div
                          id={`reservation${i}`}
                          className={`accordion-collapse collapse ${
                            !i ? "show" : ""
                          }`}
                          data-bs-parent="#reservationFaq"
                        >
                          <div className="accordion-body">{faq.a}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="content-section">
                  <div className="final-box p-4 p-md-5">
                    <h2>Final Word</h2>

                    <p>
                      For most existing Delta reservation changes, start with My
                      Trips instead of creating a new booking.
                    </p>

                    <p className="mb-0">
                      Retrieve your reservation, review the available
                      modification options and check any fare difference or
                      restrictions before confirming. If the booking cannot be
                      managed online, contact Reservations or the original
                      ticket issuer when required.
                    </p>
                  </div>
                </section>

                <div className="disclaimer p-4 mt-5">
                  <strong>Disclaimer:</strong> This independent informational
                  website is not affiliated with Delta Air Lines. Airline
                  policies, fees, phone numbers and booking procedures may
                  change. Verify current information directly with Delta.
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        body {
          color: #222;
          line-height: 1.7;
        }

        .hero-section {
          background: linear-gradient(180deg, #f8f9fa, #ffffff);
          border-bottom: 1px solid #eee;
        }

        .toc-card,
        .info-card,
        .change-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 15px;
        }

        .toc-card {
          top: 25px;
        }

        .toc-card .nav-link {
          color: #333;
          border-bottom: 1px solid #eee;
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .article-content p,
        .article-content li {
          font-size: 17px;
        }

        .content-section {
          padding-top: 38px;
        }

        .content-section h2 {
          font-size: 31px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .phone-box {
          color: #fff;
          background: linear-gradient(135deg, #b00020, #dc3545);
          border-radius: 18px;
        }

        .phone-number {
          color: #fff;
          display: inline-block;
          font-size: clamp(34px, 5vw, 48px);
          font-weight: 800;
        }

        .step-card {
          display: flex;
          gap: 18px;
          padding: 22px;
          border: 1px solid #eee;
          border-radius: 14px;
          margin: 16px 0;
        }

        .step-number {
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #dc3545;
          color: #fff;
          font-weight: 700;
        }

        .rule-list li {
          margin-bottom: 10px;
        }

        .accordion-item {
          margin-bottom: 10px;
          border-radius: 10px !important;
          overflow: hidden;
        }

        .final-box {
          background: #f8f9fa;
          border-left: 5px solid #dc3545;
          border-radius: 12px;
        }

        .disclaimer {
          background: #fff3cd;
          border-radius: 12px;
        }

        @media (max-width: 767px) {
          .step-card {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}