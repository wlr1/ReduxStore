import React from "react";
import ContentLoader from "react-content-loader";

const ProductSkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="274" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="318" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="426" rx="10" ry="10" width="60" height="33" />
    <rect x="129" y="419" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default ProductSkeleton;
