import ButtonGoback from "../components/ButtonError";
import "../styles/navbar.css";

const ErrorPage = () => {
  return (
    <div className="bg-[url('/Background-4.png')] bg-no-repeat bg-cover">
    <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
     

      <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
        <img
          className="w-full h-auto max-h-[32rem] rounded-lg object-contain"
          src="/errorimage.png"
          alt="Error illustration"
        />
      </div>

       <div className="w-full lg:w-1/2">
        
        <h1 className="mt-3 text-2xl font-semibold text-zinc-100  md:text-3xl">
         ⚠️ Page not found
        </h1>
        <p className="mt-4 text-white ">
          Sorry, the page you are looking for doesn't exist. Here are some
          helpful links:
        </p>
        <ButtonGoback />
      </div>

    </div>
    </div>
  );
};

export default ErrorPage;
