export function Colorbox({ clr }) {
  const styles = {
    backgroundColor: clr,
    height: "50px",
    width: "200px",
    margin: "10px 10px"
  };

  return (
    <div style={styles}></div>
  );
}
