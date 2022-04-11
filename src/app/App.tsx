import React from "react";
import "./App.css";
import { InlineStylesModel } from "../models/InlineStylesModel";
import { PageHeader } from "../components/header/PageHeader";
import { Footer } from "../components/footer/Footer";

const styles: InlineStylesModel = {
  app: {
    minHeight: "100vh",
  },
  header: {},
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {},
  code: {
    border: "1px solid gainsboro",
    padding: 10,
    margin: 10,
  },
};

function App(): JSX.Element {
  return (
    <div className="App" style={styles.app}>
      <PageHeader />

      <div style={styles.content}>
        <h1>Redux TypeScript Template</h1>
        <h2>Playfair Display</h2>
        <p>Cabin</p>
        <code>Fira Code</code>
      </div>

      <div style={styles.code}>
        <p>
          <code>HELLO,</code>
        </p>
        <p>
          <code>world!</code>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
