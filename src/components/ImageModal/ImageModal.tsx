import Modal from 'react-modal' ;
import { MouseEvent } from 'react';

type Props = {
  imgSrc: string | null;
  isOpen: boolean;
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
}

function ImageModal({imgSrc, isOpen, onClose}: Props) {
  Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

    return (
      <div>
      <Modal 
        isOpen={isOpen} 
        onRequestClose={onClose} 
        style={customStyles} 
        contentLabel="Example Modal"
      >
        {imgSrc && <img src={imgSrc} alt='fesfwfewfd'/>}
        
      </Modal>
    </div>
    )
}

export default ImageModal