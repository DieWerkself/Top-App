import React, { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";

export default function Home(): JSX.Element {
  const [raiting, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag="h1">1</Htag>
      <Button appearance="primary" arrow="down">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>

      <P size="large">Large</P>
      <P>Medium</P>
      <P size="small">Small</P>
      <Tag size="small" color="red">
        Red
      </Tag>
      <Tag size="medium" color="primary">
        Primary
      </Tag>
      <Tag size="small" color="ghost">
        Ghost
      </Tag>
      <Rating rating={raiting} isEditable setRating={setRating} />
    </div>
  );
}
