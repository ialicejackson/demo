import Head from "next/head";
import { useState } from "react";

export default function ExpediaReviews() {
  const [rating, setRating] = useState(0);

  const [reviews, setReviews] = useState([
    {
      name: "Demo Reviewer 01",
      rating: 4,
      title: "Helpful booking support experience",
      review:
        "Sample review: Expedia customer service information was useful when checking the available options for an existing flight reservation.",
      type: "Customer Service",
      isDemo: true,
    },
    {
      name: "Demo Reviewer 02",
      rating: 4,
      title: "Clear support options",
      review:
        "Sample review: Expedia customer service information helped explain the available options for changing an existing booking.",
      type: "Flight Change",
      isDemo: true,
    },
    {
      name: "Demo Reviewer 03",
      rating: 4,
      title: "Useful refund information",
      review:
        "Sample review: Expedia customer service guidance made the cancellation and refund process easier to understand.",
      type: "Cancellation / Refund",
      isDemo: true,
    },
    {
      name: "Demo Reviewer 04",
      rating: 4,
      title: "Simple reservation guidance",
      review:
        "Sample review: Expedia customer service information was useful when reviewing an existing hotel reservation.",
      type: "Hotel Booking",
      isDemo: true,
    },
    {
      name: "Demo Reviewer 05",
      rating: 4,
      title: "Good flight change guidance",
      review:
        "Sample review: Expedia customer service guidance clearly explained the available options for reviewing a flight change.",
      type: "Flight Change",
      isDemo: true,
    },
    {
      name: "Demo Reviewer 06",
      rating: 4,
      title: "Easy to understand",
      review:
        "Sample review: Expedia customer service information was presented clearly and helped explain available booking support options.",
      type: "Customer Service",
      isDemo: true,
    },
    {
      name: "Demo Reviewer 07",
      rating: 4,
      title: "Helpful cancellation information",
      review:
        "Sample review: Expedia customer service guidance was useful for understanding cancellation and refund options.",
      type: "Cancellation / Refund",
      isDemo: true,
    },
    {
      name: "Demo Reviewer 08",
      rating: 4,
      title: "Good reservation support",
      review:
        "Sample review: Expedia customer service information helped explain how an existing reservation could be managed.",
      type: "Flight Booking",
      isDemo: true,
    },
    {
      name: "Demo Reviewer 09",
      rating: 4,
      title: "Useful travel support information",
      review:
        "Sample review: Expedia customer service guidance provided a useful overview of booking and travel support options.",
      type: "Customer Service",
      isDemo: true,
    },
    {
      name: "Demo Reviewer 10",
      rating: 4,
      title: "Straightforward booking guidance",
      review:
        "Sample review: Expedia customer service information was easy to follow when checking options for an existing trip.",
      type: "Package Booking",
      isDemo: true,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    review: "",
    type: "Flight Booking",
  });

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((total, item) => total + item.rating, 0) /
        reviews.length
      : 0;

  const roundedAverage = Math.round(averageRating);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.title || !form.review || rating === 0) {
      alert("Please complete all required fields and select a rating.");
      return;
    }

    const newReview = {
      name: form.name,
      rating: rating,
      title: form.title,
      review: form.review,
      type: form.type,
      isDemo: false,
    };

    setReviews((prev) => [newReview, ...prev]);

    setForm({
      name: "",
      email: "",
      title: "",
      review: "",
      type: "Flight Booking",
    });

    setRating(0);
  };

  const renderStars = (value, large = false) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`${large ? "header-star" : "review-star"} ${
          star <= value ? "active-star" : ""
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <Head>
        <title>Expedia Reviews: Ratings & Customer Experiences</title>

        <meta
          name="description"
          content="Read Expedia reviews and share your experience with Expedia customer service, bookings, cancellations, refunds, hotels and travel support."
        />

        <meta
          name="keywords"
          content="Expedia reviews, Expedia customer service, Expedia customer service reviews, Expedia ratings"
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        {/* TOP BUSINESS HEADER */}
        <section className="business-header">
          <div className="container">
            <div className="page-width">
              <h1 className="business-name">Expedia</h1>

              <p className="business-category">Online Travel Agency</p>

              <div className="rating-row">
                <strong className="average-rating">
                  {averageRating.toFixed(1)}
                </strong>

                <div className="header-stars">
                  {renderStars(roundedAverage, true)}
                </div>

                <span className="review-count">
                  ({reviews.length} Reviews)
                </span>
              </div>

              <p className="rating-caption">
                Based on {reviews.length} customer reviews
              </p>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="page-width">
              <div className="row g-5">
                {/* LEFT SIDE - REVIEW FORM */}
                <div className="col-lg-7">
                  <h2 className="section-title">
                    Write an Expedia Review
                  </h2>

                  <p className="text-secondary mb-4">
                    Share your experience with an Expedia booking, flight
                    change, hotel reservation, cancellation, refund, or Expedia
                    customer service.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Overall Rating *
                      </label>

                      <div className="rating-picker">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            className="star-button"
                            onClick={() => setRating(star)}
                            aria-label={`${star} star rating`}
                          >
                            <span
                              className={`rating-star ${
                                star <= rating ? "selected" : ""
                              }`}
                            >
                              ★
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />

                      <div className="form-text">
                        Your email will not be displayed publicly.
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        What was your experience about?
                      </label>

                      <select
                        name="type"
                        className="form-select"
                        value={form.type}
                        onChange={handleChange}
                      >
                        <option value="Flight Booking">
                          Flight Booking
                        </option>

                        <option value="Hotel Booking">
                          Hotel Booking
                        </option>

                        <option value="Flight Change">
                          Flight Change
                        </option>

                        <option value="Cancellation / Refund">
                          Cancellation / Refund
                        </option>

                        <option value="Customer Service">
                          Customer Service
                        </option>

                        <option value="Package Booking">
                          Package Booking
                        </option>

                        <option value="Car Rental">
                          Car Rental
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Review Title *
                      </label>

                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Summarise your experience"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Your Review *
                      </label>

                      <textarea
                        name="review"
                        className="form-control"
                        rows={6}
                        value={form.review}
                        onChange={handleChange}
                        placeholder="Tell other travellers about your experience..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>

                {/* RIGHT SIDE - OFFICIAL DETAILS */}
                <div className="col-lg-5">
                  <div className="company-details">
                    <h2 className="h4 fw-bold mb-4">
                      Expedia Official Details
                    </h2>

                    <div className="company-detail-item">
                      <span className="detail-label">Company</span>
                      <p>Expedia, Inc.</p>
                    </div>

                    <div className="company-detail-item">
                      <span className="detail-label">Category</span>
                      <p>Online Travel Agency</p>
                    </div>

                    <div className="company-detail-item">
                      <span className="detail-label">
                        U.S. Address
                      </span>

                      <p>
                        1111 Expedia Group Way W
                        <br />
                        Seattle, WA 98119
                        <br />
                        United States
                      </p>
                    </div>

                    <div className="company-detail-item">
                      <span className="detail-label">
                        Official Website
                      </span>

                      <p>
                        <a
                          href="https://www.expedia.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Expedia.com
                        </a>
                      </p>
                    </div>

                    <div className="company-detail-item">
                      <span className="detail-label">
                        Official Customer Support
                      </span>

                      <p>
                        <a
                          href="https://www.expedia.com/lp/b/getintouch"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Expedia Customer Service
                        </a>
                      </p>

                      <small>
                        Expedia provides the appropriate customer support
                        options based on your booking or trip.
                      </small>
                    </div>

                    <div className="company-detail-item">
                      <span className="detail-label">
                        Corporate Office Phone
                      </span>

                      <p>
                        <a href="tel:+14256797200">
                          +1 425-679-7200
                        </a>
                      </p>

                      <small>
                        Corporate office contact. This is not labelled as
                        Expedia booking customer service.
                      </small>
                    </div>

                    <div className="company-detail-item">
                      <span className="detail-label">
                        Alternative / Third-Party Travel Assistance
                      </span>

                      <p>
                        <a href="tel:+18333194929">
                          +1-833-319-4929
                        </a>
                      </p>

                      <small>
                        Independent third-party travel assistance. This is not
                        Expedia&apos;s official customer-service number.
                      </small>
                    </div>
                  </div>

                  <div className="review-guidelines mt-4">
                    <h2 className="h4 fw-bold mb-3">
                      Review Guidelines
                    </h2>

                    <ul className="mb-0">
                      <li>Share a genuine travel experience.</li>
                      <li>Describe what happened clearly.</li>
                      <li>Do not post booking numbers.</li>
                      <li>Do not share payment information.</li>
                      <li>Avoid personal or sensitive information.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <hr className="my-5" />

              {/* RATING SUMMARY */}
              <section className="rating-summary">
                <h2 className="section-title">
                  Expedia Review Rating
                </h2>

                <div className="summary-row">
                  <div className="overall-score">
                    {averageRating.toFixed(1)}
                  </div>

                  <div>
                    <div className="header-stars">
                      {renderStars(roundedAverage, true)}
                    </div>

                    <p className="text-secondary mb-0 mt-1">
                      Based on {reviews.length} reviews
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-5" />

              {/* REVIEWS */}
              <h2 className="section-title mb-2">
                Recent Expedia Reviews
              </h2>

              <p className="small text-secondary mb-4">
                Demo reviews are displayed for interface preview only and are
                not verified customer testimonials.
              </p>

              {reviews.map((item, index) => (
                <article className="review-item" key={index}>
                  <div className="review-top">
                    <div>
                      <strong className="reviewer-name">
                        {item.name}
                      </strong>

                      {item.isDemo && (
                        <span className="demo-label">
                          Demo Review
                        </span>
                      )}

                      <div className="small text-secondary mt-1">
                        {item.type}
                      </div>
                    </div>

                    <div className="review-stars">
                      {renderStars(item.rating)}
                    </div>
                  </div>

                  <h3 className="h5 fw-bold mt-3">
                    {item.title}
                  </h3>

                  <p className="mb-0">
                    {item.review}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        body {
          margin: 0;
          background: #ffffff;
          color: #202124;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.7;
        }

        .page-width {
          max-width: 1050px;
          margin: 0 auto;
        }

        .business-header {
          background: #ffffff;
          padding: 42px 0;
          border-bottom: 1px solid #e7e7e7;
        }

        .business-name {
          margin: 0 0 4px;
          font-size: 40px;
          font-weight: 500;
        }

        .business-category {
          margin-bottom: 8px;
          color: #555;
          font-size: 16px;
        }

        .rating-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .average-rating {
          font-size: 20px;
        }

        .header-stars {
          display: flex;
          gap: 2px;
        }

        .header-star {
          color: #d9d9d9;
          font-size: 26px;
          line-height: 1;
        }

        .active-star {
          color: #fbbc04;
        }

        .review-count {
          color: #0066cc;
          font-size: 15px;
        }

        .rating-caption {
          margin: 7px 0 0;
          color: #666;
          font-size: 14px;
        }

        .section-title {
          margin-bottom: 18px;
          font-size: 28px;
          font-weight: 700;
        }

        .form-control,
        .form-select {
          padding: 12px 14px;
          border-radius: 7px;
        }

        .rating-picker {
          display: flex;
          gap: 3px;
        }

        .star-button {
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .rating-star {
          color: #d9d9d9;
          font-size: 38px;
          line-height: 1;
        }

        .rating-star.selected {
          color: #fbbc04;
        }

        .company-details {
          padding: 25px;
          border: 1px solid #e1e4e8;
          border-radius: 10px;
          background: #ffffff;
        }

        .company-detail-item {
          padding: 14px 0;
          border-bottom: 1px solid #eeeeee;
        }

        .company-detail-item:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .detail-label {
          display: block;
          margin-bottom: 3px;
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }

        .company-detail-item p {
          margin: 0;
          font-size: 15px;
        }

        .company-detail-item small {
          display: block;
          margin-top: 4px;
          color: #6c757d;
          line-height: 1.5;
        }

        .company-detail-item a {
          font-weight: 600;
          text-decoration: none;
        }

        .company-detail-item a:hover {
          text-decoration: underline;
        }

        .review-guidelines {
          padding: 25px;
          border-radius: 10px;
          background: #f8f9fa;
        }

        .review-guidelines li {
          margin-bottom: 7px;
        }

        .rating-summary {
          padding: 5px 0;
        }

        .summary-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .overall-score {
          font-size: 52px;
          font-weight: 700;
          line-height: 1;
        }

        .review-item {
          padding: 27px 0;
          border-bottom: 1px solid #e5e5e5;
        }

        .review-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
        }

        .reviewer-name {
          font-size: 17px;
        }

        .demo-label {
          display: inline-block;
          margin-left: 8px;
          padding: 3px 8px;
          border-radius: 20px;
          background: #f1f3f5;
          color: #6c757d;
          font-size: 11px;
          font-weight: 700;
        }

        .review-stars {
          display: flex;
          white-space: nowrap;
        }

        .review-star {
          color: #d9d9d9;
          font-size: 21px;
          line-height: 1;
        }

        .review-star.active-star {
          color: #fbbc04;
        }

        @media (max-width: 767px) {
          .business-header {
            padding: 30px 0;
          }

          .business-name {
            font-size: 34px;
          }

          .section-title {
            font-size: 25px;
          }

          .header-star {
            font-size: 23px;
          }

          .rating-star {
            font-size: 33px;
          }

          .overall-score {
            font-size: 44px;
          }
        }
      `}</style>
    </>
  );
}