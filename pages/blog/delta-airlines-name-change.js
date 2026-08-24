import Head from "next/head";
import Script from "next/script";

export default function DeltaAirlinesNameChange() {
  const faqs = [
    {
      question: "Can I change the passenger name on a Delta ticket?",
      answer:
        "Delta tickets generally cannot be transferred to another passenger. However, eligible spelling corrections and legal name updates may be permitted.",
    },
    {
      question: "Can I correct a spelling mistake on my Delta ticket?",
      answer:
        "Minor spelling mistakes may be corrected, subject to the ticket conditions and Delta's current name correction rules.",
    },
    {
      question: "Do I need documents for a legal name change?",
      answer:
        "Yes. You may need a marriage certificate, divorce decree, court order, updated passport, or another government-issued document.",
    },
    {
      question: "How soon should I request a name correction?",
      answer:
        "Request the correction as soon as you notice the error. Waiting until the day of travel may cause check-in or boarding complications.",
    },
    {
      question: "Can I travel with a misspelled name?",
      answer:
        "A mismatch between your ticket and government-issued identification may cause problems. It is recommended to correct the name before departure.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          How to Change Your Name on a Delta Airlines Ticket | Step-by-Step Guide
        </title>

        <meta
          name="description"
          content="Learn how to change or correct your name on a Delta Airlines ticket, including the process, documents, possible fees, rules, and FAQs."
        />

        <meta
          name="keywords"
          content="Delta Airlines name change, Delta name correction, change name on Delta ticket, Delta name change fee"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="canonical"
          href="https://getadvisior.vercel.app/blog/delta-airlines-name-change/"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <main>
        {/* Hero Section */}
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
                  Delta Airlines Name Change
                </li>
              </ol>
            </nav>

            <div className="row align-items-center">
              <div className="col-lg-8">
                <span className="badge text-bg-danger mb-3">
                  Delta Airlines Guide
                </span>

                <h1 className="display-5 fw-bold mb-4">
                  How to Change Your Name on a Delta Airlines Ticket:
                  Step-by-Step Guide
                </h1>

                <p className="lead text-secondary mb-4">
                  Learn how to correct a misspelled name, request a legal name
                  update, prepare the required documents, and avoid problems
                  during check-in.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <a href="#steps" className="btn btn-danger btn-lg">
                    View the Steps
                  </a>

                  <a
                    href="#faqs"
                    className="btn btn-outline-dark btn-lg"
                  >
                    Read FAQs
                  </a>
                </div>
              </div>

              <div className="col-lg-4 mt-5 mt-lg-0">
                <div className="quick-card p-4">
                  <h2 className="h5 fw-bold mb-3">Before You Start</h2>

                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">✓ Keep your booking reference ready</li>
                    <li className="mb-3">✓ Check your passport or ID</li>
                    <li className="mb-3">✓ Prepare supporting documents</li>
                    <li>✓ Request the correction early</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Section */}
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              {/* Sidebar */}
              <aside className="col-lg-3">
                <div className="sticky-lg-top toc-card p-4">
                  <h2 className="h5 fw-bold mb-3">Quick Navigation</h2>

                  <nav className="nav flex-column">
                    <a className="nav-link px-0" href="#policy">
                      Name change policy
                    </a>

                    <a className="nav-link px-0" href="#types">
                      Types of corrections
                    </a>

                    <a className="nav-link px-0" href="#steps">
                      Step-by-step process
                    </a>

                    <a className="nav-link px-0" href="#documents">
                      Required documents
                    </a>

                    <a className="nav-link px-0" href="#fees">
                      Possible fees
                    </a>

                    <a className="nav-link px-0" href="#rules">
                      Important rules
                    </a>

                    <a className="nav-link px-0" href="#faqs">
                      FAQs
                    </a>
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <article className="col-lg-9 article-content">
                <p className="fs-5">
                  Changing the name on your Delta Airlines ticket can be
                  straightforward when you understand the applicable rules.
                  Whether you made a spelling mistake, changed your legal name
                  after marriage or divorce, or need to update passenger
                  information, acting early can help prevent check-in problems.
                </p>

                <div className="alert alert-warning border-0 my-4">
                  <strong>Important:</strong> The passenger name on the ticket
                  should match the government-issued identification or passport
                  used for travel.
                </div>

                <section id="policy" className="content-section">
                  <h2>What Is the Delta Airlines Name Change Policy?</h2>

                  <p>
                    Delta may allow eligible passengers to correct or update
                    their names in certain circumstances. The purpose of a name
                    correction is to ensure that the passenger information on
                    the reservation matches the traveller&apos;s identification.
                  </p>

                  <p>Depending on the situation, passengers may request:</p>

                  <ul>
                    <li>Correction of a spelling mistake</li>
                    <li>Correction of an incorrect first or last name</li>
                    <li>Middle name correction</li>
                    <li>Legal name update after marriage</li>
                    <li>Legal name update after divorce</li>
                    <li>A court-approved legal name change</li>
                  </ul>

                  <p>
                    A ticket generally cannot be transferred from the original
                    passenger to a completely different person.
                  </p>
                </section>

                <section id="types" className="content-section">
                  <h2>Types of Name Changes and Corrections</h2>

                  <div className="row g-4 mt-2">
                    <div className="col-md-6">
                      <div className="info-card h-100 p-4">
                        <h3 className="h4">Minor Name Corrections</h3>

                        <p>
                          Minor corrections may apply when the reservation
                          contains a typing or spelling error.
                        </p>

                        <ul className="mb-0">
                          <li>Misspelled first name</li>
                          <li>Incorrect surname spelling</li>
                          <li>Missing letters</li>
                          <li>Typing errors</li>
                          <li>Middle name corrections</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="info-card h-100 p-4">
                        <h3 className="h4">Legal Name Changes</h3>

                        <p>
                          Legal name updates may require official documentation.
                        </p>

                        <ul className="mb-0">
                          <li>Marriage</li>
                          <li>Divorce</li>
                          <li>Court order</li>
                          <li>Legal identity update</li>
                          <li>Government-approved name change</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="comparison-box mt-4 p-4">
                    <h3 className="h5 fw-bold">Correction Example</h3>

                    <p className="mb-2">
                      <strong>Incorrect:</strong> Jonh Smith
                    </p>

                    <p className="mb-0">
                      <strong>Correct:</strong> John Smith
                    </p>
                  </div>

                  <div className="alert alert-danger border-0 mt-4">
                    <strong>Not permitted:</strong> Changing “Michael Johnson”
                    to “David Brown” would normally be treated as transferring
                    the ticket to another passenger.
                  </div>
                </section>

                <section id="steps" className="content-section">
                  <h2>
                    How to Change Your Name on a Delta Airlines Ticket
                  </h2>

                  <div className="step-card">
                    <span className="step-number">1</span>

                    <div>
                      <h3 className="h4">Review Your Booking</h3>

                      <p className="mb-0">
                        Find your confirmation email and check the passenger
                        name, booking reference, flight date, destination, and
                        itinerary.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <span className="step-number">2</span>

                    <div>
                      <h3 className="h4">Identify the Type of Change</h3>

                      <p className="mb-0">
                        Determine whether you need a simple spelling correction,
                        a middle name update, or a legal name change.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <span className="step-number">3</span>

                    <div>
                      <h3 className="h4">Gather the Required Documents</h3>

                      <p className="mb-0">
                        Prepare your passport, driving licence, marriage
                        certificate, divorce decree, court order, or other
                        supporting document, depending on the request.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <span className="step-number">4</span>

                    <div>
                      <h3 className="h4">Contact Delta Airlines</h3>

                      <p className="mb-0">
                        Use Delta&apos;s official customer support channels.
                        Provide your booking reference, the correct passenger
                        name, and supporting documents where required.
                      </p>
                    </div>
                  </div>

                  <div className="step-card">
                    <span className="step-number">5</span>

                    <div>
                      <h3 className="h4">Verify the Updated Reservation</h3>

                      <p className="mb-0">
                        Review the revised itinerary and confirm that the updated
                        passenger name matches the identification you will use
                        during travel.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="documents" className="content-section">
                  <h2>Documents Required for a Name Change</h2>

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered align-middle">
                      <thead className="table-dark">
                        <tr>
                          <th>Situation</th>
                          <th>Possible Documents Required</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Spelling error</td>
                          <td>Government-issued identification</td>
                        </tr>

                        <tr>
                          <td>Name change after marriage</td>
                          <td>Marriage certificate and updated ID</td>
                        </tr>

                        <tr>
                          <td>Name change after divorce</td>
                          <td>Divorce decree and updated ID</td>
                        </tr>

                        <tr>
                          <td>Court-approved name change</td>
                          <td>Court order or legal name change document</td>
                        </tr>

                        <tr>
                          <td>Passport mismatch</td>
                          <td>Valid passport and supporting documentation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="small text-secondary">
                    The exact documentation required may depend on the booking,
                    route, ticket conditions, and type of correction.
                  </p>
                </section>

                <section id="fees" className="content-section">
                  <h2>Delta Airlines Name Change Fee</h2>

                  <p>
                    The cost of correcting or updating a passenger name can
                    depend on several factors:
                  </p>

                  <div className="row g-3">
                    {[
                      "Ticket and fare type",
                      "Route and destination",
                      "Nature of the correction",
                      "Time remaining before departure",
                      "Whether the ticket must be reissued",
                      "Possible fare difference",
                    ].map((item) => (
                      <div className="col-md-6" key={item}>
                        <div className="fee-item p-3">✓ {item}</div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4">
                    A minor spelling correction may be handled differently from
                    a legal name change. Always verify the current conditions
                    directly through Delta&apos;s official channels before
                    requesting a modification.
                  </p>
                </section>

                <section id="rules" className="content-section">
                  <h2>Important Rules to Remember</h2>

                  <ul className="rule-list">
                    <li>
                      The ticket name should match your passport or
                      government-issued identification.
                    </li>

                    <li>
                      Correct errors as soon as possible after making the
                      reservation.
                    </li>

                    <li>
                      Keep your booking confirmation and supporting documents
                      available.
                    </li>

                    <li>
                      Check the updated reservation after the correction is
                      processed.
                    </li>

                    <li>
                      International passengers should resolve name mismatches
                      well before departure.
                    </li>

                    <li>
                      A name correction does not normally allow the ticket to be
                      transferred to another passenger.
                    </li>
                  </ul>
                </section>

                <section className="content-section">
                  <h2>Common Reasons for Name Correction Requests</h2>

                  <div className="row g-3 mt-2">
                    {[
                      "Typing mistake",
                      "Incorrect surname",
                      "Missing middle name",
                      "Marriage",
                      "Divorce",
                      "Passport mismatch",
                      "Court-approved name change",
                      "Incorrect passenger details",
                    ].map((reason) => (
                      <div className="col-sm-6 col-md-4" key={reason}>
                        <div className="reason-card p-3 text-center">
                          {reason}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="content-section">
                  <h2>Tips to Avoid Passenger Name Problems</h2>

                  <ol>
                    <li>
                      Enter your legal name exactly as shown on your
                      identification.
                    </li>

                    <li>
                      Check the spelling of your first, middle, and last names
                      before making payment.
                    </li>

                    <li>Avoid using nicknames or shortened names.</li>

                    <li>
                      Verify passport details carefully for international
                      journeys.
                    </li>

                    <li>
                      Review the confirmation email immediately after booking.
                    </li>
                  </ol>
                </section>

                <section id="faqs" className="content-section">
                  <h2>Frequently Asked Questions</h2>

                  <div className="accordion mt-4" id="deltaNameFaq">
                    {faqs.map((faq, index) => (
                      <div className="accordion-item" key={faq.question}>
                        <h3
                          className="accordion-header"
                          id={`heading-${index}`}
                        >
                          <button
                            className={`accordion-button ${
                              index !== 0 ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${index}`}
                            aria-expanded={index === 0}
                            aria-controls={`collapse-${index}`}
                          >
                            {faq.question}
                          </button>
                        </h3>

                        <div
                          id={`collapse-${index}`}
                          className={`accordion-collapse collapse ${
                            index === 0 ? "show" : ""
                          }`}
                          aria-labelledby={`heading-${index}`}
                          data-bs-parent="#deltaNameFaq"
                        >
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="content-section">
                  <div className="final-box p-4 p-md-5">
                    <h2>Final Thoughts</h2>

                    <p>
                      A spelling error or legal name mismatch does not always
                      mean you need to cancel your journey. Start by reviewing
                      the booking, identifying the type of correction, and
                      preparing the relevant documents.
                    </p>

                    <p className="mb-0">
                      Request the change as early as possible and confirm that
                      the updated ticket matches the identification you will
                      present at the airport.
                    </p>
                  </div>
                </section>

                <div className="disclaimer p-4 mt-5">
                  <strong>Disclaimer:</strong> Airline policies, fees, and
                  procedures may change. This page is provided for general
                  informational purposes. Verify current information through
                  Delta Air Lines&apos; official website or authorised customer
                  support before making travel decisions.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-5">
          <div className="container text-center py-4">
            <h2 className="fw-bold mb-3">
              Need to Review Your Passenger Details?
            </h2>

            <p className="lead mb-4">
              Keep your booking reference and travel documents ready before
              requesting a correction.
            </p>

            <a href="#steps" className="btn btn-light btn-lg px-4">
              Review the Process
            </a>
          </div>
        </section>
      </main>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #ffffff;
          color: #222222;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.7;
        }

        .hero-section {
          background: linear-gradient(135deg, #f7f8fc 0%, #ffffff 100%);
          border-bottom: 1px solid #e9ecef;
        }

        .quick-card,
        .toc-card,
        .info-card,
        .comparison-box,
        .fee-item,
        .reason-card {
          background: #ffffff;
          border: 1px solid #e6e8ec;
          border-radius: 14px;
          box-shadow: 0 8px 30px rgba(21, 30, 60, 0.06);
        }

        .toc-card {
          top: 30px;
        }

        .toc-card .nav-link {
          color: #333333;
          border-bottom: 1px solid #eeeeee;
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
          padding-top: 35px;
          margin-top: 20px;
        }

        .content-section h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #171717;
        }

        .content-section h3 {
          font-weight: 700;
        }

        .step-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          margin-top: 20px;
          border: 1px solid #e6e8ec;
          border-radius: 14px;
          background: #ffffff;
        }

        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 46px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #dc3545;
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
        }

        .fee-item,
        .reason-card {
          height: 100%;
        }

        .rule-list li {
          margin-bottom: 12px;
        }

        .accordion-button {
          font-weight: 700;
          font-size: 17px;
        }

        .accordion-button:not(.collapsed) {
          background: #f8d7da;
          color: #842029;
          box-shadow: none;
        }

        .final-box {
          background: #f8f9fa;
          border-left: 5px solid #dc3545;
          border-radius: 12px;
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

        @media (max-width: 767px) {
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
      `}</style>
    </>
  );
}