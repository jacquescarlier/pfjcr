import * as React from 'react';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Link } from "react-router-dom"
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Curiculum = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className='retour'>
            <Link
                to="/"
            >
                <li>Home</li>
            </Link>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">


                <div
                    style={{
                        height: '900px',
                        width: '900px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >

                    <Viewer fileUrl="./cv2024.pdf" defaultScale={SpecialZoomLevel.PageFit} plugins={[defaultLayoutPluginInstance]} />
                </div>
            </Worker>
        </div>
    );
};

export default Curiculum;