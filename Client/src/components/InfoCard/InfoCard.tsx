import { CardContainer, Count, Icon, InfoText, Name } from "./InfoCardstyles";
interface InfoCardProps {
  name: string;
  count: number;
  imageUrl?: string;
}

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
