"use client";
import { useState } from "react";
import s from "./Dropdown.module.css";
import { GoTriangleDown } from "react-icons/go";
export default function Dropdown({ item = "Date", setSortOrder, sortOrder }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <div
          className={`${s.select} ${isOpen ? s.hidden : null}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={s.items}>
            <span className={s.item} onClick={() => setSortOrder("asc")}>
              Asc
            </span>
            <hr className={s.line} />
            <span className={s.item} onClick={() => setSortOrder("desc")}>
              Desc
            </span>
          </div>
        </div>
      ) : (
        <div className={s.select} onClick={() => setIsOpen(!isOpen)}>
          <div className={s.item}>Sort by {item}</div>
          <div className={s.icon}>
            {sortOrder}
            <GoTriangleDown
              className={`${s.triangle} ${isOpen ? s.active : null}`}
            />
          </div>
        </div>
      )}
    </>
  );
}
