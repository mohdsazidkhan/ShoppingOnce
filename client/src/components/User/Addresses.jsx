import { useEffect } from 'react';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import Loader from '../Layouts/Loader';
import MetaData from '../Layouts/MetaData';
import { getAddresses } from '../../actions/cartAction';
import { useSnackbar } from 'notistack';

const Addresses = () => {

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    

    const { loading, isAuthenticated, user } = useSelector(state => state.user);

    const { shippingInfo } = useSelector((state) => state.cart);

    console.log(shippingInfo);

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login")
        }
        dispatch(getAddresses({userID: user._id}));
    }, [dispatch, isAuthenticated, navigate, enqueueSnackbar]);

    

    return (
        <>
            <MetaData title="My Addresss" />

            {loading ? <Loader /> :
                <>
                    <main className="w-full mt-16">

                        {/* <!-- row --> */}
                        <div className="flex gap-3.5 container sm:mt-4 m-auto mb-7">

                            <Sidebar activeTab={"profile"} />

                            {/* <!-- details column --> */}
                            <div className="flex-1 overflow-hidden shadow bg-white">
                                {/* <!-- edit Address container --> */}
                                <div className="flex flex-col gap-12 m-4 sm:mx-8 sm:my-6">
                                    {/* <!-- Address info --> */}
                                    <div className="flex flex-col gap-5 items-start">

                                        <span className="font-medium text-lg">Address <Link to="/shipping" className="text-sm text-primary-blue font-medium ml-8 cursor-pointer">Edit</Link></span>
                                        {
                                        shippingInfo.loading 
                                        ? 
                                        <Loader /> 
                                        :
                                        <div className='addressDetails'>
                                            <p><strong>Address:</strong> {shippingInfo.address}</p>
                                            <p><strong>Landmark:</strong> {shippingInfo.landmark}</p>
                                            <p><strong>City:</strong> {shippingInfo.city}</p>
                                            <p><strong>State:</strong> {shippingInfo.state}</p>
                                            <p><strong>Pincode:</strong> {shippingInfo.pincode}</p>
                                            <p><strong>Country:</strong> {shippingInfo.country}</p>
                                            <p><strong>Phone No:</strong> {shippingInfo.phoneNo}</p>
                                        </div>
                                        }
                                    </div>
                                    {/* <!-- Address info --> */}
                                </div>
                            </div>
                            {/* <!-- details column --> */}
                        </div>
                    </main>
                </>
            }
        </>
    );
};

export default Addresses;
