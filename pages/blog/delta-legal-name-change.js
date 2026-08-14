import Head from "next/head";
import Script from "next/script";

export default function DeltaLegalNameChange() {
  const faqs = [
    {
      q: "Can I update my Delta name after marriage?",
      a: "A legal name update for the same traveller may require supporting documents such as a marriage certificate."
    },
    {
      q: "What documents may be needed?",
      a: "Depending on the reason, Delta may request documents such as a marriage certificate, divorce certificate or court order."
    },
    {
      q: "Should my SkyMiles name match my ID?",
      a: "Your SkyMiles profile should match the legal identification you use for travel."
    },
    {
      q: "Can I transfer my ticket to my spouse?",
      a: "Delta tickets are generally non-transferable and cannot simply be reassigned to another traveller."
    }
  ];

  return (
    <>
      <Head>
        <title>Delta Name Change After Marriage or Legal Name Change</title>
        <meta
          name="description"
          content="Changed your legal name after marriage or divorce? Learn how to update Delta passenger and SkyMiles details and what documents may be required."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <main>
        <section className="hero py-5">
          <div className="container py-lg-4">
            <span className="badge bg-danger mb-3">Legal Name Guide</span>

            <h1 className="display-5 fw-bold">
              Delta Airlines Name Change After Marriage or Legal Name Change:
              What to Do
            </h1>

            <p className="lead text-secondary col-lg-9 mt-3">
              Learn how to deal with a legal passenger-name mismatch after
              marriage, divorce or a court-approved name change.
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
                    <a href="#documents" className="nav-link px-0">Documents</a>
                    <a href="#phone" className="nav-link px-0">Contact Delta</a>
                    <a href="#steps" className="nav-link px-0">Steps</a>
                    <a href="#difference" className="nav-link px-0">Correction vs legal change</a>
                    <a href="#skymiles" className="nav-link px-0">SkyMiles</a>
                    <a href="#faqs" className="nav-link px-0">FAQs</a>
                  </nav>
                </div>
              </aside>

              <article className="col-lg-9 article">
                <p className="fs-5">
                  If your legal name changed after marriage, divorce or a court
                  order, your Delta reservation or SkyMiles profile may no
                  longer match your current identification.
                </p>

                <div className="alert alert-warning">
                  The purpose of a legal-name update is to update the identity
                  information for the same traveller, not transfer the ticket to
                  another passenger.
                </div>

                <section id="documents" className="section">
                  <h2>Documents You May Need</h2>

                  <div className="row g-3">
                    {[
                      "Marriage certificate",
                      "Divorce certificate",
                      "Court order",
                      "Updated passport",
                      "Driver's licence",
                      "Other government-issued ID"
                    ].map((item) => (
                      <div className="col-md-6" key={item}>
                        <div className="doc-card p-3">✓ {item}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="phone" className="section">
                  <div className="phone-box p-4 p-md-5">
                    <small className="text-uppercase fw-bold">
                      Delta Assistance
                    </small>

                    <h2 className="mt-2">Reservations</h2>

                    <a href="tel:+18002211212" className="phone">
                      800-221-1212
                    </a>

                    <p className="mt-4 mb-1">SkyMiles Members</p>

                    <a href="tel:+18003232323" className="secondary-phone">
                      800-323-2323
                    </a>
                  </div>
                </section>

                <section id="steps" className="section">
                  <h2>How to Handle a Legal Name Change</h2>

                  {[
                    ["1", "Check Your ID", "Confirm the current legal name on your passport or other travel identification."],
                    ["2", "Check Your Ticket", "Compare the passenger name with your new legal identification."],
                    ["3", "Review SkyMiles", "Make sure your profile also reflects your current legal name."],
                    ["4", "Prepare Documents", "Keep marriage, divorce or court documentation available."],
                    ["5", "Contact Delta", "Request assistance if your issued ticket needs to be serviced."],
                    ["6", "Verify Everything", "Check the updated ticket and itinerary before travelling."]
                  ].map(([n, title, text]) => (
                    <div className="step" key={n}>
                      <span>{n}</span>
                      <div>
                        <h3 className="h4">{title}</h3>
                        <p className="mb-0">{text}</p>
                      </div>
                    </div>
                  ))}
                </section>

                <section id="difference" className="section">
                  <h2>Legal Name Change vs Spelling Correction</h2>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="info p-4 h-100">
                        <h3 className="h4">Spelling Correction</h3>
                        <p>Same legal name, entered incorrectly.</p>
                        <strong>Sara Jonson → Sara Johnson</strong>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="info p-4 h-100">
                        <h3 className="h4">Legal Name Change</h3>
                        <p>The same traveller now has a different legal name.</p>
                        <strong>Sara Johnson → Sara Williams</strong>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="skymiles" className="section">
                  <h2>What About Your SkyMiles Account?</h2>

                  <p>
                    Your SkyMiles name should match the legal identification you
                    use for travel.
                  </p>

                  <p>
                    Depending on the type of account update, you may be able to
                    update information through My Profile or submit identity and
                    legal documentation.
                  </p>
                </section>

                <section className="section">
                  <h2>Quick Guide</h2>

                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="table-dark">
                        <tr><th>Situation</th><th>What to Prepare</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Marriage</td><td>Marriage documentation</td></tr>
                        <tr><td>Divorce</td><td>Divorce documentation</td></tr>
                        <tr><td>Court-approved change</td><td>Court order</td></tr>
                        <tr><td>SkyMiles mismatch</td><td>Update account details</td></tr>
                        <tr><td>Old name on ticket</td><td>Contact Delta</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="faqs" className="section">
                  <h2>Frequently Asked Questions</h2>

                  <div className="accordion" id="legalFaq">
                    {faqs.map((faq, i) => (
                      <div className="accordion-item" key={faq.q}>
                        <h3 className="accordion-header">
                          <button
                            className={`accordion-button ${i ? "collapsed" : ""}`}
                            data-bs-toggle="collapse"
                            data-bs-target={`#legal${i}`}
                          >
                            {faq.q}
                          </button>
                        </h3>

                        <div
                          id={`legal${i}`}
                          className={`accordion-collapse collapse ${!i ? "show" : ""}`}
                          data-bs-parent="#legalFaq"
                        >
                          <div className="accordion-body">{faq.a}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="disclaimer p-4 mt-5">
                  <strong>Disclaimer:</strong> This independent informational
                  website is not affiliated with Delta Air Lines. Requirements
                  and contact information can change. Verify the latest
                  instructions directly with Delta before travel.
                </div>

              </article>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        body { color:#222; line-height:1.7; }
        .hero { background:#f8f9fa; border-bottom:1px solid #eee; }
        .toc,.doc-card,.info { border:1px solid #e7e7e7; border-radius:14px; background:#fff; }
        .toc { top:25px; }
        .toc .nav-link { color:#333; border-bottom:1px solid #eee; }
        .article p,.article li { font-size:17px; }
        .section { padding-top:38px; }
        .section h2 { font-size:31px; font-weight:700; margin-bottom:20px; }
        .phone-box { background:#b00020; color:white; border-radius:18px; }
        .phone { display:block; color:white; font-size:46px; font-weight:800; text-decoration:none; }
        .secondary-phone { color:white; font-size:30px; font-weight:700; text-decoration:none; }
        .step { display:flex; gap:18px; padding:22px; border:1px solid #eee; border-radius:14px; margin:14px 0; }
        .step span { width:45px; height:45px; flex:0 0 45px; background:#dc3545; color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; }
        .accordion-item { margin-bottom:10px; border-radius:10px!important; overflow:hidden; }
        .disclaimer { background:#fff3cd; border-radius:12px; }
      `}</style>
    </>
  );
}