// Footer.jsx
import { icons } from "../data";

export default function Footer() {
  return (
    <footer>
      {/* List */}
      <div id="listWrapper">
        <ul id="footerList">
          <li>التسليف العيني</li>
          <li>النماذج الالكترونية</li>
          <li>تقارير سنوية</li>
          <li>تقارير مالية</li>
          <li>التسليف النقدي</li>
          <li>التسليف العيني</li>
          <li>النماذج الالكترونية</li>
          <li>مجلس الادارة</li>
        </ul>
      </div>
      <div id="footerBottom">
        <p>© 2025 جمعية الموظفين الحكوميين</p>
        <div id="socialMedia">
          {icons.map((icon) => (
            <img key={icon.id} src={icon.svg} alt="icon" />
          ))}
        </div>
        <p>سياسة الخصوصية | الشروط والاحكام</p>
      </div>
    </footer>
  );
}
