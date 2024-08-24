import Image from "next/image";

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/education2.png"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="mb-9  text-center">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-4xl">
                  Education
                </h3>
              </div>
              <div className="text-center">
                {/* Senior Secondary */}
                <div className="dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100 mb-9 rounded-3xl border-2 p-8 transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:shadow-2xl">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Maharaja Agarsain Public School
                  </h3>
                  <p className="mb-2 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Non Medical (2019 - 2020)
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Percentage - 82%
                  </p>
                </div>
                {/* Bachelor of Technology */}
                <div className="dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100 mb-1 rounded-3xl border-2 p-8 transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:shadow-2xl">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Guru Tegh Bahadur Institute of Technology
                  </h3>
                  <p className="mb-2 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    BTECH(CSE) (2020 - 2024)
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    CGPA - 9.2/10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
