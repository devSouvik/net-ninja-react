import "./title.css";

export const Title = ({ text, subtext }) => {
  return (
    <div className="title-block">
      <h1 className="title">{text}</h1>
      <br />
      <h2 className="subtitles">{subtext}</h2>
    </div>
  );
};

export default Title;
