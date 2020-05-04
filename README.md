# react-pdf
```
npm/yarn install
yarn start
```
### jspdf创建pdf模板
## 代码说明
文档https://react-pdf.org/components，案例 https://github.com/diegomura/react-pdf
（1）生成pdf， 参考pdf-templete/src/utils/generateReactPDF.js，
   类似react组件化编程，细节稍有些不同

  1.提供了Document，View，Text..等组件

  2.样式使用const styles = StyleSheet.create({}),可参考pdf-templete/src/pdfTest/styles.js，也可使用@react-pdf/styled-components，需注意默认以pt做单位，很多属性不支持，比如说line-height不能以px为单位，color不支持rgba(),position，flex等使用有偏差

  3.文本过长不会换行

  4.使用中文必须下载字库,参考文档Font组件跟demo，只支持ttf文件，注册字体
需注意仅支持URL跟绝对路径
（2）下载PDF
参考pdf-templete/src/pdfTest/PdfTest.jsx

引入PDFDownloadLink组件
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
# 1.打印PDF
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
