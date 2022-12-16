import { useContext, Fragment, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import Button from '../button/Button';
// import { addProductDocFromAuth } from '../../utils/firebase';
import { useEffect } from 'react';
const Upload = () => {
  const [products, setProducts] = useState([]);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const handleSubmit = () => {};

  const handleClick = async () => {};

  return (
    <div>
      {currentUser && (
        <Fragment>
          <h4>name:{currentUser.displayName}</h4>
          <h4>email:{currentUser.email}</h4>
        </Fragment>
      )}
      <div>upload a product</div>
      <form className="signin__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="product name .."
          name="name"
          // value={email}
          // onChange={handleChange}
        />
        <input
          type="text"
          placeholder="product price.."
          name="price"
          // value={password}
          // onChange={handleChange}
        />
        <textarea
          name="desciption"
          placeholder="product discription"
          cols="30"
          rows="10"
        ></textarea>
        <input
          type="file"
          // onChange={(event) => setImageUpload(event.target.files[0])}
        />
        <Button type="button" children="ADD" onClick={() => handleClick()} />

        {currentUser && (
          <Fragment>
            {products.map((pro) => (
              <Fragment key={pro.id}>
                <h2>{pro.id}</h2>
                <h2>{pro.prodocutName}</h2>
                <h2>{pro.price}</h2>
                <h2>{pro.description}</h2>
                <h2>{pro.imageUrl}</h2>
              </Fragment>
            ))}
          </Fragment>
        )}
      </form>
    </div>
  );
};

export default Upload;
