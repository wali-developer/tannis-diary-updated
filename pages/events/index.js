import React, { useState } from "react";
import Modal from "../../components/common/Modal";
import PaginationElement from "../../components/common/PaginationElement";
import CallendarGreenIcon from "../../components/SVGs/DashboardIcons/CallenderGreenIcon";
import GreenEye from "../../components/SVGs/GreenEye";
import LocationIcon from "../../components/SVGs/LocationIcon";
import ModalCallender from "../../components/SVGs/ModalCallender";
import ModalClockIcon from "../../components/SVGs/ModalClockIcon";
import ModalsCloseIcon from "../../components/SVGs/ModalsCloseIcon";

const Index = () => {
  const tabs = ["Upcooming", "Completed", "Total"];

  const [selectedTab, setSelectedtab] = useState(0);
  const [modalVisibility, setModalVisibility] = useState(false);

  const modelList = [
    "Banner design",
    "Buy nets",
    "Write artcile",
    "Give ads on TV",
  ];

  return (
    <>
      <div className="  bg-[#FAFAFC] flex-1 self-stretch px-[20px] py-[20px] lg:py-[20px] xl:py-[36px] lg:pl-[20px] lg:pr-[30px]">
        {/* Tabs start */}
        <div className=" block md:mx-auto lg:mx-0 max-w-[355px] ">
          <div className="flex flex-col sm:flex-row p-1 bg-white rounded-[10px] ">
            {tabs.map((item, index) => {
              return (
                <div
                  key={index + ""}
                  className="rounded-[10px] cursor-pointer flex items-center justify-center"
                  style={{
                    backgroundColor: selectedTab == index ? "#B3DD07" : "white",
                    boxShadow:
                      selectedTab == index
                        ? "0px 5px 20px rgba(0, 0, 0, 0.05)"
                        : null,
                  }}
                  onClick={() => setSelectedtab(index)}
                >
                  <h1
                    className="font-semibold text-sm w-[116px] text-center py-[11px] transition-all duration-500 ease-in"
                    style={{
                      color: selectedTab == index ? "white" : "#52575C",
                    }}
                  >
                    {item}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        {/* Tabs end */}

        {/* Table start */}
        <div className="bg-white mt-[31px] rounded-[8px]  relative py-[24px] overflow-x-hidden shadow-sm flex flex-col ">
          {/* Heading start */}
          <div className=" flex flex-col space-y-[20px] sm:space-y-0 sm:flex-row sm:items-center justify-between pl-[30px] pr-[21px] ">
            {/* Left */}
            <div>
              <h1 className="text-black font-semibold text-xl">All events</h1>
            </div>
            {/* Right */}
            <div className="flex sm:flex-row flex-col sm:space-x-3 space-y-3 sm:space-y-0  lg:space-x-[30px] xl:space-x-[50px] ">
              <div className="flex flex-row items-center justify-end space-x-3   lg:space-x-[30px] xl:space-x-[50px]">
                <div
                  className=" h-[42px] rounded-[6px] border border-rgba(0, 0, 0, 0.2) cursor-pointer 
                                    px-[10px] flex flex-row items-center space-x-[10px]"
                >
                  <h1 className="text-xs">This week</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-3 h-3 mt-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row justify-end  items-center space-x-3   lg:space-x-[30px] xl:space-x-[15px]">
                <div
                  className="w-[92px] h-[42px] rounded-[6px] border border-rgba(0, 0, 0, 0.2) cursor-pointer 
                                    px-[10px] flex flex-row items-center space-x-[14px]"
                >
                  <h1 className="text-xs">12/06</h1>
                  <CallendarGreenIcon />
                </div>
                <p>To</p>
                <div
                  className="w-[92px] h-[42px] rounded-[6px] border border-rgba(0, 0, 0, 0.2) cursor-pointer 
                                    px-[10px] flex flex-row items-center space-x-[14px]"
                >
                  <h1 className="text-xs">12/06</h1>
                  <CallendarGreenIcon />
                </div>
              </div>
            </div>
          </div>
          {/* Heading end */}
          <div className="relative self-stretch ">
            <div className=" max-w-[90vw] sm:container sm:mx-auto  lg:w-full mt-[20px] overflow-x-auto lg:overflow-hidden relative  ">
              <table className="w-full ">
                <thead>
                  <tr className="bg-[#F8F9FA]   text-left">
                    <th className="pl-[20px]  py-[12px] font-medium lg:font-semibold  text-base  whitespace-nowrap  ">
                      #
                    </th>
                    <th className="  py-[12px]  font-medium lg:font-semibold text-base whitespace-nowrap min-w-[100px] tracking-wide">
                      Image
                    </th>
                    <th className=" py-[12px]  font-medium  lg:font-semibold  text-base whitespace-nowrap lg:min-w-[100px] tracking-wide">
                      Club name
                    </th>
                    <th className=" py-[12px]  font-medium  lg:font-semibold  text-base whitespace-nowrap lg:min-w-[100px] tracking-wide pl-2">
                      Date
                    </th>
                    <th className=" py-[12px]  font-medium  lg:font-semibold  text-base  whitespace-nowrap lg:min-w-[200px] tracking-wide">
                      Format
                    </th>
                    <th className=" py-[12px]  font-medium  lg:font-semibold  text-base  whitespace-nowrap lg:min-w-[150px] tracking-wide">
                      level/Category
                    </th>
                    <th className=" py-[12px]  font-medium  lg:font-semibold  text-base  whitespace-nowrap lg:min-w-[150px] tracking-wide">
                      Entry fees
                    </th>
                    <th className=" py-[12px]  font-medium  lg:font-semibold  text-base  whitespace-nowrap lg:min-w-[150px] tracking-wide">
                      Number of player
                    </th>
                    <th className=" py-[12px]  font-medium   lg:font-semibold  text-base whitespace-nowrap tracking-wide pr-5">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {new Array(10).fill(null).map((__, index) => {
                    return (
                      <tr
                        key={index + ""}
                        className="bg-white   border-b border-[#E8E8E8] text-sm text-[#52575C]"
                      >
                        <td className="px-[10px] lg:px-0   py-[17px] ">
                          <h1 className="pl-[20px] min-w-[50px] ">
                            {index + 1}
                          </h1>
                        </td>
                        <td className="px-[10px] lg:px-0 py-[17px] ">
                          <img
                            src="/event.svg"
                            alt=""
                            className="w-[40px] h-[40px] rounded-full object-cover"
                          />
                        </td>
                        <td className="px-[10px] lg:px-0 py-[17px] ">
                          <h1 className=" min-w-[120px]">Tennis Squad club</h1>
                        </td>
                        <td className="px-[10px] lg:px-0 py-[17px] ">
                          <h1 className="min-w-[120px] pl-2">22 May, 2022</h1>
                        </td>
                        <td className="px-[10px] lg:px-0 py-[17px] ">
                          <h1 className="min-w-[120px]">tie break at 6-6</h1>
                        </td>
                        <td className="px-[10px] lg:px-0 py-[17px] ">
                          <h1 className="min-w-[120px]">Junior</h1>
                        </td>
                        <td className="px-[10px] lg:px-0 py-[17px] ">
                          <h1 className="min-w-[120px]">€100</h1>
                        </td>
                        <td className="px-[10px] lg:px-0 py-[17px] ">
                          <h1 className="min-w-[120px]">60 players</h1>
                        </td>
                        <td
                          className="cursor-pointer"
                          onClick={() => setModalVisibility(true)}
                        >
                          <GreenEye />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <PaginationElement />
        </div>
        {/* Table end */}
      </div>
      <Modal show={modalVisibility} hide={() => setModalVisibility(false)}>
        <div className=" relative pb-[30px] bg-white rounded-2xl overflow-hidden z-50">
          <div className="w-full px-[17px] bg-[#F8F9FA] flex flex-row justify-between items-center py-[11px]">
            <h1 className="text-base text-[#000000] font-semibold">
              Event details
            </h1>
            <div
              className="cursor-pointer"
              onClick={() => setModalVisibility(false)}
            >
              <ModalsCloseIcon />
            </div>
          </div>
          <div className="px-[10px] sm:px-[20px] lg:px-[30px] relative">
            <img
              src="./tenisgstadium.jfif"
              alt="modalimage"
              className="h-[255px]  w-full my-[10px] md:my-[20px] rounded-2xl"
            />
          </div>

          <div className="px-[10px] sm:px-[20px] lg:px-[30px] relative">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-black font-semibold text-[22px]">
                Jersey-O-Tennis
              </h1>
              <h2 className="text-black text-base"> €100 entry fee</h2>
            </div>
            {/* row start */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-[13px] space-y-2 sm:space-y-0">
              <div className="flex flex-row items-center space-x-[12px]">
                <h1 className="text-base text-[#1E1E1E] font-normal opacity-95">
                  Level/category:
                </h1>
                <h1 className="text-black text-base font-medium">Junior</h1>
              </div>
              <div className="flex flex-row items-center space-x-[12px] ">
                <h1 className="text-base text-[#1E1E1E] font-normal opacity-95">
                  Game format:
                </h1>
                <div className="bg-[#B3DD07] rounded-lg py-3 px-4">
                  <h1 className="text-xs text-white font-semibold">
                    tie break at 6-6
                  </h1>
                </div>
              </div>
            </div>
            {/* row end */}
            {/* row start */}
            <div className="mt-[13px]">
              <div className="flex flex-row items-center space-x-[10px]">
                <h1 className="text-base text-[#1E1E1E] font-normal opacity-95">
                  Number of players:
                </h1>
                <h1 className="text-black text-base font-medium">12 players</h1>
              </div>
            </div>
            {/* row end */}
            {/* Paragraph start */}
            <div className="mt-[10px] flex flex-col items-start">
              <h1 className="text-[#1E1E1E] text-base">Game notes:</h1>
              <p className="text-black text-base mt-[5px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sagittis dolor egestas pharetra sem augue commodo fermentum.
                Adipiscing velit, malesuada scelerisque scelerisque ipsum nibh
                odio.
              </p>
            </div>
            {/* Paragraph end */}
            {/* List start */}
            <div className="mt-[10px]">
              <h1 className="text-[#1E1E1E] text-base">Tasks:</h1>
              <div className="flex flex-col space-y-1">
                {modelList.map((item, index) => {
                  return (
                    <div
                      className="flex flex-row items-center "
                      key={index + ""}
                    >
                      <div className=" px-2 pt-1">
                        <div className="h-[5px] w-[5px] bg-[#000000] rounded-full"></div>
                      </div>
                      <h1 className="text-base font-normal text-black">
                        {item}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* List end */}
            {/* Last icons start */}
            <div className="flex flex-row items-center space-x-[52px] mt-[20px]">
              <div className="flex flex-row items-center space-x-2">
                <CallendarGreenIcon />
                <h1>18.04.2022</h1>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <LocationIcon />
                <h1>AT&T club</h1>
              </div>
            </div>
            {/* Last icons end */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Index;
