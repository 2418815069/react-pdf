# react-pdf
```
npm/yarn install
yarn start
```
### react-pdf创建pdf模板(方案一)

## 文档
```
https://react-pdf.org/components，
案例 https://github.com/diegomura/react-pdf
https://parall.ax/products/jspdf
```
## 代码说明
- 生成pdf， 参考pdf-templete/src/utils/generateReactPDF.js，
   类似react组件化编程，细节稍有些不同

  1.提供了Document，View，Text..等组件
  
  2.样式使用const styles = StyleSheet.create({}),可参考pdf-templete/src/pdfTest/styles.js，也可使用@react-pdf/styled-components，需注意默认以pt做单位，很多属性不支持，比如说line-height不能以px为单位，color不支持rgba(),position，flex等使用有偏差

  3.文本过长不会换行

  4.使用中文必须下载字库,参考文档Font组件跟demo，只支持ttf文件，注册字体
需注意仅支持URL跟绝对路径

  5.注册字体，使支持设置不同样式（粗细，斜体）字体

  6.图片使用

  7.不能用html中的标签，某些css属性不支持,line-height不能用px做单位，alignContent等属性center无效

  8.自动分页，换行, wrap（大段自动换页）,fixed（固定页码页面在底部）,分页组件必须位于最后

- 下载PDF
参考pdf-templete/src/pdfTest/PdfTest.jsx

## 引入PDFDownloadLink组件
```js
<PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
{({ blob, loading }) => {
  if(blob) {
    blobIframe = blob;
  }
  return loading ? 'Loading document...' : 'Download now!'
  }}
</PDFDownloadLink>
```
## 打印PDF
参考pdf-templete/src/pdfTest/PdfTest.jsx
保存PDFDownloadLink组件中的blob对象，使用blob创建url，把url赋给自己创建的iframe，打印iframe
```js
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
```
### jspdf+html2canvas创建pdf模板(方案二)

- 总结
优点：方便快捷
缺点：由于使用html2canvas进行截图，出现图片、字体不清晰的情况

### html2canvas
#### 简介
我们可以直接在浏览器端使用html2canvas，对整个或局部页面进行“截图”。但这并不是真的截图，而是通过遍历页面DOM结构，收集所有元素信息及相应样式，渲染出canvas image。
由于html2canvas只能将它能处理的生成canvas image，因此渲染出来的结果并不是100%与原来一致。但它不需要服务器参与，整个图片都由客户端浏览器生成，使用很方便。

```js
/* eslint-disable new-cap */
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const pageWidth = 595;
const pageHeight = 842;

function generatePDF() {
  const pageDoms = Array.from(document.querySelectorAll('.pdf-page'));

  const scale = 4;

  const getOption = () => {
    const canvas = document.createElement('canvas');
    canvas.width = pageWidth * scale;
    canvas.height = pageHeight * scale;

    // 关闭抗锯齿
    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;

    const option = {
      logging: false,
      windowWidth: 1920,
      windowHeight: 1080,
      width: pageWidth,
      height: pageHeight,
      scale,
      canvas,
      onclone: doc => {
        // eslint-disable-next-line
        for (const font of document.fonts.values()) {
          doc.fonts.add(font);
        }
        // eslint-disable-next-line no-param-reassign
        doc.getElementById('pdf-wrapper').style.transform = 'scale(1)';
      },
    };

    return option;
  };

  const pdf = new jsPDF(undefined, 'mm', 'a4');
  return Promise.all(pageDoms.map(dom => html2canvas(dom, getOption()))).then(pages => {
    pages.forEach((pageCanvas, index) => {
      if (index !== 0) pdf.addPage();
      pdf.addImage(pageCanvas, 'JPEG', 0, 0, 210, 297); // A4: [210, 297]
    });

    return pdf;
  });
}

export { generatePDF };
```

### jspdf创建pdf模板(方案三)
- 可以直接使用jspdf生成pdf
  优点：字体清晰
  缺点：踩坑最多，且代码冗余复杂，难以维护