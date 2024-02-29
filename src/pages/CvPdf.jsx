import Email from "../components/contactEmail/Email";
import { Document, Page } from 'react-pdf';
import cvPDF from '../datas/cv2024.pdf';

export default function Curiculum() {

    return (
        <>
<iframe src= '../datas/cv2024.pdf' width = "100%"  height= "500px"/>
        <Email />
        </>
    );
}

