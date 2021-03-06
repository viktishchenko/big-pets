import { useEffect, useReducer } from "react";
import { Advantages, HhData, Htag, Product, Sort, Tag } from "../../components";
import { SortEnum } from "../../components/Sort/Sort.props";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { sortReducer } from "./sort.reducer";
import { TopPageComponentProps } from "./TopPageComponenet.props";
import styles from "./TopPageComponent.module.css";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispachSort] = useReducer(
    sortReducer,
    { products, sort: SortEnum.Rating }
  );

  const setSort = (sort: SortEnum) => {
    dispachSort({ type: sort });
  };

  useEffect(() => {
    dispachSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page && page.title}</Htag>
        {products && (
          <Tag
            color="gray"
            size="m"
            aria-label={products.length + " элементов"}
          >
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div role="list">
        {/* <div role='list'> == <ul> , role='listitem' for product == <li> */}
        {sortedProducts &&
          sortedProducts.map((p) => (
            <Product role="listitem" layout key={p._id} product={p} />
          ))}
      </div>
      <div className={styles.hhtitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag className={styles.tpTag} key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};
