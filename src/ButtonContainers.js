// structure button info into an object for each button and also add the button keys here so they can be added when the buttons are rendered

const DEFAULT_BUTTON_HEIGHT = "20%";
const DEFAULT_NUM_BUTTON_WIDTH = "27%";
const DEFAULT_OP_BUTTON_WIDTH = "37%";

export const BUTTON_CONTAINERS = {
  id: "root-button-container",
  style: {
    height: "70%",
    width: "99%",
  },
  classes: "center flex",
  children: [
    {
      id: "numeric",
      style: {
        height: "93%",
        width: "53%",
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
        height: "92%",
        width: "38%",
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
