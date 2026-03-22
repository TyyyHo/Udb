import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Router_restoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


export default Router_restoration