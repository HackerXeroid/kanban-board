import { avatar } from "./avatar";

export const navbar = (user, activeBoard) => {
  return `
  <nav
  class="block w-full px-4 py-5 mx-auto text-black bg-white border-2 shadow-slate-200 border-b-slate-100 border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-5">
  <div class="container flex items-center justify-between mx-auto text-blue-gray-900">
    <h3 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">
      ${activeBoard.name}
    </h2>
    ${avatar(user)}
  </div>
</nav>`;
};
