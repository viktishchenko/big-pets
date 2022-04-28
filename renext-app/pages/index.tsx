import { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { Layout } from "../layout/Layout";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState(0);
  const [rating, setRating] = useState(4);

  useEffect(() => {
    console.log("Counter " + counter);
  });

  return (
    <Layout>
      <Htag tag="h1">{counter}</Htag>
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
    </Layout>
  );
}
