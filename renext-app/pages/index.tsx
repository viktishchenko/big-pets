import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Button, Htag, Input, P, Rating, Tag, Textarea } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState(0);
  const [rating, setRating] = useState(4);

  useEffect(() => {
    console.log("Counter " + counter);
  });

  return (
    <>
      <Htag tag="h1">Заголовок {counter}</Htag>
      <Button
        onClick={() => {
          setCounter((x) => x + 1);
        }}
        appearance="primary"
        arrow="right"
      >
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Buttons
      </Button>
      <P size="l">Large</P>
      <P size="m">Medium</P>
      <P size="s">Small</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag color="green">Green</Tag>
      <Tag color="gray">Gray</Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="input" />
      <Textarea placeholder="textarea" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + `/api/top-page/find`,
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
