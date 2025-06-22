import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      {/* Left Side */}
      <div className="navContainer">
        <div className="header-wrapper">
          <div id="leftBtn">
            <p>استعلام</p>
            <img src="inquiry.svg" alt="svg" id="navSvg" />
          </div>
          {/* list */}
          <div id="navList">
            <div id="searchLogo">
              <img src="/searchIcon.svg" alt="search svg" />
            </div>
            <ul>
              <li>اتصل بنا</li>
              <li>العضوية</li>
              <li>ميديا</li>
              <li>المكتبة الالكترونية</li>
              <li>الخدمات</li>
              <li>عن الجمعية</li>
            </ul>
          </div>
          {/* Right Side */}
          <Link href={"/"}>
            <img src="/logo.svg" alt="logo" id="logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
