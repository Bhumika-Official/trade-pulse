import styled from "styled-components";

interface ForexCardProps {
  base: string;
  symbol: string;
  rate: number;
  high: number;
  low: number;
  change: number;
}

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background: #111;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 1rem;
`;

const PairInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Flag = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Rate = styled.div<{ isPositive: boolean }>`
  color: ${(p) => (p.isPositive ? "#00ff88" : "#ff4d4f")};
  font-weight: 600;
`;

export const ForexCard: React.FC<ForexCardProps> = ({
  base,
  symbol,
  rate,
  high,
  low,
  change
}) => {
  const isPositive = change >= 0;

  return (
    <Card>
      <PairInfo>
        <Flag src={`https://flagsapi.com/${base === "EUR" ? "EU" : base}/flat/32.png`} alt={base} />
        <Flag src={`https://flagsapi.com/${symbol === "GBP" ? "GB" : symbol}/flat/32.png`} alt={symbol} />
        <div>
          <div>{base}/{symbol}</div>
          <small style={{ color: "#00ff88" }}>
            {isPositive ? "+" : ""}
            {change.toFixed(2)}%
          </small>
        </div>
      </PairInfo>

      <div>
        <Rate isPositive={!isPositive}>{rate.toFixed(6)}</Rate>
        <small style={{ color: "#888" }}>H:{high.toFixed(4)} | L:{low.toFixed(4)}</small>
      </div>
    </Card>
  );
};
