import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const IntroWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 30px;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 18px;
  text-align: center;
  line-height: 1.5;
`;

export default function IntroProject() {
    return (
        <>
            <Header />
            <IntroWrapper>
                <Title>프로젝트 소개</Title>
                <ServiceCard>
                    <ServiceTitle>캠페인 참가자 앱</ServiceTitle>
                    <ServiceDescription>
                        캠페인 참가자 앱은 참가자들이 캠페인에 참여하고, 행사 정보를 확인할 수 있는 모바일 앱입니다.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <ServiceTitle>캠페인 주최자 웹</ServiceTitle>
                    <ServiceDescription>
                        캠페인 주최자 웹은 주최자들이 캠페인을 관리하고 참가자들과 소통할 수 있는 웹 플랫폼입니다.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <ServiceTitle>캠페인 관리자 웹</ServiceTitle>
                    <ServiceDescription>
                        캠페인 관리자 웹은 전체 캠페인을 관리하고 데이터를 분석할 수 있는 관리자용 웹 플랫폼입니다.
                    </ServiceDescription>
                </ServiceCard>
            </IntroWrapper>
        </>
    );
}