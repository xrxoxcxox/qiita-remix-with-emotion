/** @jsx jsx */
import { Fragment } from "react";
import { jsx, css } from "@emotion/react";
import { Header } from "~/components/Header";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";

export default function Emotion() {
  return (
    <Fragment>
      <Header />
      <div css={styles.contents}>
        <Navigation css={styles.navigation} />
        <aside css={styles.sidebar}>
          <Footer css={styles.footer} />
        </aside>
      </div>
    </Fragment>
  );
}

const styles = {
  contents: css`
    display: grid;
    grid-column-gap: 16px;
    grid-template-areas: "navigation navigation main main main main main main sidebar sidebar sidebar sidebar";
    grid-template-columns: repeat(12, minmax(48px, 80px));
    justify-content: center;
    padding: 24px 16px 48px;
  `,
  navigation: css`
    align-self: start;
    display: flex;
    flex-direction: column;
    grid-area: navigation;
    position: sticky;
    top: 88px;
  `,
  sidebar: css`
    grid-area: sidebar;
  `,
  footer: css`
    margin-top: 16px;
  `,
};
