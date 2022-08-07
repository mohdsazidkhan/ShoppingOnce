import { useEffect } from 'react';
import Banner from './Banner/Banner';
import ProductSlider from './ProductSlider/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData';

const Home = () => {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="ShoppingOnce : Online Shopping for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books" />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner />
        {!loading && <ProductSlider title={"Trending Products"} tagline={"Based on Your Activity"} />}
      </main>
    </>
  );
};

export default Home;
