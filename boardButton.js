import { boardListButton } from "./boardListButton";

export const boardButton = (board) => `
  <div class="relative block w-full">
    <div
      role="button"
      class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
    >
      <button
        type="button"
        class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900"
      >
        <div class="grid mr-4 place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
          ${board.name}
        </p>
      </button>
    </div>
    <div class="overflow-hidden">
      <div class="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
        <nav class="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
          ${board.lists.map((list) => boardListButton(list)).join("\n")}
        </nav>
      </div>
    </div>
  </div>
`;
