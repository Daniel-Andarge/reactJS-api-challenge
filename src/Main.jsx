import React, { useState } from "react";
import { Post } from "./Post";
import { Pagination } from "./Pagination";
import { useFetchData } from "./useFetchData";
import { PostContainer } from "./components/styles/PostContainer.styled";

export const Main = () => {
  const { data } = useFetchData();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

return (
    <React.Fragment>

      <PostContainer>
        {currentRecords.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </PostContainer>

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

   </React.Fragment>
  );
};