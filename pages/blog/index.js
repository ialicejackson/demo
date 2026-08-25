import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Blog({ blogs = [] }) {
  return (
    <>
      <Head>
        <title>Travel & Airline Guides | GetAdvisor Blog</title>

        <meta
          name="description"
          content="Browse GetAdvisor travel and airline guides covering wheelchair assistance, customer service, flight changes, cancellations, refunds and booking help."
        />

        <link
          rel="canonical"
          href="https://getadvisior.vercel.app/blog/"
        />

        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        <section className="bg-dark text-white py-5">
          <div className="container text-center">
            <h1 className="fw-bold">Travel & Airline Guides</h1>

            <p className="lead mt-3 mb-0">
              Helpful guides for airlines, bookings, wheelchair assistance,
              customer service, cancellations, refunds and flight changes.
            </p>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              {blogs.map((blog) => (
                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={blog.url}
                >
                  <div className="card h-100 shadow-sm">
                    <div className="card-body p-4">
                      <span className="text-primary fw-bold small">
                        {blog.category}
                      </span>

                      <h2 className="h5 fw-bold mt-2">
                        <Link
                          href={blog.url}
                          className="text-dark text-decoration-none"
                        >
                          {blog.title}
                        </Link>
                      </h2>

                      <p className="text-secondary">
                        {blog.description}
                      </p>

                      <Link
                        href={blog.url}
                        className="fw-bold text-decoration-none"
                      >
                        Read Guide →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {blogs.length === 0 && (
              <div className="alert alert-warning">
                Blog files could not be detected.
              </div>
            )}
          </div>
        </section>
      </main>

      <style jsx global>{`
        body {
          background: #ffffff;
        }

        .card {
          border: 1px solid #e5e5e5;
          transition: 0.2s;
        }

        .card:hover {
          transform: translateY(-3px);
        }

        .card h2 {
          line-height: 1.4;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const blogDir = path.resolve(process.cwd(), "pages/blog");

  console.log("BLOG DIRECTORY:", blogDir);

  let files = [];

  if (fs.existsSync(blogDir)) {
    files = fs.readdirSync(blogDir);

    console.log("BLOG FILES:", files);
  } else {
    console.log("BLOG DIRECTORY NOT FOUND");
  }

  const blogs = files
    .filter(
      (file) =>
        file.endsWith(".js") &&
        file !== "index.js" &&
        !file.startsWith("_")
    )
    .map((file) => {
      const slug = file.replace(/\.js$/, "");

      const cleanTitle = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());

      const lowerSlug = slug.toLowerCase();

      let category = "Travel";

      if (lowerSlug.includes("delta")) {
        category = "Delta Airlines";
      } else if (lowerSlug.includes("jetblue")) {
        category = "JetBlue";
      } else if (lowerSlug.includes("expedia")) {
        category = "Expedia";
      } else if (lowerSlug.includes("united")) {
        category = "United Airlines";
      } else if (lowerSlug.includes("american")) {
        category = "American Airlines";
      } else if (lowerSlug.includes("southwest")) {
        category = "Southwest Airlines";
      } else if (lowerSlug.includes("emirates")) {
        category = "Emirates";
      } else if (lowerSlug.includes("singapore")) {
        category = "Singapore Airlines";
      } else if (lowerSlug.includes("allegiant")) {
        category = "Allegiant Air";
      } else if (lowerSlug.includes("airlines-phone")) {
        category = "Airlines";
      }

      return {
        title: cleanTitle,
        url: `/blog/${slug}/`,
        category,
        description: `Read our complete guide about ${cleanTitle}.`,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return {
    props: {
      blogs,
    },
  };
}