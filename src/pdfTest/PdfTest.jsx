import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyDocument } from '../utils/generateReactPDF';

// eslint-disable-next-line react/prefer-stateless-function
let blobIframe = null;
const PdfApp = () => (
  <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
  {({ blob, loading }) => {
    if(blob) {
      blobIframe = blob;
    }
    return loading ? 'Loading document...' : 'Download now!'
    }}
  </PDFDownloadLink>
);

 class PdfTest extends React.Component {
  printPdf (){
    if(blobIframe){
      const href = URL.createObjectURL(blobIframe);
      let frame = document.getElementById('#report_frame');
    if (!frame) {
      frame = document.createElement('iframe');
      frame.id = 'report_frame';
      frame.style.display = 'none';
      document.body.appendChild(frame);
    }

    frame.onload = function load() {
      frame.contentWindow.print();
      URL.revokeObjectURL(blobIframe);
    };
    frame.src = href;
    }
  }
  
  render() {
    return (
      <div>
        <button onClick={this.printPdf} style={{ width: 100}}>打印</button>
        <PdfApp />
      </div>
    );
  }
}

export default PdfTest;
