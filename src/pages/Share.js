import React from "react";
import key from "../img/key.png";
import arrow from "../img/arrow-down.png";

function Share() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 px-10 space-y-10">
        <h3 className="text-xl text-black font-semibold">Share Document</h3>

        <div className="bg-blue p-8 rounded-lg flex space-x-2">
          <div className="bg-white rounded-md p-4">
            <p className="text-base font-medium">
              https://drive.com/file/d/1V_5zPJDskasjkIIIlysNFXGhtlZ7EI2EcHLF/view?
            </p>
          </div>
          <button className="bg-green rounded-md p-3 text-white text-base">
            Copy link
          </button>
        </div>
        <div className="space-y-5">
          <h3 className="text-xl text-black font-semibold">Permission</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <img src={key} alt="Key" />
              <h4 className="text-black font-medium">Restricted</h4>
              <img className="h-5" src={arrow} alt="Arrow Down" />
            </div>
            <p className="text-base">Only people you add can open this link</p>
          </div>
          <h5 className="text-green font-medium text-base underline">
            Send feedback
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Share;
