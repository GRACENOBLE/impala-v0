import Container from "../common/container";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 border  py-4">
      <Container>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Impala</span>
          <Button>LogIn</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
