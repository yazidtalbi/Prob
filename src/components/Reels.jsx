import Ticker from "framer-motion-ticker";

function Reels() {
  const colors = ["#632bf3", "#f122c8", "#f16022", "#9ef344", "#44d3f3"];
  return (
    <div className="reels">
      <Ticker duration={30}>
        <img
          className="h-full pr-8"
          src="../../reels/webp/folklore.webp"
          alt="Festival International du Folklore - Arlibera"
        />
        <img
          className="h-full pr-8"
          src="../../reels/webp/cnss.webp"
          alt="CNSS - Caisse Nationale de Sécurité Sociale - Arlibera"
        />
        <img
          className="h-full pr-8"
          src="../../reels/webp/m3ak.webp"
          alt="Platforme m3ak - Arlibera"
        />
      </Ticker>
      <div className="pt-8">
        <Ticker duration={40}>
          <img
            className="h-full pr-8"
            src="../../reels/webp/solomon.webp"
            alt="Projet Solomon - Arlibera"
          />
          <img
            className="h-full pr-8"
            src="../../reels/webp/zemium.webp"
            alt="Zemium - Arlibera"
          />
          <img
            className="h-full pr-8"
            src="../../reels/webp/pve.webp"
            alt="Energy - Panneaux solaires - Arlibera"
          />
        </Ticker>
      </div>

      {/* <Ticker duration={20}>
        {colors.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              margin: "5px",
              height: "250px",
              width: "200px",
            }}
          />
        ))}
      </Ticker> */}
    </div>
  );
}
export default Reels;
