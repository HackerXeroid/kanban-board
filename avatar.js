export const avatar = (user) => {
  return `
    <div class="flex items-center gap-4">
      <img
        src=${!user.img && "https://docs.material-tailwind.com/img/face-2.jpg"}
        alt=${user.name}
        class="inline-block relative object-cover object-center !rounded-full w-12 h-12"
      />
      <div>
      <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-inherit">
        ${user.name}
      </h5>
      </div>
    </div>
  `;
};
