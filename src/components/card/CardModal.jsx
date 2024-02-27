import React from "react";
import { Modal } from 'react-responsive-modal';
import { useState } from "react";
import Carousel from '../carousel/Carousel.jsx'
import 'react-responsive-modal/styles.css';
import PortfolioDetail from "../portfolioDetail/PortfolioDetail";
import PortfolioDropdown from "../portfolioDropdown/PortfolioDropdown";
import "./custom-animation.css"

function CardModal({ projects }) {

    const [selectedItem, setSelectedItem] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (id) => {
        setSelectedItem(projects.find(project => project.id === id));
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="card-style" id="project">
                {projects.map(project => (
                    <div key={project.id} className="card" onClick={() => openModal(project.id)} >
                        <img
                            loading="lazy"
                            src={project.cover}
                            alt={project.alt}
                            style={{ cursor: 'pointer' }}
                        />
                        <p className="card-title">{project.title}</p>
                    </div>
                ))}
                <Modal
                    open={modalOpen}
                    onClose={closeModal}
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
