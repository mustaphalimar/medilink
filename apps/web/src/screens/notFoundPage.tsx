import notfoundimg from "../assets/404cat.jpg";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center">
      <h1 className="text-4xl py-6 font-semibold">Oops! Page Not Found</h1>
      <div>
        <img
          src={notfoundimg}
          className="w-full h-full bg-cover"
          alt="notfoundimg"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
