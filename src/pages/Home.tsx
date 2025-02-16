import React from "react";

import { EditLink, Ul, Li } from "../components";
import HomeMDX from "./Home.doc.mdx";

const components = {
  ul: Ul,
  li: Li,
};

const Home = () => {
  return (
    <div>
      <HomeMDX components={components} />

      <EditLink fileLocation="pages/Home.doc.mdx" />
    </div>
  );
};

export default Home;
