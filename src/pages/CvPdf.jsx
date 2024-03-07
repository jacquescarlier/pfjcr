import * as React from 'react';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Link } from "react-router-dom"
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Curiculum = () => {
    
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
    });
    window.scrollTo(0, 0)
    return (
        <div className='container-general'>
            <div className='retour'>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div className="cvpdf">
                        <Viewer fileUrl="./cv2024.pdf" defaultScale={SpecialZoomLevel.PageFit} plugins={[defaultLayoutPluginInstance]} />
                    </div>
                </Worker>
            </div>
        </div>
    );
};

export default Curiculum;