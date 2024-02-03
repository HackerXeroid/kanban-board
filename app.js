import { sidebar } from "./sidebar";
import { content } from "./content";
import uniqid from "uniqid";

const user1 = {
  name: "John Doe",
  age: 30,
  boards: [
    {
      name: "Personal Board",
      id: uniqid(),
      lists: [
        {
          name: "To-Do List",
          tasks: [
            {
              name: "Buy groceries",
              completed: false,
            },
            {
              name: "Pay bills",
              completed: true,
            },
          ],
        },
        {
          name: "Work List",
          tasks: [
            {
              name: "Finish project report",
              completed: false,
            },
            {
              name: "Schedule meeting",
              completed: false,
            },
          ],
        },
      ],
    },
    {
      name: "Project Board",
      id: uniqid(),
      lists: [
        {
          name: "Backlog",
          tasks: [
            {
              name: "Refine requirements",
              completed: true,
            },
            {
              name: "Create wireframes",
              completed: true,
            },
          ],
        },
        {
          name: "In Progress",
          tasks: [
            {
              name: "Implement feature A",
              completed: false,
            },
            {
              name: "Test feature B",
              completed: true,
            },
          ],
        },
      ],
    },
  ],
};

const user2 = {
  name: "Jane Smith",
  age: 25,
  boards: [
    {
      name: "Personal Board",
      id: uniqid(),
      lists: [
        {
          name: "To-Do List",
          tasks: [
            {
              name: "Buy groceries",
              completed: false,
            },
            {
              name: "Pay bills",
              completed: true,
            },
          ],
        },
        {
          name: "Work List",
          tasks: [
            {
              name: "Finish project report",
              completed: false,
            },
            {
              name: "Schedule meeting",
              completed: false,
            },
          ],
        },
      ],
    },
    {
      name: "Project Board",
      id: uniqid(),
      lists: [
        {
          name: "Backlog",
          tasks: [
            {
              name: "Refine requirements",
              completed: true,
            },
            {
              name: "Create wireframes",
              completed: true,
            },
          ],
        },
        {
          name: "In Progress",
          tasks: [
            {
              name: "Implement feature A",
              completed: false,
            },
            {
              name: "Test feature B",
              completed: true,
            },
          ],
        },
      ],
    },
  ],
};

const activeBoard = user2.boards[1];

export const app = `
<div class="flex">
  ${sidebar(user2.boards, "Todoo")}
  ${content(user2, activeBoard)}
</div>
`;
