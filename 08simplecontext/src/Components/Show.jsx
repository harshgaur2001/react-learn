import MyContext from "../Context/MyContext";
import { useContext } from "react";

export default function Show() {
  const { Mine } = useContext(MyContext);
  if (!Mine)
    return <h1 className="text-2xl text-center">No data saved in context.</h1>;
  return (
    <>
      <div className="text-2xl text-center">Save Data: {Mine.username}</div>
    </>
  );
}
