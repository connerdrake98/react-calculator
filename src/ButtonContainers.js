// structure button info into an object for each button and also add the button keys here so they can be added when the buttons are rendered

const DEFAULT_BUTTON_HEIGHT = "20%";
const DEFAULT_NUM_BUTTON_WIDTH = "27%";
const DEFAULT_OP_BUTTON_WIDTH = "39%";
const MINIMUM_BUTTON_HEIGHT = "12vw";
const BUTTON_HEIGHT_EXPRESSION = `min(${DEFAULT_BUTTON_HEIGHT}, ${MINIMUM_BUTTON_HEIGHT}, 7.5vh)`;

export const BUTTON_CONTAINERS = {
  id: "root-button-container",
  style: {
    height: "max(70%, 35vh)",
    width: "99%",
  },
  classes: "center flex",
  children: [
    {
      id: "numeric",
      style: {
        height: "min(95%, 62vw)",
        width: "54%",
      },
      classes: "center flex padded-container",
      buttons: [
        {
          id: "7",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "8",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "9",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "4",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "5",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "6",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "1",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "2",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "3",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "0",
          style: {
            width: "60.5%",
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: ".",
          style: {
            width: DEFAULT_NUM_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
      ],
    },
    {
      id: "auxilliaries",
      style: {
        height: "min(95%, 62vw)",
        width: "37%",
      },
      classes: "center flex padded-container",

      buttons: [
        {
          id: "+",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "-",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "*",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "/",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "(",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: ")",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "=",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
        {
          id: "clr",
          style: {
            width: DEFAULT_OP_BUTTON_WIDTH,
            height: BUTTON_HEIGHT_EXPRESSION,
          },
        },
      ],
    },
  ],
};
