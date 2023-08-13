import Footer from "./Footer";

function ResumePage() {
    return (
        <div style={{display: 'flex', justifyContent: 'center',
                     alignItems: 'center', height: '100vh',
                     width: '100vw'}}>
            <object
                data={`${process.env.PUBLIC_URL}/Reshma_Resume2023.pdf`}
                type="application/pdf"
                style={{
                    width: '80vw',
                    height: '80vh'
                }}>
                <p>This browser does not support inline PDFs. Please download the PDF to view it:
                    <a href={`${process.env.PUBLIC_URL}/Reshma-Resume2023.pdf`}>Download PDF</a>
                </p>
            </object>
            <Footer />
        </div>
    );
}

export default ResumePage;