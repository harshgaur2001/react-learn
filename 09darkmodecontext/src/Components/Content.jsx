export default function Content() {
  return (
    <>
      <div className="w-sm mx-auto border-1 border-black rounded-2xl overflow-hidden text-black dark:text-white dark:bg-black">
        <div>
          <img src="https://images.pexels.com/photos/31728429/pexels-photo-31728429.jpeg" />
        </div>
        <div className="text-2xl font-bold text-center py-4 px-2">
          Content Title
        </div>
        <div className="text-center pb-4 px-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
    </>
  );
}
