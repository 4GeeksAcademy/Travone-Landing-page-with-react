import Navbar from "./components/Navbar.jsx";
import Jumbotron from "./components/Jumbotron";
import CardGrid from "./components/CardGrid";


const placeholder = "https://placehold.co/500x325/000000/FFFFFF/png?";

const cardsData = [
  {
    image: placeholder,
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    btnText: "Find Out More",
  },
  {
    image: placeholder,
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    btnText: "Find Out More",
  },
  {
    image: placeholder,
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    btnText: "Find Out More",
  },
  {
    image: placeholder,
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    btnText: "Find Out More",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron
        title="A Warm Welcome!"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
        btnText="Call to action!"
      />
      <CardGrid cards={cardsData} />
    </>
  );
}
