import Home from '../../../assets/homeActive.png';
import Trade from '../../../assets/tradeIcon.png';
import History from '../../../assets/history .png';
import Profile from '../../../assets/user.png';

export default function Footer() {
  return (
    <div style={{
      backgroundColor: 'black',
      padding: '10px 0',
      // borderTop: '1px solid #222'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {[
          { icon: Home, label: 'Home' },
          { icon: Trade, label: 'Trade' },
          { icon: History, label: 'History' },
          { icon: Profile, label: 'Profile' }
        ].map(({ icon, label }) => (
          <div key={label} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px 5%',
            cursor: 'pointer'
          }}>
            <img width="28px" src={icon} alt={label} />
            <div style={{ fontSize: '14px', color: '#ccc', fontWeight: '500' }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

