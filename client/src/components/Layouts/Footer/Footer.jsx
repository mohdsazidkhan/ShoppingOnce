import { useEffect, useState } from 'react';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "https://www.shoppingonce.com/helpcentre",
      },
      {
        name: "About Us",
        redirect: "https://www.shoppingonce.com/about-us",
      },
      {
        name: "Careers",
        redirect: "https://www.flipkartcareers.com",
      },
      {
        name: "ShoppingOnce Stories",
        redirect: "https://stories.shoppingonce.com",
      },
      {
        name: "Press",
        redirect: "https://stories.shoppingonce.com/category/top-stories/news",
      },
      {
        name: "Corporate Information",
        redirect: "https://www.shoppingonce.com/corporate-information",
      },
    ]
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
        redirect: "https://www.shoppingonce.com/pages/payments",
      },
      {
        name: "Shipping",
        redirect: "https://www.shoppingonce.com/pages/shipping",
      },
      {
        name: "Cancellation & Returns",
        redirect: "https://www.shoppingonce.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
      },
      {
        name: "FAQ",
        redirect: "https://www.shoppingonce.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
      }
    ]
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        redirect: "https://www.shoppingonce.com/pages/returnpolicy",
      },
      {
        name: "Terms Of Use",
        redirect: "https://www.shoppingonce.com/pages/terms",
      },
      {
        name: "Security",
        redirect: "https://www.shoppingonce.com/pages/paymentsecurity",
      },
      {
        name: "Privacy",
        redirect: "https://www.shoppingonce.com/pages/privacypolicy",
      },
      {
        name: "Sitemap",
        redirect: "https://www.shoppingonce.com/sitemap",
      },
      {
        name: "EPR Compliance",
        redirect: "https://www.shoppingonce.com/pages/ewaste-compliance-tnc",
      },
    ]
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/shoppignonce",
      },
      {
        name: "Twitter",
        redirect: "https://twitter.com/shoppignonce",
      },
      {
        name: "YouTube",
        redirect: "https://www.youtube.com/shoppignonce",
      },
      {
        name: "Instagram",
        redirect: "https://www.instagram.com/shoppignonce",
      },
      {
        name: "Linkedin",
        redirect: "https://www.linkedin.com/shoppignonce",
      },
      {
        name: "Pinterest",
        redirect: "https://www.pinterest.com/shoppignonce",
      }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
          <div className="container px-1 m-auto flex justify-between items-center relative">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">
              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 mr-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}
            </div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Mail Us:</h2>
                <p className="mt-2 leading-5">ShoppingOnce Private Limited,<br />
                  Buildings Alyssa, Begonia &<br />
                  Clove Embassy Tech Village,<br />
                  Outer Ring Road,<br />
                  Bengaluru, 560103,<br />
                  Karnataka, India
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Registered Office Address:</h2>
                <p className="mt-2 leading-5">ShoppingOnce Private Limited,<br />
                  Begonia Tech Village,<br />
                  Outer Ring Road,<br />
                  Bengaluru, 560103,<br />
                  Karnataka, India <br />
                  CIN : U51109KA2012PTC066107<br />
                  Telephone: <a className="text-primary-blue" href="tel:18002029898">1800 202 9898</a>
                </p>
              </div>
            </div>
            </div>
          </footer>
          {/* <!-- footer ends --> */}
          
            <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
              <div className="container px-1 m-auto flex justify-between items-center relative">
                <span>&copy; 2020-{new Date().getFullYear()} shoppingonce.com</span>
                <img draggable="false" src={paymentMethods} alt="Card Payment" />
              </div>
          </div>
        </>
      )}
    </>
  )
};

export default Footer;
