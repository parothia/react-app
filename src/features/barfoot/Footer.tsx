import { useFormik } from "formik";
import React from "react";
import Button from "../../components/Button";
import TextBox from "../../components/Textbox/Textbox";

function Footer() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: () => {
      console.log("submit");
    },
  });
  return (
    <div className="footer-main bg-blue-more mt-8 text-white">
      <div className="footer px-8">
        <div className="inner-footer py-8">
          <ul className="ul-flex flex justify-evenly">
            <li className="content">
              <span className="name font-semibold">PAROTHIA</span>
              <ul className="ul-flex mt-4">
                <li className="">Heera Cyber Views, 682030 Kerala India</li>
                <li className="">
                  <span>Email:</span> anurag.parothia@hatio.in
                </li>
                <li className="">
                  <span className="">Phone:</span> +9906712108
                </li>
              </ul>
            </li>
            <li className="content">
              <span className="links font-semibold">Useful Links</span>
              <ul className="ul-flex justify-between mt-4">
                <li className="content">Home</li>
                <li className="">About Me</li>
                <li className="">Crypto</li>
              </ul>
            </li>
            <li className="content">
              <div className="services">
                <span className="services font-semibold">Our Services</span>
                <ul className="ul-flex justify-between mt-4">
                  <li className="content">Filhal</li>
                  <li className="">to nhi</li>
                  <li className="">BDSK</li>
                </ul>
              </div>
            </li>
            <li className="content w-80">
              <span className="news font-semibold">Our Newsletter</span>
              <div className="newsletter relative mt-4">
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className={`kuch border-solid border-2 rounded bg-slate-100 m-0 px-2 h-12 text-black`}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div className="newsbtn absolute -right-6 top-0">
                  <Button btnName="Subscribe" testId="subscribe" />
                </div>
              </div>
            </li>
          </ul>
          <div className="rule mt-4 text-center">
            <hr />
            <div className="copyright mt-2 -mb-4 text-blue-less">
              @2022 Anurag Parothia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
