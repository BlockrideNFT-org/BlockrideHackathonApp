import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const timelines = ["24H", "7D", "1M", "3M", "6M", "1Y", "All"];

interface Props {
  tabs: string[];
}

export default function Tabs(props: Props) {
  const { tabs } = props;

  return (
    <div className="w-full max-w-[403px] tablet:max-w-full ">
      <Tab.Group>
        <Tab.List className="flex justify-evenly bg-[#f3f4f7]  py-[5px] px-[5px] rounded-[8px] ">
          {tabs.map((t) => (
            <Tab key={t} className="focus:outline-none flex-grow ">
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "rounded-lg py-[10px] px-[15px] text-[13px] font-[600] text-[#353749] leading-5 focus:outline-none bg-white shadow w-full"
                      : "rounded-lg py-[10px] px-[15px] text-[13px] font-[600] text-[#353749] leading-5 focus:outline-none w-full "
                  }
                >
                  {t}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
