import Card from './Card';

export default function CardGrid({ cards }) {
  return (
    <div className="container mb-5">
      <div className="row">
        {cards.map((c, i) => <Card key={i} {...c} />)}
      </div>
    </div>
  );
}
