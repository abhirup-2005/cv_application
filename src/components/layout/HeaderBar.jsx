import { useReactToPrint } from "react-to-print";

import "../../styles/layout/HeaderBar.css";

export default function HeaderBar({ showPreview, setShowPreview, cvRef, loadSampleCV, }) {
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
  });

  return (
    <div className='header'>
      <section className='branding'>CV Builder</section>
      <section className='headerButtons'>
        <button
          className="sampleCV"
          onClick={loadSampleCV}
        >
          Sample CV
        </button>
        <button
          className='pdfDownload'
          onClick={handlePrint}
        >
          PDF
        </button>
        <button
          className="previewCV"
          onClick={() => setShowPreview(!showPreview)}
        >
          {showPreview ? "Edit" : "Preview"}
        </button>
      </section>
    </div>
  )
}