import { React, useState, useEffect } from "react";
import "./Sec1.css";
import { Pagination } from "../Paginate";
import { useDispatch } from "react-redux";
import { acLoading } from "../../../Redux/Loading";
import axios from "axios";

export function Sec1() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acLoading(true));
    axios(`${"https://honey.pandashop.uz/product/view"}`, {
      headers: {
        token: "qev234-23fvg24-vg24tae",
      },
    })
      .then((res) => {
        dispatch(acLoading(false));
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
      });
  }, [dispatch]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div id="product-sec1">
        <div className="product-sec1-container">
          {currentPosts.map((item) => {
            return (
              <div key={item.id} className="product-sec1-card">
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
          totalPosts={data.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}