import { Header } from "./components/Header/Header";

const headerData = {
  title: "Lets watch movie together Home Page",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestiae modi nemo esse quia nisi molestias sunt ratione similique enim.",
  buttonText: "Watch Now",
  redirectTo: "/movies",
  imageUrl: "/netflix-logo.svg",
};

const Page: React.FC = () => {
  return (
    <div>
      <Header {...headerData} />
    </div>
  );
};

export default Page;
