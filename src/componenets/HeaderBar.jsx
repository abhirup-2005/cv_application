export default function HeaderBar({ showPreview, setShowPreview }) {
  return (
    <div className='header'>
      <section className='Braning'>CV Application</section>
      <section className='Buttons'>
        <button className='pdfDownload'>PDF</button>
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