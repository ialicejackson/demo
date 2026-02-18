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
          CloudCorp
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
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

            <li className="nav-item">
              <Link href="/microsoft-cloud" className={`nav-link ${isActive("/microsoft-cloud")}`}>
                Microsoft Cloud
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/azure" className="dropdown-item">
                    Azure
                  </Link>
                </li>
                <li>
                  <Link href="/dynamics-365" className="dropdown-item">
                    Dynamics 365
                  </Link>
                </li>
                <li>
                  <Link href="/power-platform" className="dropdown-item">
                    Power Platform
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/about" className={`nav-link ${isActive("/about")}`}>
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact" className="btn btn-primary ms-lg-3 px-4">
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </nav>
    </header>
  );
}
