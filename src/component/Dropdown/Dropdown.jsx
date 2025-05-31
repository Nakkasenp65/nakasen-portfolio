"use client";
import { useState } from "react";
import s from "./Dropdown.module.css";
import { GoTriangleDown } from "react-icons/go";
export default function Dropdown({ setSortOrder, sortOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div
          className={`${s.select} ${isOpen ? s.hidden : null}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={s.items}>
            <span className={s.item} onClick={() => setSortOrder("asc")}>
              Sort by oldest
            </span>
            <hr className={s.line} />
            <span className={s.item} onClick={() => setSortOrder("desc")}>
              Sort by newest
            </span>
          </div>
        </div>
      ) : (
        <div className={s.select} onClick={() => setIsOpen(!isOpen)}>
          <div className={s.item}>
            {sortOrder === "asc" ? "Sort by oldest" : "Sort by newest"}
          </div>
          <div className={s.icon}>
            <GoTriangleDown
              className={`${s.triangle} ${isOpen ? s.active : null}`}
            />
          </div>
        </div>
      )}
    </>
  );
}
