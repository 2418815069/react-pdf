import jsPDF from "jspdf";
import font from "./fontb64/WeiRuanYaHei-1";
const pdf = new jsPDF();

const generatePDF = () => {
  // 设置中文字体 解决中文乱码问题
  pdf.addFileToVFS("WeiRuanYaHei-1.ttf", font);
  pdf.addFont("WeiRuanYaHei-1.ttf", "custom", "normal");
  pdf.setFont("custom");
  pdf.setFontSize(14);

  // 创建多页pdf
  pdf.text("I am on page 1", 10, 10);
  pdf.setFontSize(24);
  pdf.text("Hello 我了CTA个去啊 World", 30, 25);
  pdf.circle(30, 50, 15, "S");

  pdf.addPage();
  pdf.text("I am on page 2", 10, 10);
  pdf.line(10, 20, 30, 80);

  pdf.addPage();
  pdf.text("I am on page 3", 10, 10);

  // pdf.setPage(1);
  // pdf.text("I am on page 1", 10, 10);
  // pdf.text("Hello 我了CTA个去啊 World", 30, 15);

  // 保存生成的pdf
  pdf.save("liuning.pdf");
};

export default generatePDF;
