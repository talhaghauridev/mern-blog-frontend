import { Button } from "@components/ui";

const Home = () => {
  return (
    <div>
      Home
      <Button variant={"destructive"} to="/">
        Hello
      </Button>
    </div>
  );
};

export default Home;
