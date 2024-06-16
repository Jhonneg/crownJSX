import { Outlet } from "react-router-dom";
import Directory from "../../src/components/directory";

export default function Home() {
  return (
    <>
      <Directory  />
      <Outlet />
    </>
  );
}
