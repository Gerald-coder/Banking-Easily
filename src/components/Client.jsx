import React from "react";
import { clients } from "../constants";

const Client = () => {
  return (
    <main className="flex justify-center items-center my-[5rem]">
      <div className="flex  flex-wrap justify-center items-center w-full gap-7">
        {clients.map((client) => {
          return (
            <div
              key={client.id}
              className="flex-1 sm:min-w-[195px] min-w-[120px] mt-[3rem]"
            >
              <img
                src={client.logo}
                alt="logo"
                className="sm:w-[190px] w-[100px]"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Client;
