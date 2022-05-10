import { TopPageComponentProps } from "./TopPageComponenet.props";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};
