import DirectoryItem from '../directory-item/DirectoryItem';
import { motion } from 'framer-motion';
import { DirectoryContainer } from './Directory.style';
import { useSelector } from 'react-redux';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/mens',
  },
];

const Directory = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <DirectoryContainer className="noselect">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
      {currentUser ? (
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: [0.5, 0.71, 1, 1.5] }}
          className="greeting"
        >
          Welcome {currentUser.displayName} !
        </motion.div>
      ) : (
        ''
      )}
    </DirectoryContainer>
  );
};

export default Directory;
