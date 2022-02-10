import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAllFilmsQuery } from "../../generated/graphql";
import { FilmSelector } from "./index.styled";
import { FaChevronDown } from "react-icons/fa";

function FilmsSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useAllFilmsQuery();
  const ref = useRef<any>();

  useEffect(() => {
    if (isOpen) {
      ref.current.focus();
    }
  }, [isOpen]);

  return (
    <FilmSelector onClick={() => setIsOpen(true)}>
      <div>
        <h5>STAR WARS FILM SELECTOR</h5>
      </div>
      <div>
        <FaChevronDown />
      </div>
      {isOpen && (
        <div
          ref={ref}
          tabIndex={0}
          className="list-options"
          onBlur={() =>
            setTimeout(() => {
              setIsOpen(false);
            }, 500)
          }
        >
          {data?.allFilms?.films?.map((film, idx) => (
            <Link key={idx} to={`/films/${film?.id}`}>
              <p key={idx}>{film?.title}</p>
            </Link>
          ))}
        </div>
      )}
    </FilmSelector>
  );
}

export default FilmsSelector;
