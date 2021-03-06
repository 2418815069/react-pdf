import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import styles from './styles';

const fontSizeNum = '12';
const Heading = styled.Text`
  font-size: ${fontSizeNum}px;
  font-weight: bold;
  margin-bottom: 16;
  font-family: 'SourceHanSerifCN';
`;

const ImageTextData = [
  {
    title: '影像学所见',
    details: [
      { 
        key: '1',
        text: '冠状动脉分布呈右优势型。',
      },
      { 
        key: '2',
        text: '左冠状动脉开口于左窦。右冠状动脉开口于右窦。',
      },
      {
        key: '3',
        text: '右冠状动脉近段管腔未见明显狭窄，管壁不规则，可见钙化斑块。<br />右冠状动脉中远段管腔未见明显狭窄，管壁不规则。',
      },
      {
        key: '4',
        text: '左主干管腔未见明显狭窄，管壁不规则。',
      },
      {
        key: '5',
        text: `左前降支近段管腔节段性中度狭窄，管壁不规则，可见钙化斑块。<br />左前降支中段管腔未见明显狭窄。管壁规则，走形于浅表肌层。<br />左前降支远段管腔未见明显狭窄，管壁规则。<br />第一对角支管腔未见明显狭窄，管壁不规则增厚。`,
      },
      { 
        key: '6',
        text: '左旋支近段管腔未见明显狭窄，管壁不规则。<br />左旋支中远段可见高密度支架影，支架形态完整，支架内管腔通畅，支架内及以远血管充盈良好。<br />第一钝缘支管腔未见明显狭窄，管壁不规则。',
      }
    ],
  },
  {
    title: '影像学诊断',
    details: [
      { 
        key: '1',
        text: '左前降支远段浅层心肌桥。右冠状动脉支架置入术后，支架管腔通畅。',
      },
      {
        key: '2',
        text: `左前降支近中段、对角支重度狭窄。右冠脉主干、后降支重度狭窄。`,
      }
    ]
  }
];

const ImageContent = () => (
  <View>
    {ImageTextData.map(({ title, details }, idx) => (
      <View style={{marginBottom: 44}} key={idx}>
      <Heading>{title}</Heading>
      {details.map(({ key, text }, index) => {
        const textArr = text.split('<br />');
        return (
          <View style={[styles.detailRow]} key={index}>
            <Text style={[styles.commonFont, { width: 22 }]}>{key}、</Text>
            <View style={[styles.commonFont, { marginBottom: 16, flexDirection: 'column'}]}>
            {textArr.map( (item, idx) => <Text key={idx}>{item}</Text> )}
            </View>
        </View>
        )}
      )}
      </View>
    ))}
  </View>
);

export default ImageContent;
