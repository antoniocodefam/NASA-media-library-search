import Button from "react-bootstrap/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      title="Back"
      size="sm"
      variant="secondary"
      style={{ width: "fit-content" }}
      onClick={() => {
        navigate(-1);
      }}
    >
      <IoIosArrowBack />
    </Button>
  );
}
