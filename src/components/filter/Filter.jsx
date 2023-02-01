import React from 'react';
import { FilterStyle } from './Filter.style';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFilter,
  setFilter,
  filterCategory,
} from '../../redux/reducer/FilterSlice';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterStyle>
      <div className="cat">
        <label htmlFor="category">category</label>
        <select
          name="category"
          id="category"
          className="decorated"
          onChange={(e) =>
            dispatch(setFilter({ ...filter, category: e.target.value }))
          }
        >
          <option value="any">any</option>
          <option value="hats">hats</option>
          <option value="jackets">jackets</option>
          <option value="mens">mens</option>
          <option value="sneakers">sneakers</option>
          <option value="womens">womens</option>
        </select>
      </div>
      <div className="fav">
        <label htmlFor="favour">favourite</label>
        <select
          name="favour"
          id="favour"
          className="decorated"
          onChange={(e) =>
            dispatch(setFilter({ ...filter, isFavoured: e.target.value }))
          }
        >
          <option value="any">any</option>
          <option value="favoured">favoured</option>
          <option value="notfavoured">not favoured</option>
        </select>
      </div>
      <div className="pri">
        <label htmlFor="price">price</label>
        <select
          name="price"
          id="price"
          className="decorated"
          onChange={(e) =>
            dispatch(setFilter({ ...filter, price: e.target.value }))
          }
        >
          <option value="any">any</option>
          <option value="20">&lt; $20</option>
          <option value="50">&lt; $50</option>
          <option value="100">&lt; $100</option>
          <option value="200">&lt; $200</option>
        </select>
      </div>
    </FilterStyle>
  );
};

export default Filter;
