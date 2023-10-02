import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./Components/Card";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <h1 className="h1tag">List of top 5 Netflix Series in 2020</h1>
    <Card
      imgsrc="https://th.bing.com/th/id/OIP.gabd8LERAhWQ3yCsrNdTYQHaK-?pid=ImgDet&rs=1"
      title="A Netflix Original series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
      imgsrc="https://www.heavenofhorror.com/wp-content/uploads/2020/04/Extracurricular-netflix-review.jpg"
      title="A Netflix Original series"
      sname="Extra Curriculum"
      link="https://www.netflix.com/in/title/80990668"
    />
    <Card
      imgsrc="https://th.bing.com/th/id/OIP.MGxeUZxNIGP8lA4QCKV35gHaEo?pid=ImgDet&rs=1"
      title="A Netflix Original series"
      sname="Stranger Things"
      link="https://www.netflix.com/in/title/80057281"
    />
  </>
);
