import React from "react";
import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
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
    </div>
  );
}
