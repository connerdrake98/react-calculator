// structure button info into an object for each button and also add the button keys here so they can be added when the buttons are rendered

const DEFAULT_BUTTON_HEIGHT = "6.5vh";
const DEFAULT_NUM_BUTTON_WIDTH = "7vh";
const DEFAULT_OP_BUTTON_WIDTH = "7vh";

export const BUTTON_CONTAINERS = {
  id: "root-button-container",
  style: {
    height: "40vh",
    width: "75vh",
  },
  classes: "center flex",
  children: [
    {
      id: "numeric",
      style: {
        height: "37vh",
        width: "27vh",
      },
      classes: "center flex padded-container",
      buttons: [
        {
          id: "7",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "8",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "9",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "4",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "5",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "6",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "1",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "2",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "3",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "0",
          style: {
            width: "58%",
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: ".",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
      ],
    },
    {
      id: "auxilliaries",
      style: {
        height: "37vh",
        width: "18vh",
      },
      classes: "center flex padded-container",

      buttons: [
        {
          id: "+",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "-",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "*",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "/",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "(",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: ")",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "=",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
        {
          id: "clr",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
          },
        },
      ],
    },
  ],
};
