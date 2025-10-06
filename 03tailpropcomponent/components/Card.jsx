function Card({ username = "unnomynous", company = "Pending..." }) {
  return (
    <>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl border border-indigo-600">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg"
          />
        </div>
        <div className="flex items-center flex-col md:items-start">
          <span className="text-2xl font-medium">{username}</span>
          <span className="font-medium text-sky-500">{company}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
