// src/components/Modal.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  z-index: 1001;
  box-sizing: border-box;
`;

function AdminModal({ onClose }) {
  useEffect(() => {}, []);

  return (
    <ModalContainer>
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <h2>우주 최강 팀원들과</h2>
        <p>넘사벽 클라스를 자랑하는</p>
        <p>팀 코드forDCU</p>
        {/* 기타 정보를 여기에 추가할 수 있습니다 */}
      </ModalContent>
    </ModalContainer>
  );
}

export default AdminModal;
