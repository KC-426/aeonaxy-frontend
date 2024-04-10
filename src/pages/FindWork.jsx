import Header from "../components/header";
import Footer from "../components/Footer";

export default function FindWork() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="mb-10 md:mb-20">
          <h1 className="text-center font-bold text-3xl md:text-5xl mt-10 md:mt-20">
            What brings you to Bribble?
          </h1>
          <h2 className="text-center text-lg md:text-xl mt-4 md:mt-8 text-gray-500">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </h2>
        </div>

        <div className="work-details flex flex-wrap md:-mx-4">
          <div className="hire-work-data flex-1 p-4 md:p-8 w-full md:w-1/3 h-400">
            <div className="flex justify-center">
              <img
                src="/src/images/designer.jpg"
                alt=""
                className="h-full w-auto"
              />
            </div>
            <h1 className="mt-3 text-center font-semibold text-lg md:text-xl">
              I'm a designer looking to share my work
            </h1>
          </div>
          <div className="hire-work-data flex-1 p-4 md:p-8 w-full md:w-1/3 h-400">
            <div className="flex justify-center">
              <img
                src="/src/images/hire-designer.jpg"
                alt=""
                className="h-full w-auto"
              />
            </div>
            <h1 className="mt-5 text-center font-semibold text-lg md:text-xl">
              I'm looking to hire a designer
            </h1>
          </div>
          <div className="hire-work-data flex-1 p-4 md:p-8 w-full md:w-1/3 h-400">
            <div className="flex justify-center">
              <img
                src="/src/images/insp.jpg"
                alt=""
                height={"400px"}
              />
            </div>
            <h1 className="mt-5 text-center font-semibold text-lg md:text-xl">
              I'm looking for design inspiration
            </h1>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-20 rounded-md">
            Finish
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center font-semibold text-gray-500 mb-20">
          or Press RETURN
        </div>
      </div>
      <Footer />
    </>
  );
}
