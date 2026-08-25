import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path ? "active fw-bold text-primary" : "";
  };

  return (
    <header className="shadow-sm sticky-top bg-white">
      <nav className="navbar navbar-expand-lg navbar-light container py-3">
        {/* Logo */}
        <Link href="/" className="navbar-brand fw-bold text-primary fs-4">
          GetAdvisor
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive("/")}`}>
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Airlines
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link href="/jetblue/" className="dropdown-item">
                    JetBlue
                  </Link>
                </li>

                <li>
                  <Link href="/delta/" className="dropdown-item">
                    Delta Airlines
                  </Link>
                </li>

                <li>
                  <Link
                    href="/ways-to-get-allegiant-air-to-respond-quickly/"
                    className="dropdown-item"
                  >
                    Allegiant Air
                  </Link>
                </li>

                <li>
                  <Link
                    href="/Asiana-Airlines-Contact/"
                    className="dropdown-item"
                  >
                    Asiana Airlines
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                href="/expedia/"
                className={`nav-link ${isActive("/expedia")}`}
              >
                Expedia
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/jetblue/"
                className={`nav-link ${isActive("/jetblue")}`}
              >
                JetBlue
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/delta/"
                className={`nav-link ${isActive("/delta")}`}
              >
                Delta
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/about/"
                className={`nav-link ${isActive("/about")}`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}