// AGAR USER URL ME KUSH BHI SEARCH KAREGA TO ERROR PAGE THROW HO JAYEGA

import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
    <div className="error-content">
      <h1>Opps! An error occured.</h1>
      {error && <p>{error.data}</p>}
    </div>
      
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </>
  );
};
