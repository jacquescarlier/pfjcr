import React, { useRef } from "react";
import { Modal } from 'react-responsive-modal';
import { useState } from "react";
import Carousel from '../carousel/Carousel.jsx'
import 'react-responsive-modal/styles.css';
import PortfolioDetail from "../portfolioDetail/PortfolioDetail.jsx";
import PortfolioDropdown from "../portfolioDropdown/PortfolioDropdown.jsx";
import "./custom-animation.css"

function CardModal({ projects }) {

    const [selectedItem, setSelectedItem] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const modalRef = useRef(null);

    const openModal = (id) => {
        setSelectedItem(projects.find(project => project.id === id));
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <h2>Projects</h2>
            <div className="card-style" id="project">
                {projects.map(project => (
                    <div key={project.id} className="card" onClick={() => openModal(project.id)} >
                        <img
                            loading="lazy"
                            src={project.cover}
                            alt={project.alt}
                            style={{ cursor: 'pointer' }}
                        />
                        <h3 className="card-title">{project.title}</h3>
                    </div>
                ))}
                <Modal
                    ref={modalRef}
                    open={modalOpen}
                    onClose={closeModal}
                    initialFocusRef={modalRef}
                    center
                    classNames={{
                        overlayAnimationIn: 'customEnterOverlayAnimation',
                        overlayAnimationOut: 'customLeaveOverlayAnimation',
                        modalAnimationIn: 'customEnterModalAnimation',
                        modalAnimationOut: 'customLeaveModalAnimation',
                    }}
                    animationDuration={800}
                >
                    {selectedItem && (
                        <div className="modalContainer">
                            <Carousel pictures={selectedItem.pictures} title={selectedItem.title} />
                            <PortfolioDetail project={selectedItem.project} title={selectedItem.title} tags={selectedItem.tags} />
                            <PortfolioDropdown description={selectedItem.description} langages={selectedItem.logos} />
                            <button className="closeModal" onClick={closeModal}>Fermer</button>
                        </div>
                    )}
                </Modal>
            </div>
        </>
    );
}
export default CardModal;
