import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  line-height: 1.6;
  font-family: 'Arial', sans-serif;
  position: relative;
  z-index: 1;

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 2rem auto;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 1.5rem auto;
  }
`;

export const Background = styled.div`
  background: 
    linear-gradient(135deg, rgba(143, 189, 49, 0.7), rgba(179, 230, 160, 0.7)),
    url('/foto1.jpg') no-repeat center center fixed;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.9;

  /* Responsividade */
  @media (max-width: 768px) {
    background-size: cover;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #8fbd31;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 2rem;
  padding: 1rem;
  border-left: 4px solid #8fbd31;
  background-color: #f9f9f9;
  border-radius: 8px;

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #333;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eaeaea;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    margin: 0.5rem 0;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Highlight = styled.span`
  font-weight: bold;
  color: #8fbd31;
`;

export const Button = styled.button`
  background-color: #8fbd31;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #7ca326;
    transform: scale(1.05);
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

export const CenteredButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  /* Responsividade */
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
  }
`;

export const FloatingButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Responsividade */
  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    right: 10px;
  }
`;
