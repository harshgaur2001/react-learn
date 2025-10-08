import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function User() {
  const [searchParams] = useSearchParams();
  const allQueryParams = Object.fromEntries([...searchParams]);

  const { userid } = useParams();

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-2xl">
        <div>User: {userid}</div>
        <div>
          All Query Parameters:
          <br />
          <pre>{JSON.stringify(allQueryParams, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}

export default User;
