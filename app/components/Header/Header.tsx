import { createClient } from "@/prismicio";
import c from "clsx";
import styles from "./Header.module.scss";

const Header = async () => {
  const client = createClient();
  const { data } = await client.getSingle("settings");
  console.log({ data });
  return <div className={c(styles.HeaderWrapper)}>Header</div>;
};

export default Header;
