import DocViewer, { PDFRenderer } from "@cyntler/react-doc-viewer";


import { Link } from "react-router-dom"

export default function Curiculum() {
    const docs = [
        {
            uri: ("./cv2024.pdf",
            )
        }
    ];

    return (
        <div className="retour">
            <Link
                to="/"
            >
                <li>Home</li>
            </Link>
            <DocViewer
                pluginRenderers={[PDFRenderer]}
                documents={docs}
                initialActiveDocument={docs[1]}
                theme={{
                    primary: "#5296d8",
                    secondary: "#ffffff",
                    tertiary: "#5296d899",
                    textPrimary: "#ffffff",
                    textSecondary: "#5296d8",
                    textTertiary: "#00000099",
                    disableThemeScrollbar: false,
                  }}
            />
        </div>
    );
}

