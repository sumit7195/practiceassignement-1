import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchDetail } from "../redux/actions";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";
const About = (props) => {
  const location = useLocation();

  useEffect(() => {
    props.fetchDetail(location.state);
  }, []);

  const loading = useSelector((state) => state.loading);
  const product = useSelector((state) => state.product);
  const error = useSelector((state) => state.error);

  return loading === true ? (
    <div className="loader"></div>
  ) : (
    <div className="productDetail">
      {product.map((data) => {
        return (
          <>
            <div className="imgDiv">
              {" "}
              <img src={data.image} alt="" />{" "}
            </div>
            <div className="brand">
              {" "}
              <h3>{data.title}</h3>
              <h3>brand- {data.brand}</h3>
              <h3>price-{data.price}Rs</h3>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default connect(null, { fetchDetail })(About);
