"use client";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="openClose">
      {isOpen ? (
        <RiMenu2Fill size={30} />
      ) : (
        <>
          <div className="side">
            {/* list */}
            <div className="mobileList">
              <IoClose size={30} />
              <ul>
                <li>اتصل بنا</li>
                <li>العضوية</li>
                <li>ميديا</li>
                <li>المكتبة الالكترونية</li>
                <li>الخدمات</li>
                <li>عن الجمعية</li>
              </ul>
              <div className="sideImg">
                <p>استعلام</p>
                <img src="inquiry.svg" alt="svg" className="sideSvg" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
