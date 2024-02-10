const Announcement = ({ancmentStyle}) => {
  return (
    <main
      style={{borderBottom: ancmentStyle && ancmentStyle.borderBottom, backgroundColor: ancmentStyle && ancmentStyle.backgroundColor}}
      className="announce-conatiner"
    >
      <span >
        Announcement
      </span>
      <p style={{color: ancmentStyle && ancmentStyle.color}}>
        We are happy to announce that we are launching out
        <span> Cyber Security services.</span>
      </p>
    </main>
  );
};

export default Announcement;
