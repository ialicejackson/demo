import Head from "next/head";
import Script from "next/script";

export default function DeltaCancellationRefund() {
  const faqs = [
    {
      q: "Can I cancel my Delta flight online?",
      a: "Many eligible reservations can be cancelled through My Trips."
    },
    {
      q: "Can I get a full refund within 24 hours?",
      a: "Qualifying direct bookings may be eligible for Delta's 24-Hour Risk-Free Cancellation policy."
    },
    {
      q: "What happens to a non-refundable ticket?",
      a: "Eligible remaining value is generally provided as an eCredit rather than a cash refund, subject to applicable ticket rules."
    },
    {
      q: "What is Delta's refund status phone number?",
      a: "Delta currently lists 800-847-0578 for refund-status enquiries within the U.S. and Canada."
    }
  ];

  return (
    <>
      <Head>
        <title>How to Cancel a Delta Flight and Request a Refund</title>
        <meta
          name="description"
          content="Learn how to cancel a Delta flight, request a refund, understand non-refundable tickets, use the 24-hour cancellation policy and check refund status."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="canonical"
          href="https://getadvisior.vercel.app/blog/delta-flight-cancellation-refund/"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <main>
        <section className="hero py-5">
          <div className="container py-lg-4">
            <span className="badge bg-danger mb-3">Cancellation & Refund Guide</span>

            <h1 className="display-5 fw-bold">
              How to Cancel a Delta Flight and Request a Refund
            </h1>

            <p className="lead text-secondary col-lg-9 mt-3">
              Find out how to cancel your reservation, whether you may receive
              a refund or eCredit, and how to check an existing refund request.
            </p>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row g-5">

              <aside className="col-lg-3">
                <div className="toc sticky-lg-top p-4">
                  <h2 className="h5">Quick Navigation</h2>
                  <nav className="nav flex-column">
                    <a href="#steps" className="nav-link px-0">Cancel a flight</a>
                    <a href="#phone" className="nav-link px-0">Phone numbers</a>
                    <a href="#24hours" className="nav-link px-0">24-hour refund</a>
                    <a href="#nonrefundable" className="nav-link px-0">Non-refundable</a>
                    <a href="#delta-cancelled" className="nav-link px-0">Delta cancelled</a>
                    <a href="#faqs" className="nav-link px-0">FAQs</a>
                  </nav>
                </div>
              </aside>

              <article className="col-lg-9 article">

                <p className="fs-5">
                  Need to cancel a Delta reservation? Before confirming the
                  cancellation, check whether the ticket will produce a cash
                  refund, eCredit or remaining value after an applicable charge.
                </p>

                <section id="steps" className="section">
                  <h2>How to Cancel a Delta Flight</h2>

                  {[
                    "Go to My Trips.",
                    "Locate your existing reservation.",
                    "Select the trip you need to cancel.",
                    "Begin the cancellation process.",
                    "Review the refund or eCredit information.",
                    "Confirm and save your cancellation details."
                  ].map((step, i) => (
                    <div className="step" key={step}>
                      <span>{i + 1}</span>
                      <p className="mb-0">{step}</p>
                    </div>
                  ))}
                </section>

                <section id="phone" className="section">
                  <div className="phone-box p-4 p-md-5">
                    <h2>Need Cancellation or Refund Help?</h2>

                    <p className="mb-1">Reservations</p>
                    <a href="tel:+18002211212" className="phone">
                      800-221-1212
                    </a>

                    <hr />

                    <p className="mb-1">Refund Status</p>
                    <a href="tel:+18008470578" className="phone">
                      800-847-0578
                    </a>
                  </div>

                  <div className="alert alert-light border mt-3">
                    Verify current numbers and operating hours on Delta.com
                    before calling.
                  </div>
                </section>

                <section id="24hours" className="section">
                  <h2>Can You Cancel Within 24 Hours?</h2>

                  <div className="highlight p-4">
                    <h3 className="h4">24-Hour Risk-Free Cancellation</h3>
                    <p className="mb-0">
                      Qualifying reservations purchased directly from Delta may
                      be cancelled within the applicable 24-hour risk-free
                      period for a full refund, subject to Delta's conditions.
                    </p>
                  </div>
                </section>

                <section id="nonrefundable" className="section">
                  <h2>What Happens With a Non-Refundable Ticket?</h2>

                  <p>
                    Most Delta tickets are non-refundable. When an eligible
                    non-refundable booking is voluntarily cancelled, remaining
                    value is generally issued as an eCredit rather than returned
                    as cash.
                  </p>

                  <p>
                    Basic fares can have additional cancellation restrictions
                    or charges, so review the specific conditions shown for your
                    reservation.
                  </p>
                </section>

                <section className="section">
                  <h2>What About a Refundable Ticket?</h2>

                  <p>
                    An eligible unused refundable ticket may qualify for money
                    returned to the original form of payment after cancellation
                    and processing.
                  </p>
                </section>

                <section id="delta-cancelled" className="section">
                  <h2>What If Delta Cancelled Your Flight?</h2>

                  <p>
                    If Delta cancels your flight, the options can differ from a
                    voluntary passenger cancellation.
                  </p>

                  <p>
                    Depending on the disruption, you may be able to accept
                    rebooking or request a refund for eligible unflown travel
                    instead.
                  </p>
                </section>

                <section className="section">
                  <h2>How to Check Refund Status</h2>

                  <p>
                    Delta provides an online refund-status tool. Keep your
                    ticket number or refund request number available.
                  </p>

                  <div className="alert alert-primary">
                    For U.S. and Canada refund-status assistance, Delta lists
                    <strong> 800-847-0578</strong>.
                  </div>
                </section>

                <section className="section">
                  <h2>Quick Guide</h2>

                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="table-dark">
                        <tr>
                          <th>Situation</th>
                          <th>Possible Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Eligible 24-hour cancellation</td><td>Full refund</td></tr>
                        <tr><td>Non-refundable ticket</td><td>Usually eCredit if eligible</td></tr>
                        <tr><td>Refundable ticket</td><td>Eligible refund</td></tr>
                        <tr><td>Delta cancelled flight</td><td>Review refund/rebooking</td></tr>
                        <tr><td>Refund pending</td><td>Check refund status</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="faqs" className="section">
                  <h2>Frequently Asked Questions</h2>

                  <div className="accordion" id="refundFaq">
                    {faqs.map((faq, i) => (
                      <div className="accordion-item" key={faq.q}>
                        <h3 className="accordion-header">
                          <button
                            className={`accordion-button ${i ? "collapsed" : ""}`}
                            data-bs-toggle="collapse"
                            data-bs-target={`#refund${i}`}
                          >
                            {faq.q}
                          </button>
                        </h3>
                        <div
                          id={`refund${i}`}
                          className={`accordion-collapse collapse ${!i ? "show" : ""}`}
                          data-bs-parent="#refundFaq"
                        >
                          <div className="accordion-body">{faq.a}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="disclaimer p-4 mt-5">
                  <strong>Disclaimer:</strong> This independent informational
                  website is not affiliated with Delta Air Lines. Cancellation
                  and refund rules can change. Verify your ticket conditions
                  directly with Delta.
                </div>

              </article>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        body { color:#222; line-height:1.7; }
        .hero { background:#f8f9fa; border-bottom:1px solid #eee; }
        .toc { border:1px solid #eee; border-radius:15px; top:25px; }
        .toc .nav-link { color:#333; border-bottom:1px solid #eee; }
        .article p,.article li { font-size:17px; }
        .section { padding-top:38px; }
        .section h2 { font-size:31px; font-weight:700; margin-bottom:20px; }
        .step { display:flex; gap:18px; align-items:center; border:1px solid #eee; padding:18px; border-radius:13px; margin:12px 0; }
        .step span { background:#dc3545; color:white; width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex:0 0 42px; font-weight:bold; }
        .phone-box { background:#b00020; color:white; border-radius:18px; }
        .phone { color:white; font-size:40px; font-weight:800; text-decoration:none; display:block; }
        .phone-box hr { border-color:rgba(255,255,255,.4); }
        .highlight { background:#f8f9fa; border-left:5px solid #dc3545; border-radius:10px; }
        .accordion-item { margin-bottom:10px; border-radius:10px!important; overflow:hidden; }
        .disclaimer { background:#fff3cd; border-radius:12px; }
      `}</style>
    </>
  );
}