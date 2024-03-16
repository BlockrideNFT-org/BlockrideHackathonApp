import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import tw, { styled } from "twin.macro";
import { ReactComponent as DropdownIcon } from "app/assets/icons/caret-down.svg";

const people = [{ name: "Last 30days" }, { name: "Last Week" }];

export default function ListBox() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 z-1">
          <Listbox.Button className=" flex items-center gap-[8px]  bg-white p-[8.5px]  rounded-[8px] border border-[#EBEDF0]">
            <span className="block truncate text-[14px] font-[500]">
              {selected.name}
            </span>
            <span className="">
              {/* @ts-ignore */}
              <DropdownIcon />
            </span>
          </Listbox.Button>
          {/* @ts-ignore */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options as={Dropdown}>
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    ` ${active ? " list-none" : "text-gray-900 list-none"}`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <Option key={person.name}>
                      <div className="container">
                        <div>
                          <p>{person.name}</p>
                        </div>
                      </div>
                    </Option>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

const Dropdown = styled.div`
  ${tw`w-full cursor-pointer rounded-[8px] border border-transparent bg-[#fff] mt-[10px]`};
  ${tw` max-h-[286px] overflow-scroll`};
  ${tw`absolute z-10 shadow-[0px 0px 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.08)]`};
`;

const Option = styled.div`
  ${tw`flex justify-between items-center px-[10px]  py-[10px] text-[14px] font-[500]`};
  .container {
    ${tw`flex gap-[14px]`}
  }
`;
