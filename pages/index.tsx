import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [raiting, setRating] = useState<number>(4);

  return (
    <>
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
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
