"use client";

import qs from "query-string";

import { useRouter, useSearchParams } from "next/navigation";

const catItems = [
  {
    id: 1,
    name: "Category 1",
  },
  {
    id: 2,
    name: "Category 2",
  },
  {
    id: 3,
    name: "Category 3",
  },
  {
    id: 4,
    name: "Category 4",
  },
];

const sortItems = [
  {
    value: "asc",
    label: "Ascending",
  },
  {
    value: "desc",
    label: "Descending",
  },
  {
    value: "newest",
    label: "Newest First",
  },
  {
    value: "oldest",
    label: "Oldest First",
  },
];

const CategoriesPage = () => {
  const router = useRouter();
  const params = useSearchParams();

  const onCategoryChange = (id: string) => {
    let currentQuery = null;

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const catArr = currentQuery?.categories
      ? (currentQuery.categories as string).split(",")
      : [];

    const updatedCatArr = catArr.includes(id)
      ? catArr.filter((i: any) => i !== id)
      : [...catArr, id];

    const query = updatedCatArr.length > 0 ? updatedCatArr.join(",") : "";

    const updatedQuery: any = {
      ...currentQuery,
      categories: query,
    };

    const url = qs.stringifyUrl(
      {
        url: "/collection",
        query: updatedQuery,
      },
      { skipNull: true, encode: false }
    );

    router.push(url);
  };

  const onOrderChange = (value: string) => {
    let currentQuery = null;

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      sort: value,
    };

    const url = qs.stringifyUrl(
      {
        url: "/collection",
        query: updatedQuery,
      },
      { skipNull: true, encode: false }
    );

    router.push(url);
  };

  const isCategoryChecked = (id: string) => {
    let currentQuery = null;

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const catArr = currentQuery?.categories
      ? (currentQuery.categories as string).split(",")
      : [];

    return catArr.includes(id);
  };

  const isOrderChecked = (value: string) => {
    let currentQuery = null;

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    return currentQuery?.sort === value;
  };

  return (
    <div className="flex flex-col items-center space-y-8 my-10">
      <h1 className="text-2xl font-semibold text-center">Category Section</h1>

      <div className="w-1/2 flex justify-between gap-8">
        {/* categories  */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Categories
          </h3>

          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {catItems.map((item) => (
              <li
                key={item.id}
                className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
              >
                <div className="flex items-center ps-3">
                  <input
                    id={item.name}
                    type="checkbox"
                    defaultChecked={isCategoryChecked(String(item.id))}
                    onChange={() => onCategoryChange(String(item.id))}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={item.name}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {item.name}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* sort orders  */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Sort Orders
          </h3>

          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {sortItems.map((item: any) => (
              <li
                key={item.label}
                className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
              >
                <div className="flex items-center ps-3">
                  <input
                    id={item.label}
                    type="radio"
                    name="list-radio"
                    checked={isOrderChecked(item.value)}
                    onChange={() => onOrderChange(item.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={item.label}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {item.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-center gap-8">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Price Range
        </h3>
      </div>
    </div>
  );
};

export default CategoriesPage;
