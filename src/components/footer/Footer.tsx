import { InlineStylesModel } from "../../models/InlineStylesModel";

const styles: InlineStylesModel = {
  footer: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    padding: 3,
    textAlign: "center",
    fontSize: "9px",
    borderTop: ".5px solid gainsboro",
  },
};
export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div style={styles.footer}>
        Copyright &copy; {currentYear} Kristen Prescott
      </div>
    </>
  );
};
