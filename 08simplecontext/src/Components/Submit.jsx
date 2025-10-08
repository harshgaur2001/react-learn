import { useState, useContext } from "react";
import MyContext from "../Context/MyContext";

export default function Submit() {
  const [username, setUsername] = useState("");
  const { setMine } = useContext(MyContext);

  return (
    <>
      <div>
        <form
          className="py-20 flex flex-col justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            setMine({ username });
          }}
        >
          <input
            className="shadow-sm px-2 py-1 rounded outline-0"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <br />
          <input
            className="cursor-pointer shadow-sm px-4 py-1 rounded outline-0 bg-gray-600 text-white duration-200 hover:bg-gray-700"
            type="submit"
            value={"Save"}
          />
        </form>
      </div>
    </>
  );
}
