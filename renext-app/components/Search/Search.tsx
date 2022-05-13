import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from "..";
import { Button } from "..";
import { useState } from "react";
import GlassIcon from "./glass.svg";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className={cn(className, styles.search)}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button appearance="primary" className={styles.button} onClick={() => {}}>
        <GlassIcon />
      </Button>
    </div>
  );
};
