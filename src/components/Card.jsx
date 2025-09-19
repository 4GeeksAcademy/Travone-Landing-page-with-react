
export default function Card({ image, title, text, btnText }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text">{text}</p>
          <div className="mt-auto text-center">
            <a href="#" className="btn btn-outline-primary">{btnText}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
