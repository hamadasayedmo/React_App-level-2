import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { useContext } from "react";
import ThemeProvider from "../context/ContextData";

const SignUp = () => {
  // use Context
  const { theme } = useContext(ThemeProvider);

  return (
    <div>
      <>
        <Helmet>
          <title>Sign Up</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>

        <Header />
        <main className={`myHeader ${theme}`}>
          <form action="">
            <input
              type="text"
              name="text-name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="text-name"
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter PassWord"
              required
            />
            <input
              type="text"
              name="text-user-name"
              placeholder="User Name"
              required
            />
            <input type="submit" value="Sign Up" className="btn" />
          </form>
          <div className="signin-to-signup">
            <p>
              Do you have an account{" "}
              <Link to="/signin" className="link">
                Sign in
              </Link>
            </p>
          </div>
        </main>
        <Footer />
      </>
    </div>
  );
};

export default SignUp;
