import { React, useState } from "react";
import "./Sec1.css";
import { Pagination } from "../Paginate";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Sec1() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  const product = useSelector((state) => state.product);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div id="product-sec1">
      <div className="product-sec1-container">
        {currentPosts.map((item, index) => {
          return (
            <div
              key={index}
              className="product-sec1-card"
              onClick={() => {
                navigate(`/product_view/${item.id}`);
              }}
            >
              <figure className="product-sec1-figure">
                <img src={item.img[0]} alt="" />
              </figure>

              <div className="product-sec1-texts">
                <p>
                  {item.name} {item.weight}
                </p>
                <p>{item.price} so'm</p>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={product.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
