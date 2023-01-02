import styled from 'styled-components';

export const PaymentFormStyle = styled.div`
  box-shadow: 0 0 5px grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: flex-start;
  width: 60%;
  margin: 1rem 4rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 250px;

  h2 {
    margin-bottom: 1rem;
  }
  .btnpayment {
    margin-top: 1rem;
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;
export const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
