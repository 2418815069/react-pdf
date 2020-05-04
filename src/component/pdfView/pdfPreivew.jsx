import React from 'react';
import styled from "styled-components";
import pdfData from './pdfData'
import qca1 from '../../assets/qca1.png';
import qca2 from '../../assets/qca2.png';
// eslint-disable-next-line react/prefer-stateless-function

const testFont = 'SourceHanSerifCN';
const fontSizeNum = 14;

const Page = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: white;
  width: 684px;
  height: 966px;
  .commonFont {
    font-size: 14px;
    line-height: 22px;
    align-content: center;
    font-family: ${testFont};
  };
  .personMsg {
    margin-top: 32px;
    border-top: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
  };
  .detailRow {
    display: flex;
  };
  .container {
    width: 504px;
    padding: 74px 90px 51px 90px;
  };
  .title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    font-family: ${testFont};
  };
  .lable {
    font-size: 14px;
    height: 22px;
    align-content: center;
    line-height: 22px;
    font-size: ${fontSizeNum}px;
    margin-right: 5px;
    font-weight: bold;
    font-family: ${testFont};
    color: #000000;
  };
  .imagediv {
    display: flex;
    margin-top: 20px;
    margin-bottom: 24px;
  };
  .heartTable {
    border-top: 1px solid #d8d8d8;
    border-left: 1px solid #d8d8d8;
    border-right: 1px solid #d8d8d8;
    margin-bottom: 28px;
    border-collapse: collapse;
  };
  .review {
    border-top: 1px dashed #bfbfbf;
    height: 40px;
    width: 100%;
    bottom: 40px;
    position: absolute;
  };
  .review>div{
    position: absolute;
    top: 11px;
  }
  .reviewText {
    width: 113px;
    font-weight: bold;
  };
  .footer {
    height: 40px;
    width: 100%;
    bottom: 0;
    position: absolute;
    background-color: #F0F0F0;
  };
  
  .footerText {
    font-family: ${testFont};
    font-size: ${fontSizeNum}px;
    color: #9B9B9B;
  }
  table td, th{
    flex: 1;
    padding-top: 4px;
    border-right: 1px solid #d8d8d8;
    padding-left: 16px;
    text-align: left;
  }
  table tr{
    width: 504px;
    height: 30px;
    border-bottom: 1px solid #d8d8d8;
  }
`;

const Heading = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
`;

const ImageContent = ({ title, details }) => {
  console.log(details);
  return (
  <div>
      <div style={{marginBottom: 44}}>
      <Heading>{title}</Heading>
      {details.map(({ key, text }, index) => {
        const textArr = text.split('<br />')
        return (
        <div className="detailRow" key={index}>
          <div style={{ width: 22 }}>{key}、</div>
          <div className="commonFont" style={{ marginBottom: 16}}>
          {
            textArr.map((item, idx) => 
              <div key={idx}>{item}</div>
            )
          }
          </div>
        </div>
        )}
      )}
      </div>
  </div>
)};
class pdfPreivew extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#283245'}}>
        <div className="printArea">
        <Page className="page" style={{marginRight: 12}}>
          <div className="container">
          <div className="title">冠状动脉CTA检测报告</div>
      
          <div className="personMsg">
            <div style={{ marginTop: 7, marginBottom: 5, display: 'flex'}}>
              <div style={{ width: 161, paddingLeft: 10, display: 'flex' }}>
                <div className="lable">ID：</div>
                <div className="commonFont">3145712</div>
              </div>
              <div style={{ width: 191, display: 'flex'}}>
                <div className="lable">检查日期：</div>
                <div className="commonFont">2018.09.27</div>
              </div>
              <div style={{ width: 161, display: 'flex'}}>
                <div className="lable">报告日期：</div>
                <div className="commonFont">2018.09.27</div>
              </div>
            </div>
            <div style={{ marginBottom: 7,  display: 'flex'}}>
              <div style={{ width: 161, paddingLeft: 10, display: 'flex'}}>
                <div className="lable">姓名：</div>
                <div className="commonFont">小刘</div>
              </div>
              <div style={{ width: 78, marginRight: 15, display: 'flex'}}>
                <div className="lable">性别：</div>
                <div className="commonFont">男</div>
              </div>
              <div style={{ width: 98, display: 'flex'}}>
                <div className="lable">年龄：</div>
                <div className="commonFont">6</div>
              </div>
              <div style={{ width: 161, display: 'flex'}}>
                <div className="lable">检查项目：</div>
                <div className="commonFont">冠状动脉</div>
              </div>
            </div>
          </div>
      
            <div className="imagediv">
              <img src={qca2} style={{ width: 164, height: 164, marginRight: 20,}}/>
              <img src={qca1} style={{ width: 320, height: 164}}/>
            </div>
      
            <table className="heartTable">
              <thead>
              <tr style={{display: 'flex'}}>
                <th className="commonFont">右冠状动脉</th>
                <th className="commonFont">左主干</th>
                <th className="commonFont">左前降支</th>
                <th className="commonFont">左回旋支</th>
                <th className="commonFont" style={{borderRight: 'none'}}>总计</th>
              </tr>
              </thead>
              <tbody>
              <tr style={{ display: 'flex'}}>
                <td className="commonFont">470.6</td>
                <td className="commonFont">14.8</td>
                <td className="commonFont">456.1</td>
                <td className="commonFont">137.6</td>
                <td className="commonFont" style={{borderRight: 'none'}}>1079.1</td>
              </tr>
              <tr>
                <td className="commonFont" style={{ opacity: 0.36, fontSize: 10, borderRight: 'none' }}>备注：>400，严重钙化；101~400，中度钙化；11~100，轻度钙化；1~10，轻微钙化；0，无钙</td>
              </tr>
              </tbody>
            </table>
            {ImageContent(pdfData[0])}
            </div>
          <div className="footer">
            <div className="detailRow">
              <div  className="footerText" style={{ left: 40, top: 11, position: 'absolute' }}>只供研究使用。不用于诊断过程</div>
              <div className="footerText" style={{ right: 40, top: 11, position: 'absolute'}} >第1页 /（共2页）</div>
            </div>
          </div>
        </Page>
        <Page className="page">
          <div className="container">
          <div className="detailRow" style={{marginBottom: 44}}>
              <div style={{ width: 22 }}></div>
              <div className="commonFont" style={{ marginBottom: 16}}>
                  <div>左旋支中远段可见高密度支架影，支架形态完整，支架内管腔通畅，支架内及以远血管充盈良好。</div>
                  <div>第一钝缘支管腔未见明显狭窄，管壁不规则。</div>
              </div>
          </div>
          {ImageContent(pdfData[1])}
          </div>
          <div className="review">
            <div style={{ left: 40} }>
              <div className="commonFont reviewText">审核医生:  </div>
            </div>
            <div style={{ left: 250}}>
              <div className="commonFont reviewText">报告医生：</div>
            </div>
            <div style={{ left: 457}}>
              <div className="commonFont reviewText">报告日期：</div>
            </div>
          </div>
          <div className="footer">
              <div className="detailRow">
                <div  className="footerText" style={{ left: 40, top: 11, position: 'absolute' }}>只供研究使用。不用于诊断过程</div>
                <div className="footerText" style={{ right: 40, top: 11, position: 'absolute'}} >第1页 /（共2页）</div>
              </div>
            </div>
        </Page>
        </div>
      </div>
    );
  }
}

export default pdfPreivew;
