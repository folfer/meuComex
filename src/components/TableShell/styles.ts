import { MdInfoOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  background: #FFFFFF;
  box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow-x: auto;

  padding: 1.25rem;
  margin-top: 29px;


  .rdt_TableHeadRow {
    border: 0;
  }

  #pagination-next-page {
    background: #FFFFFF;
    border-radius: 4px;
    margin-left: 4px;
    border: 0.540816px solid #2B3674 !important;
    fill: #2B3674;

    &:hover {
      background: #2B3674;
      fill: #fff;
    }

  }

  #pagination-last-page{
    background: #FFFFFF;
    border-radius: 4px;
    margin-left: 4px;
    border: 0.540816px solid #2B3674 !important;
    fill: #2B3674;

    &:hover {
      background: #2B3674;
      fill: #fff;
    }
  }

  #pagination-previous-page{
    background: #FFFFFF;
    border-radius: 4px;
    margin-left: 4px;
    border: 0.540816px solid #2B3674 !important;
    fill: #2B3674;

    &:hover {
      background: #2B3674;
      fill: #fff;
    }
  }

  #pagination-first-page {
    background: #FFFFFF;
    border-radius: 4px;
    margin-left: 4px;
    border: 0.540816px solid #2B3674 !important;
    fill: #2B3674;

    &:hover {
      background: #2B3674;
      fill: #fff;
    }
  }

  .rdt_Table {
    overflow: hidden;
  }

  .rdt_TableRow {
    border: 0;
    border-radius: 0;
    background: #F4F7FE;
    border-left: 1px solid rgba(43, 54, 116, 0.1);
    border-right: 1px solid rgba(43, 54, 116, 0.1);
    border-top: 1px solid rgba(43, 54, 116, 0.1);
    border-bottom: 1px solid rgba(43, 54, 116, 0.1);



    &:nth-child(1) {
      border-radius: 0.938rem 0.938rem 0 0;
    }
    
    transition: all 0.3s;

    &:nth-child(2n) {
      background: #fff;
    }

    &:hover {
      cursor: pointer;
      background: #BED4FF;
      transform: scale(0.98);
    }
  }
  .rdt_TableCell {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;


    font-weight: 600;
    color: #2B3674;

    @media (min-width: 1080px) {
      font-size: 1rem;
    }
  }

  .rdt_Pagination {
    width: 100% !important;
    display: flex !important;
    border: 0;
    color: #2B3674;
    align-items: center;
    justify-content: flex-end;
  }
  
  .rdt_TableCol {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.7rem;

    @media (min-width: 1080px) {
      font-size: 1rem;
    }
  }

  .rdt_TableCol_Sortable {
    color: rgba(43, 54, 116);
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const WrapperTitle = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
`;

export const TableTitle = styled.h1`
  font-weight: bold;
  font-size: 0.8rem;
  color: #2B3674;

  @media (min-width: 1080px) {
    font-size: 1.2rem;
  }
`;

export const SeeAllButton = styled.button`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  align-self: flex-end;

  color: #4318FF;
  background: var(--white-50);
`;


export const InformationButton = styled(MdInfoOutline)`
  height: 1.5rem;
  width: 1.5rem;
  color: #3751FE;
  opacity: 60%;
  margin-left: 0.5rem;
  font-size: 0.8rem;


  @media (min-width: 1080px) {
    font-size: 1rem;
  }
`;

export const Border = styled.div`
  width: 95%;
  margin-top: 20px;
  border: 1px solid rgba(102, 102, 102, 0.1);
`;

interface StatusProps {
  backgroundColor: string;
  fontColor: string;
}

export const Status = styled.div<StatusProps>`
  width: 6.438rem;
  height: 1.275rem;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;


  color: ${({ fontColor }) => fontColor};


  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 0.313rem;

  @media (min-width: 1080px) {
    font-size: 1rem;
    width: 8.438rem;
    height: 1.575rem;
  }
`;


export const Square = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  border: 0.063rem solid var(--blue-50);
  border-radius: 0.313rem;
`;

export const Estimated = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Type = styled.h2`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;

  margin-left: 5px;

  @media (min-width: 1080px) {
    font-size: 1rem;
  }
`;

export const Percent = styled.strong`
  font-weight: 700;
  font-size: 0.8rem;
  color: #E01A1A;

  @media (min-width: 1080px) {
    font-size: 1.2rem;
  }
`;

export const Date = styled.strong`
  margin-left: 0.5rem;
  font-weight: 500;
  font-size: 0.7rem;
  color: #2E3B52;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;


export const Text = styled.strong`
  font-weight: bold;
  font-size: 0.875rem;

  margin-right: 0.313rem;
`;

export const redirect = styled(Link)`
  
`;

export const Filter = styled.div`
  margin-bottom: 29px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem 2rem 2.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);

  .MuiFilledInput-underline::before, .MuiFilledInput-underline:focus, .MuiFilledInput-underline, .MuiFilledInput-underline::after {
    border-bottom: none !important;
    outline: none;
  }

  .MuiInputBase-adornedEnd {
    background: #fff !important;
  }

  .MuiInputBase-input {
    border: 0 !important;
  }

  .MuiFilledInput-root {
    background-color: #fff;
    border: 1px solid #dce3f2 !important;
    cursor: pointer;
  }

  .Mui-focused {
    border-bottom: 0;
    outline: 0;
  }
`;

interface PropsWrapper {
  backgroundColorWrapper: string;
}

export const Wrapper = styled.div<PropsWrapper>`
  width: 100%;
  background: ${({ backgroundColorWrapper }) => backgroundColorWrapper};
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2b3674;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

export const Image = styled.image`

`;


