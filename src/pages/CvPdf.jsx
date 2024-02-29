import Email from "../components/contactEmail/Email";
import { Document, Page } from 'react-pdf';
import cvPDF from '../datas/cv2024.pdf';

export default function Curiculum() {

    return (
        <>
            <div>
            <iframe src="cvPDF&embedded=true" frameborder="0" height="500px" width="100%"></iframe>
            
            </div>
            <Email />
        </>
    );
}

