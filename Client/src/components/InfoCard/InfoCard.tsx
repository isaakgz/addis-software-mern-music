/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

interface InfoCardProps {
  name: string;
  count: number;
  imageUrl?: string;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  border: 1px solid #f5f5f5;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  margin: 0;
  padding: 0;
`;

const Count = styled.p`
  margin: 0;
  padding: 0;
`;

const InfoCard = ({ name, count, imageUrl }: InfoCardProps) => {
  return (
    <CardContainer>
      {imageUrl && <Icon src={imageUrl} alt={name} />}
      <InfoText>
        <Name>{name}</Name>
        <Count>{count} songs</Count>
      </InfoText>
    </CardContainer>
  );
};

export default InfoCard;
