import React from 'react';
import styled from 'styled-components';

const TeamWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const TeamInfo = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const MembersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const MemberCard = styled.div`
  flex: 0 0 calc(33.333% - 20px);
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const MemberName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MemberRole = styled.p`
  font-size: 18px;
`;

export default function IntroTeamForm() {
    return (
        <TeamWrapper>
            <Title>팀 소개</Title>
            <TeamInfo>
                코드forDCU는 대구 가톨릭 대학교의 모바일 소프트웨어 전공 소속 학생들로 구성된 팀입니다.<br /> 이 팀은 캡스톤 프로젝트를 위해 만들어졌으며, 환경보호 캠페인 플랫폼을 만들어 환경보호에 기여하는 것이 목적으로합니다.
            </TeamInfo>
            <MembersWrapper>
                <MemberCard>
                    <MemberName>김창훈</MemberName>
                    <MemberRole>Project Manager</MemberRole>
                </MemberCard>
                <MemberCard>
                    <MemberName>박현아</MemberName>
                    <MemberRole>Frontend Designer</MemberRole>
                </MemberCard>
                <MemberCard>
                    <MemberName>박보근</MemberName>
                    <MemberRole>Frontend Engineer</MemberRole>
                </MemberCard>
                <MemberCard>
                    <MemberName>채지훈</MemberName>
                    <MemberRole>Backend Engineer</MemberRole>
                </MemberCard>
                <MemberCard>
                    <MemberName>김범준</MemberName>
                    <MemberRole>Backend Engineer</MemberRole>
                </MemberCard>
            </MembersWrapper>
        </TeamWrapper>
    )
}