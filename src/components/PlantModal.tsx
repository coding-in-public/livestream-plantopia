import { useRef } from "react";
import Button from "./Button";
import Plant from "@/icons/react/plant";
import Input from "./Input";

const PlantModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = (e: any) => {
    if (e.currentTarget === e.target) {
      closeDialog();
    }
  };

  const closeDialog = () => {
    dialogRef.current && dialogRef.current.close();
  };

  const openDialog = () => {
    dialogRef.current && dialogRef.current.show();
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        className="fixed inset-0 backdrop:bg-slate-900"
        onClick={handleClose}
      >
        <form
          className="bg-slate-50 p-6 shadow-2xl shadow-slate-900/40 grid gap-2.5"
          method="POST"
        >
          {/* HTML SANITIZE */}
          <input
            type="text"
            name="action"
            value={"add-plant"}
            readOnly
            hidden
          />
          <Input label="Plant Name" />
          <Input label="Plant Location" />
          <Input label="Plant Picture" />
          <Input label="Next Watering" />
          <Input label="Water Frequency" />
          <Button handleSubmit={openDialog}>
            <Plant />
            <span className="mt-0.5">Add Plant</span>
          </Button>
        </form>
      </dialog>
      <Button handleSubmit={openDialog}>
        <Plant />
        <span className="mt-0.5">Add Plant</span>
      </Button>
    </>
  );
};
export default PlantModal;
