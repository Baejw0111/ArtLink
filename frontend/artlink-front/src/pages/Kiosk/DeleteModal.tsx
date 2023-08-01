import styles from "./DeleteModal.module.css";

// 키오스크에서 작품 삭제 시 뜨는 확인용 모달창

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void; // 값이 변경될 때 호출될 콜백 함수
}

function DeleteModal({ isOpen, onClose, onDelete }: Props) {
  const handleConfirm = () => {
    onDelete();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles["modal-back"]}>
      <div className={styles["modal-window"]}>
        <h2>{`해당 작품을 목록에서 삭제하시겠습니까?`}</h2>
        <div className={styles["button-wrapper"]}>
          <button className={styles["confirm-button"]} onClick={handleConfirm}>
            확인
          </button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;