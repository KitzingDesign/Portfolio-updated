import styles from "./ToastModal.module.scss";
import matImage from "@/assets/images/home/Matmatmaten.png";
import { FiX } from "react-icons/fi";

interface ToastModalProps {
  message: string;
  buttonText: string;
  onButtonClick?: () => void;
  onClose: () => void;
}

const ToastModal = ({
  message,
  buttonText,
  onButtonClick,
  onClose,
}: ToastModalProps) => {
  const handleButtonClick = () => {
    window.open("https://www.matmatmaten.com", "_blank");
    onButtonClick?.();
  };

  return (
    <div className={styles.toasterModal}>
      <button className={styles.closeButton} onClick={onClose}>
        <FiX className={styles.closeIcon} />
      </button>
      <div className={styles.content}>
        <img src={matImage} alt="Illustration" className={styles.image} />
        <div className={styles.textContent}>
          <h3>Hey There 👋</h3>
          <p>{message}</p>
          <button className={styles.actionButton} onClick={handleButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToastModal;
