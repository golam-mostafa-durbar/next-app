"use client";

const items = [
  {
    id: 1,
    title: "Bangladesh",
  },
  {
    id: 1,
    title: "Pakistan",
  },
  {
    id: 1,
    title: "Iran",
  },
  {
    id: 1,
    title: "China",
  },
  {
    id: 1,
    title: "Japan",
  },
];

interface ISelectModalProps {
  onClose: () => void;
  selectedItem: string;
  setSelectedItem: (selectedItem: string) => void;
}

const SelectModal = ({
  onClose,
  selectedItem,
  setSelectedItem,
}: ISelectModalProps) => {
  const onSelectedItem = (item: string) => {
    setSelectedItem(item);
    onClose();
  };

  return (
    <div className="w-full bg-white shadow-md rounded-md text-black py-2 h-max border border-gray-300">
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item.id}
            className={`hover:bg-blue-100 px-4 py-2.5 cursor-default ${
              selectedItem === item.title && "bg-blue-100"
            }`}
            onClick={() => onSelectedItem(item.title)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectModal;
