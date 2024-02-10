import { meaningCardData } from "../Data/data";
const WappgoMeans = () => {
  return (
    <main className="wappgo-means-container">
      <h2>What Wappgo Means</h2>
      <article>
        {meaningCardData.map((item) => (
          <MeaningCard key={item.heading} data={item} />
        ))}
      </article>
    </main>
  );
};

export default WappgoMeans;

export const MeaningCard = ({ data }) => {
  return (
    <main className="meaning-card">
      <h1>{data.heading}</h1>
      <p>{data.desc}</p>
    </main>
  );
};
