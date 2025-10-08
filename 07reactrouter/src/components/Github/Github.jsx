import React from "react";
import { useLoaderData } from "react-router-dom";

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/harshgaur2001");
  return response.json();
};

function Github() {
  const data = useLoaderData();
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-wrap gap-5 items-center justify-around rounded-2xl">
        <div>
          Github Username: {data.login}
          <br />
          Github followers: {data.followers}
        </div>
        <div>
          <img
            src={data.avatar_url}
            className="rounded-2xl"
            width={300}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Github;
