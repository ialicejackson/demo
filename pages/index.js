import Head from "next/head";

export default function MicrosoftCloud() {
  return (
    <>
      <Head>
        <title>
          About Microsoft Cloud | Azure, Microsoft 365 & Dynamics 365
        </title>

        <meta
          name="description"
          content="Discover how Microsoft Cloud helps businesses transform with Azure, Microsoft 365, Dynamics 365 and Power Platform."
        />

        <link
          rel="canonical"
          href="https://www.yoursite.com/microsoft-cloud"
        />
      </Head>

      <main>

        {/* Hero Section */}
        <section className="bg-primary text-white text-center py-5">
          <div className="container">
            <h1 className="display-4 fw-bold">
              About Microsoft Cloud
            </h1>
            <p className="lead mt-3">
              Empowering Modern Businesses with Scalable, Secure & Intelligent Solutions
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-6">
                <h2 className="fw-bold mb-4">
                  What is Microsoft Cloud?
                </h2>
                <p className="text-muted">
                  Microsoft Cloud is a comprehensive digital ecosystem that integrates
                  infrastructure, productivity, business applications, and analytics
                  into one seamless environment.
                </p>
                <p className="text-muted">
                  It enables organizations to innovate faster, scale efficiently,
                  and operate securely across global environments.
                </p>
              </div>

              <div className="col-lg-6 text-center">
                <img
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                  alt="Cloud Technology"
                  className="img-fluid rounded shadow"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-5">
          <div className="container text-center">

            <h2 className="fw-bold mb-5">Core Components</h2>

            <div className="row g-4">

              <div className="col-md-3">
                <div className="card border-0 shadow-sm h-100 p-3">
                  <div className="card-body">
                    <h5 className="fw-bold text-primary">Azure</h5>
                    <p className="text-muted small">
                      Cloud infrastructure including VMs, databases, networking, AI and DevOps tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card border-0 shadow-sm h-100 p-3">
                  <div className="card-body">
                    <h5 className="fw-bold text-primary">Microsoft 365</h5>
                    <p className="text-muted small">
                      Productivity tools like Word, Excel, Teams & Outlook for collaboration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card border-0 shadow-sm h-100 p-3">
                  <div className="card-body">
                    <h5 className="fw-bold text-primary">Dynamics 365</h5>
                    <p className="text-muted small">
                      Integrated ERP & CRM for finance, sales, and operations management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card border-0 shadow-sm h-100 p-3">
                  <div className="card-body">
                    <h5 className="fw-bold text-primary">Power Platform</h5>
                    <p className="text-muted small">
                      Power BI, Apps & Automate to analyze data and streamline workflows.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-light py-5">
          <div className="container text-center">

            <h2 className="fw-bold mb-4">Why Choose Microsoft Cloud?</h2>

            <div className="row mt-4 g-4">

              <div className="col-md-4">
                <div className="p-4 shadow-sm bg-white rounded">
                  <h5 className="fw-bold">Scalability</h5>
                  <p className="text-muted small">
                    Scale infrastructure instantly as your business grows.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-4 shadow-sm bg-white rounded">
                  <h5 className="fw-bold">Enterprise Security</h5>
                  <p className="text-muted small">
                    Advanced compliance, identity protection, and threat detection.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-4 shadow-sm bg-white rounded">
                  <h5 className="fw-bold">AI & Automation</h5>
                  <p className="text-muted small">
                    Built-in AI capabilities and workflow automation tools.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-5">
              <button className="btn btn-primary btn-lg px-5">
                Get Started Today
              </button>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
