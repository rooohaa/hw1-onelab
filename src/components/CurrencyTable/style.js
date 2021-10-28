import styled from 'styled-components'

export const TableWrapper = styled.div`
  width: 480px;

  .table-cols {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;

    padding-bottom: 10px;

    div {
      font-size: 12px;
      line-height: 18px;
      font-weight: 300;
      color: #303030;
    }
  }

  .table-rows {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
