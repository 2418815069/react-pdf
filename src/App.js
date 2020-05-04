import React from "react";
import PdfTest from "./pdfTest/PdfTest";
import PdfReport from './component/pdfView/pdfReport'

const App = () => {
  return (
  <div id="mypdf" style={{ height: '100%'}}>
      <PdfTest />
      <PdfReport />
  </div>
  )};

export default App;
