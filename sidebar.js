import { boardButton } from "./boardButton";

export const sidebar = (boards, sidebarName, sidebarImg) => {
  return `
    <div class="relative flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div class="flex items-center gap-4 p-4 mb-2">
        <img
          src=${
            !sidebarImg &&
            "https://docs.material-tailwind.com/img/logo-ct-dark.png"
          }
          alt="brand"
          class="w-8 h-8"
        />
        <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          ${sidebarName}
        </h5>
      </div>
      <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        ${boards.map((board) => boardButton(board)).join("\n")}
      </nav>
    </div>
  `;
};
