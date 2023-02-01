import styled from 'styled-components';

export const FilterStyle = styled.div`
  display: flex;

  // flex-wrap: wrap;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  select.decorated option:hover {
    box-shadow: 0 0 10px 100px black inset;
  }

  .fav {
    margin-left: 1rem;
  }
  .pri {
    margin-left: 1rem;
  }
  #category,
  #favour,
  #price {
    margin-left: 0.2rem;
    border: none;
    color: white;
    background-color: #0d9488;
    // appearance: none;
    border-radius: 3px;
    margin-bottom: 0.5rem;
    // box-shadow: 0px 2px 2px #10b981;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  }

  #price:focus,
  #favour:focus,
  #category:focus {
    outline: none;
    border-radius: 3px;
    border: 2px solid #0d9488;
    box-shadow: 0 0 0px 4px solid #0d9488;
    border: none;
  }

  @media (max-width: 500px) {
    #category {
      font-size: 10px;
      margin-left: 0;
    }
    #favour {
      font-size: 10px;
      margin-left: 0;
    }
    #price {
      font-size: 10px;
      margin-left: 0;
    }
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    gap: 1rem;
    padding-right: 1rem;

    #category {
      width: 120px;
      padding: 0.2rem 0.5rem;
      margin-top: 0.6rem;
    }
    #favour {
      width: 120px;
      padding: 0.2rem 0.5rem;
      margin-top: 0.5rem;
    }
    #price {
      width: 120px;
      padding: 0.2rem 0.5rem;
      margin-top: 0.5rem;
    }

    .fav {
      margin-left: 0;
      display: flex;
      flex-direction: column;
    }
    .cat {
      display: flex;
      flex-direction: column;
    }
    .pri {
      margin-left: 0;
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 380px) {
    // transform: translateX(-0.8rem);
    // justify-content: center;
  }
`;

export const categoryStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
