// import React from 'react';
import MIR from "./InfoRow.tsx";
import "./InfoTable.css";

// 일반 유저, 갤러리 관리자의 개인정보들을 보여주는 테이블

/*
API로 개인정보 가져오는 함수
*/

function InfoTable() {
  return (
    <>
      <h1>UserInfoTable</h1>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>ID</th>
          </tr>
          <tbody>
            <MIR type="user" name="이름" phone="010-OOOO-OOOO" id="XXXX" />
            <MIR type="user" name="이름" phone="010-OOOO-OOOO" id="XXXX" />
            <MIR type="user" name="이름" phone="010-OOOO-OOOO" id="XXXX" />
          </tbody>
        </table>
      </div>
    </>
  );
}
export default InfoTable;
