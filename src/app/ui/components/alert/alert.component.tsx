import { AlertProps } from "./alert.types";
import { alertData } from "./data/alert.data";

const Alert = ({ showAlert, message, type }: AlertProps) => {
  if (!showAlert) return null;

  return (
    <>
      <div
        className={`fixed top-5 right-24 flex items-center justify-center z-50`}
        role="alert"
      >
        <div className={alertData[type].styled}>
          <p className="font-bold">{alertData[type].text}</p>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Alert;
