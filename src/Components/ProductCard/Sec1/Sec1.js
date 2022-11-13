import { React, useState, useEffect } from "react";
import "./Sec1.css";
import { Pagination } from "../Paginate";
import { useDispatch, useSelector } from "react-redux";
import { acLoading } from "../../../Redux/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Sec1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [data, setData] = useState([]);

  const relodeProduct = useSelector((state) => state.relodeProduct);

  useEffect(() => {
    dispatch(acLoading(true));
    axios(`${"https://honey.pandashop.uz/product/view"}`, {
      method: "GET",
      headers: {
        token: "",
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
  }, [dispatch, relodeProduct]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div id="product-sec1">
      <div className="product-sec1-container">
        {currentPosts.map((item) => {
          return (
            <div
              key={item.id}
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
        totalPosts={data.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
