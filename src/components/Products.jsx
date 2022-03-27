import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortByDsc, sortByAsc } from "../redux/actions";
import "../App.css";
const Products = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  const product = useSelector((state) => state.product);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  return loading === true ? (
    <div className="loader"></div>
  ) : (
    <div className="maindiv">
      <div className="select">
        <select
          name="default"
          id="sort"
          onChange={(e) =>
            e.target.value == "sortByAsc"
              ? dispatch(sortByAsc())
              : e.target.value == "sortByDsc" ? dispatch(sortByDsc()) : ""
          }
        >
          <option value="default">default</option>
          <option value="sortByAsc">low to high</option>

          <option value="sortByDsc">high to low</option>
        </select>
      </div>

      {product.map((data) => {
        return (
          <div key={data.id} className="prodDiv">
            <div className="image">
              <img src={`${data.image}`} alt="" />
            </div>
            <h3>{data.title}</h3>
            <div className="price">
              {" "}
              <p>{data.brand}</p>
              <p>{data.category}</p>
              <p>{data.price}-Rs</p>
            </div>

            <button className="buy">Buy</button>
          </div>
        );
      })}
    </div>
  );
};

export default connect(null, { fetchData })(Products);
