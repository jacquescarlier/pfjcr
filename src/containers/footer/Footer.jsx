import { Modal } from 'react-responsive-modal';
import Curiculum from "../curiculumModal/CvPdf";
import { useState, useRef } from "react";
import BackLinks from "../../components/backLinks/BackLinks";
function Footer() {

  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = (id) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <footer id="contact">
        <ul>
          <li> <a href="https://github.com/jacquescarlier/" target="_blank" rel="noopener"> <img src="./images/github.webp" alt="logo github" /> </a> </li>
          <li><a href="https://www.linkedin.com/in/jacques-carlier-9a39121bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener"> <img src="./images/linkedin.webp" alt="logo linkedin" /> </a></li>
          <li><a href="#" onClick={() => openModal()}><img src="./images/logoCV.webp" alt="logo email" id="email" /></a></li>
        </ul>
        <span className="topLink"><a href="#top">TOP</a></span>
        <BackLinks />
      </footer>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        ref={modalRef}
        center
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={1000}
      >
        <div>
          <Curiculum />
        </div>
      </Modal>
    </>
  );
}
export default Footer;
