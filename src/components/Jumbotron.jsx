export default function Jumbotron({ title, text, btnText }) {
  return (
    <div className="container my-5">
      <div className="p-5 bg-light rounded-3">
        <h1 className="display-1 fw-light">{title}</h1>
        <p className="lead">{text}</p>
        <button className="btn btn-primary btn-lg">{btnText}</button>
      </div>
    </div>
  );
}
