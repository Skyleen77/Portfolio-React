import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Localisation</span>Melun, Île de France,
        77000
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Email</span>{" "}
        <a href="mailto:steve@mail.com">elsk8@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
