import Button from "../components/Button";
import LostImage from "../assets/lost.jpg";

function Notfound() {
  return (
    <div className="w-full min-h-screen overflow-y-auto flex flex-col items-center justify-center px-4 py-8 text-white space-y-4">
      <img src={LostImage} alt="Not found" className="max-w-sm" />
      <p>You seem lost...</p>
      <Button
        width={200}
        classnames="text-black"
        onClick={() => window.history.back()}>
        Find my way back
      </Button>
    </div>
  );
}

export default Notfound;
