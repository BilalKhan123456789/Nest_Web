import React from "react";
import { Vendors_Data } from "../LocalDataBase/Index";

function VendorList() {
  return (
    <>
      <Cards />
    </>
  );
}

export default VendorList;

export const Cards = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-24 mx-auto flex flex-wrap">
          <div className="flex justify-center flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-3xl font-bold title-font text-gray-900">
              Vendors List
            </h1>

            <div className="mt-5 flex  mx-auto  justify-between items-center border shadow-xl p-5 rounded-full w-full sm:w-1/2">
              <input
                type="text"
                placeholder="Search vendors (by name or ID)..."
                className="outline-none placeholder:text-sm w-full "
                name=""
                id=""
              />

              <svg
                height="26"
                viewBox="0 0 20 20"
                width="26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m8.5 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.3387897-.4783412 2.5658568-1.2734386 3.5196163l4.126992 4.1268303c.1952621.1952622.1952621.5118446 0 .7071068-.1735664.1735663-.4429908.1928515-.6378589.0578554l-.0692479-.0578554-4.1268303-4.126992c-.9537595.7950974-2.1808266 1.2734386-3.5196163 1.2734386-3.03756612 0-5.5-2.4624339-5.5-5.5 0-3.03756612 2.46243388-5.5 5.5-5.5zm0 1c-2.48528137 0-4.5 2.01471863-4.5 4.5 0 2.4852814 2.01471863 4.5 4.5 4.5 2.4852814 0 4.5-2.0147186 4.5-4.5 0-2.48528137-2.0147186-4.5-4.5-4.5z"
                  fill="#212121"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 -m-4">
            {Vendors_Data.map((v, i) => {
              return (
                <>
                  <div key={i} className=" lg:w-[48%] md:w-full">
                    <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                      <div className=" w-36 h-full sm:mr-8 sm:mb-0 mb-4 items-center   ">
                        <img src={v.img} alt="" />
                        <p className="p-2 bg-green-400 text-center mt-3 rounded-md text-white  text-xs">
                          380 products
                        </p>
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs text-gray-500">{v.title}</p>

                        <h2 className="text-gray-900 title-font font-bold text-xl  mt-2 ">
                          {v.name}
                        </h2>

                        <div className="flex items-center gap-1 mt-3 mb-2">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              id="Star 1"
                              d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                              fill="#FFE033"
                            />
                          </svg>

                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              id="Star 1"
                              d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                              fill="#FFE033"
                            />
                          </svg>

                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              id="Star 1"
                              d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                              fill="#FFE033"
                            />
                          </svg>

                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              id="Star 1"
                              d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                              fill="#FFE033"
                            />
                          </svg>

                          <p className="text-gray-400 text-xs">(4.0)</p>
                        </div>

                        <p className="leading-relaxed mt-10 flex text-xs">
                          <img
                            className="h-6 w-6"
                            src="https://icones.pro/wp-content/uploads/2021/02/icone-de-broche-de-localisation-verte.png"
                            alt=""
                          />
                          Address: 5171 W Campbell Ave undefined Kent, Utah
                          53127 United States
                        </p>

                        <div className="items-center justify-between flex">
                          <p className="text-xs items-center  w-52  gap-1 flex">
                            <img
                              className="h-4  w-4"
                              src="https://www.veryicon.com/download/png/miscellaneous/cloud-call-center/call-up?s=256"
                              alt=""
                            />
                            Call Us:(+91) - 540-025-124553
                          </p>

                          <button className="text-sm bg-green-500 text-white rounded-md p-1.5 hover:bg-orange-500 outline-none duration-300">
                            Visit Store
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
