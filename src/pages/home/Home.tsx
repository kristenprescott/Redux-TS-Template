import { InlineStylesModel } from "models/InlineStylesModel";

const styles: InlineStylesModel = {
  main: {},
  content: {},
  divider: {
    margin: "9px 0px",
  },
};

export const Home = (): JSX.Element => {
  return (
    <div style={styles.main}>
      <h1>HOMEPAGE</h1>

      <hr style={styles.divider} />

      <div style={styles.content}>Lorem ipsum dolor sit amet...</div>
    </div>
  );
};
