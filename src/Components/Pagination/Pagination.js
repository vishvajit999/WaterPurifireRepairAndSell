// src/Components/Pagination/Pagination.js
import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };

  return (
    <nav style={{ marginTop: "20px" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "8px", justifyContent: "center" }}>
        <li>
          <button onClick={handlePrev} disabled={currentPage === 1}>
            &lt; Previous
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i}>
            <button
              onClick={() => paginate(i + 1)}
              style={{
                backgroundColor: currentPage === i + 1 ? "#007bff" : "#fff",
                color: currentPage === i + 1 ? "#fff" : "#000",
              }}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li>
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Next &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
