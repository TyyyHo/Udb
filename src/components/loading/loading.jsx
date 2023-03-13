import "./loading.scss";
import ladingImg from "./asset/loading.webp";

const Loading = () => {
  return (
    <div className="loading">
      <img loading="eager" src={ladingImg} alt="Loading" />
    </div>
  );
};

export default Loading;
