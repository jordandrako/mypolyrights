import React from "react";
import { EditLink } from "../components";
import SourcesMDX from "./Sources.doc.mdx";

const Sources = () => {
  return (
    <div>
      <SourcesMDX />

      <EditLink fileLocation="pages/Sources.doc.mdx" />
    </div>
  );
};

export default Sources;
