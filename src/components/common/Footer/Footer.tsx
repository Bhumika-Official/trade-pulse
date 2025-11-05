import Home from '../../../assets/homeActive.png';
import Trade from '../../../assets/tradeIcon.png';
import History from '../../../assets/history .png';
import Profile from '../../../assets/user.png';
import { Container, MainContainer, TabContainer, TabName } from './Footer.styles';

export default function Footer() {
  return (
    <MainContainer>
      <Container>
        {[
          { icon: Home, label: 'Home' },
          { icon: Trade, label: 'Trade' },
          { icon: History, label: 'History' },
          { icon: Profile, label: 'Profile' }
        ].map(({ icon, label }) => (
          <TabContainer key={label} >
            <img width="28px" src={icon} alt={label} />
            <TabName>{label}</TabName>
          </TabContainer>
        ))}
      </Container>
    </MainContainer>
  );
}