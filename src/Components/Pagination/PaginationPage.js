import React, { useState } from "react";
import Pagination from './Pagination';


const mockData = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = mockData.slice(indexOfFirst, indexOfLast);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Paginated Mock Data</h2>
      <ul>
        {currentItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={mockData.length}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default PaginationPage;
