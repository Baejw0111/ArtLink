import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./InfoTable.module.css";
import Pagination from "./Pagination";

interface Data {
  [key: string]: string | number;
}

interface SelectedPage {
  selected: number;
}

interface Props {
  pageSize: number; // 표 페이지 하나에 표시할 요소 개수
  data: Data[]; // 데이터
  dataKeys: string[]; // 데이터의 키들
  columnWidths: string[]; // 표의 각 열의 너비
  keyToExclude: string[]; // 표에서 나타나지 않게 하고 싶은 키
}

function InfoTable({
  pageSize,
  dataKeys,
  data,
  columnWidths,
  keyToExclude,
}: Props) {
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 번호 저장

  const pageCount = Math.ceil(data.length / pageSize);
  const offset = currentPage * pageSize;
  const slicedData = data.slice(offset, offset + pageSize); // 페이지 별로 데이터 분할

  const headersToShow = dataKeys.filter((ele) => !keyToExclude.includes(ele)); // 헤드에 노출할 키

  // 각 열에 해당하는 값 반환
  const getColumnValue = (row: Data, columnKey: string) => {
    return row[columnKey];
  };

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (selectedPage: SelectedPage) => {
    const newPage = selectedPage.selected;
    setCurrentPage(Math.max(newPage, 0)); // 현재 페이지가 0 미만이면 0으로 설정
  };

  return (
    <>
      <table>
        <thead className={styles.tableTr}>
          <tr>
            {headersToShow.map((header, columnIndex) => (
              <th
                key={columnIndex}
                style={{ width: columnWidths[columnIndex] }}
              >
                {header}
              </th>
            ))}
            <th>자세히</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {slicedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map(
                (columnKey, cellIndex) =>
                  !keyToExclude.includes(columnKey) && (
                    <td
                      key={cellIndex}
                      style={{ width: columnWidths[cellIndex] }}
                    >
                      {getColumnValue(row, columnKey)}
                    </td>
                  )
              )}
              <td style={{ width: columnWidths[columnWidths.length - 1] }}>
                {/*id값은 보통 맨 첫번째로 오는 키고,
                id라는 이름으로만 고정되어 있을 것 같지 않아 이렇게 코드를 작성함*/}
                <Link
                  to={`works/${row[Object.keys(row)[0]]}`}
                  style={{ textDecoration: "none" }}
                >
                  →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
    </>
  );
}

export default InfoTable;
