import { StyleSheet } from '@react-pdf/renderer';

const testFont = 'SourceHanSerifCN';
const fontSizeNum = '12';
export default StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 74,
    paddingBottom: 51,
  },
  commonFont: {
    fontSize: 12,
    lineHeight: 1.7,
    alignContent: 'center',
    fontFamily: `${testFont}`,
  },
  personMsg: {
    marginTop: 32,
  },
  detailRow: {
    flexDirection: 'row',
  },
  container: {
    width: 504,
    marginRight: 90,
    marginLeft: 90,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: `${testFont}`,
  },
  lable: {
    height: 22,
    alignContent: 'center',
    lineHeight: 1.8,
    fontSize: `${fontSizeNum}`,
    marginRight: 5,
    fontWeight: 'bold',
    fontFamily: `${testFont}`,
    color: '#000000',
  },
  test: {
    fontSize: `${fontSizeNum}`,
    color: '#000000',
  },
  imageView: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 24,
  },
  heartTable: {
    borderWidth: 1,
    borderHeight: 1,
    borderColor: '#d8d8d8',
    borderStyle: 'solid',
    marginBottom: 28,
  },
  tableCel: {
    width: 101,
    height: 30,
    lineHeight: 1.8,
    textAlign: 'left',
    fontSize: `${fontSizeNum}`,
    paddingTop: 7,
    paddingLeft: 18,
  },
  analysisTitle: {
    fontSize: `${fontSizeNum}`,
    lineHeight: '22px',
    fontWeight: 'bold',
  },
  boderBottomTable: {
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
    borderBottomStyle: 'solid',
  },
  boderRightTable: {
    borderRightWidth: 1,
    borderRightColor: '#d8d8d8',
    borderRightStyle: 'solid',
  },
  boderTop: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: '#bfbfbf',
  },
  review: {
    borderTopWidth: 1,
    borderTopColor: '#bfbfbf',
    borderTopStyle: 'dashed',
    height: 40,
    width: '100%',
    bottom: 40,
    position: 'absolute',
  },
  reviewText: {
    fontWeight: 'bold',
  },
  footer: {
    height: 40,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#F0F0F0',
  },
  
  footerText: {
    fontFamily: `${testFont}`,
    fontSize: `${fontSizeNum}`,
    color: '#9B9B9B',
  }
});
