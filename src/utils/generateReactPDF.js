import React from 'react';
import { Page, Text, View, Font, Document, Image } from '@react-pdf/renderer';
import styles from '../pdfTest/styles';
import ImageContent from '../pdfTest/ImageContent';
import qca1 from '../assets/qca1.png';
import qca2 from '../assets/qca2.png';

Font.register({
  family: 'SourceHanSerifCN',
  fonts: [
    {
      src: `//${window.location.host}/fonts/source-han-serif-ttf/SourceHanSerifCN-Regular.ttf`
    },
    {
      src: `//${window.location.host}/fonts/source-han-serif-ttf/SourceHanSerifCN-Bold.ttf`,
      fontWeight: 'bold'
    }
  ]
})

const MyDocument = () => ( 
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.container}>
    <Text style={styles.title}>冠状动脉CTA检测报告</Text>

    <View style={[styles.personMsg, styles.boderTop, styles.boderBottomTable]}>
      <View style={{ marginTop: 7, marginBottom: 4, flexDirection: 'row',}}>
        <View style={[styles.detailRow,{ width: 161, paddingLeft: 10 }]}>
          <Text style={[styles.lable]}>ID：</Text>
          <Text style={styles.commonFont}>3145712</Text>
        </View>
        <View style={[styles.detailRow,{ width: 191}]}>
          <Text style={[styles.lable]}>检查日期：</Text>
          <Text style={styles.commonFont}>2018.09.27</Text>
        </View>
        <View style={[styles.detailRow, { width: 161, flexDirection: 'row'}]}>
          <Text style={[styles.lable]}>报告日期：</Text>
          <Text style={styles.commonFont}>2018.09.27</Text>
        </View>
      </View>
      <View style={{ marginBottom: 7, flexDirection: 'row',}}>
        <View style={[styles.detailRow,{ width: 161, paddingLeft: 10,}]}>
          <Text style={[styles.lable]}>姓名：</Text>
          <Text style={styles.commonFont}>小刘</Text>
        </View>
        <View style={[styles.detailRow,{ width: 58, marginRight: 35}]}>
          <Text style={[styles.lable]}>性别：</Text>
          <Text style={styles.commonFont}>男</Text>
        </View>
        <View style={[styles.detailRow, { width: 98, flexDirection: 'row',}]}>
          <Text style={styles.lable}>年龄：</Text>
          <Text style={styles.commonFont}>6</Text>
        </View>
        <View style={[styles.detailRow,{ width: 161, flexDirection: 'row',}]}>
          <Text style={styles.lable}>检查项目：</Text>
          <Text style={styles.commonFont}>冠状动脉</Text>
        </View>
      </View>
    </View>

      <View style={styles.imageView}>
        <Image src={qca2} style={{ width: 164, height: 164, marginRight: 20,}}/>
        <Image src={qca1} style={{ width: 320, height: 164}}/>
      </View>

      <View style={styles.heartTable}>
        <View style={[styles.detailRow, styles.boderBottomTable]}>
          <Text style={[styles.tableCel, styles.commonFont, styles.boderRightTable]}>右冠状动脉</Text>
          <Text style={[styles.tableCel, styles.commonFont, styles.boderRightTable]}>左主干</Text>
          <Text style={[styles.tableCel, styles.commonFont, styles.boderRightTable]}>左前降支</Text>
          <Text style={[styles.tableCel, styles.commonFont, styles.boderRightTable]}>左回旋支</Text>
          <Text style={[styles.tableCel, styles.commonFont]}>总计</Text>
        </View>
        <View style={[styles.detailRow, styles.boderBottomTable]}>
          <Text style={[styles.tableCel, styles.commonFont, styles.boderRightTable]}>470.6</Text>
          <Text style={[styles.tableCel, styles.commonFont, styles.boderRightTable]}>14.8</Text>
          <Text style={[styles.tableCel, styles.commonFont, styles.boderRightTable]}>456.1</Text>
          <Text style={[styles.tableCel, styles.commonFont, styles.boderRightTable]}>137.6</Text>
          <Text style={[styles.tableCel, styles.commonFont]}>1079.1</Text>
        </View>
        <View>
          <Text style={[styles.tableCel, styles.commonFont, { opacity: 0.36, fontSize: 10 }]}>备注：>400，严重钙化；101~400，中度钙化；11~100，轻度钙化；1~10，轻微钙化；0，无钙化</Text>
        </View>
      </View>

      <ImageContent />
    </View>

    <View style={[styles.review]}>
      <View style={[styles.detailRow, { left: 40, top: 11, position: 'absolute', }]}>
        <Text style={[styles.commonFont, styles.reviewText]}>审核医生:  </Text>
      </View>
      <View style={[styles.detailRow, { left: 230, top: 11, position: 'absolute', }]}>
        <Text style={[styles.commonFont, styles.reviewText]}>报告医生：</Text>
      </View>
      <View style={[styles.detailRow, { left: 417, top: 11, position: 'absolute', }]}>
        <Text style={[styles.commonFont, styles.reviewText]}>报告日期：</Text>
      </View>
    </View>

    <View style={[styles.footer]} fixed>
        <View style={[styles.detailRow]}>
          <Text style={[styles.footerText, { left: 40, top: 11, position: 'absolute' }]}>只供研究使用。不用于诊断过程</Text>
          <Text style={[styles.footerText, { right: 120, top: 11, position: 'absolute'}]} render={({ pageNumber, totalPages }) => (
          `第${pageNumber}页 /（共${totalPages}页）`
        )} fixed />
        </View>
      </View>
    </Page>
  </Document>
);

export { MyDocument };