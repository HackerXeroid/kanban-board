import { navbar } from "./navbar";

export const content = (user, activeBoard) => {
  return `<main class="w-full">
    ${navbar(user, activeBoard)}
  </main>`;
};
