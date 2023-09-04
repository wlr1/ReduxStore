import React from "react";
import axios from "axios";
import styles from "./FullProduct.module.scss";

import { useParams } from "react-router-dom";

interface ProductData {
  imageUrl: string;
  title: string;
  price: number;
}

const FullProduct: React.FC = () => {
  const [data, setData] = React.useState<ProductData | undefined>();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://64552fa8f803f345763cc845.mockapi.io/items/" + id
        );
        setData(data);
      } catch (e) {
        alert("Error fetching");
      }
    }

    fetchPizza();
    fetchPizza();
  }, [id]);

  if (!data) {
    return <div>"loading..."</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.pizza}>
        <img src={data.imageUrl} alt="" />
        <h2>{data.title}</h2>
        <h4>{data.price} rub</h4>
      </div>
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          eligendi iste iusto officia voluptatem. Accusamus ipsum porro
          reiciendis repellat? A deserunt eum ipsum officia praesentium quam
          quibusdam similique voluptas? Consectetur.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Architecto eligendi iste iusto officia
          voluptatem. Accusamus ipsum porro reiciendis repellat? A deserunt eum
          ipsum officia praesentium quam quibusdam similique voluptas?
          Consectetur.
        </p>
      </div>
    </div>
  );
};

export default FullProduct;
