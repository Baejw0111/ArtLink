// import React from 'react';
import "./style/InfoRow.css";

// InputInfoTable 컴포넌트들에 들어갈 세부 정보

interface Props {
  infoTitle: string;
  infoDetail: number | string | undefined;
}

function InputInfoRow({ infoTitle, infoDetail }: Props) {
  return (
    <>
      <tr>
        <td>{infoTitle}</td>
        <td>
          <span>{infoDetail}</span>
          <span>
            편집: <input type="text" />
          </span>
        </td>
      </tr>
    </>
  );
}
export default InputInfoRow;
