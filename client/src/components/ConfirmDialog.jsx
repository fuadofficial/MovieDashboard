import { BiTrashAlt } from "react-icons/bi";

function ConfirmDialog(props) {
  const handleConfirm = () => {
    if (window.confirm(props.message)) {
      props.onConfirm();
    }
  };

  return <button onClick={handleConfirm}><BiTrashAlt/></button>;
}

export default ConfirmDialog;
