// Implementation of the toggle button

let toggleBall = document.getElementById("toggle__ball");

toggleBall.addEventListener("click", () => {
  if (
    toggleBall.style.marginLeft === "" ||
    toggleBall.style.marginLeft === "0.4rem"
  ) {
    toggleBall.style.marginLeft = "2rem";
    backgroundTwo();
  } else if (toggleBall.style.marginLeft === "2rem") {
    toggleBall.style.marginLeft = "3.8rem";
    backgroundThree();
  } else {
    toggleBall.style.marginLeft = "0.4rem";
    backgroundOne();
  }
});

// Implementation of the background changes and other effects using functions

const customStyles = {
  bg1: {
    __bg1_color_one: "hsl(222, 26%, 31%)",
    __bg1_color_two: "hsl(223, 31%, 20%)",
    __bg1_color_three: "hsl(224, 36%, 15%)",
    __bg1_key_bg: "hsl(225, 21%, 49%)",
    __bg1_key_shadow: "hsl(224, 28%, 35%)",
    __bg1_toggleandkeybg_red: " hsl(6, 63%, 50%)",
    __bg1__key__text: "hsl(221, 14%, 31%)",
    __bg1_keyred_shadow: "hsl(6, 70%, 34%)",
    __bg1_keybg_lightgrayishorange: "hsl(30, 25%, 89%)",
    __bg1_keygrayishorange_shadow: "hsl(28, 16%, 65%)",
  },
  bg2: {
    __bg2_color_one: "hsl(0, 0%, 90%)",
    __bg2_color_two: "hsl(0, 5%, 81%)",
    __bg2_color_three: "hsl(0, 0%, 93%)",
    __bg2_key_bg: "hsl(185, 42%, 37%)",
    __bg2_keycyan_shadow: "hsl(185, 58%, 25%)",
    __bg2_toggleandkeybg_orange: "hsl(25, 98%, 40%)",
    __bg2_keyshadow_orange: "hsl(25, 99%, 27%)",
    __bg2_lightgrayishyellow: "hsl(45, 7%, 89%)",
    __bg2_key_shadow_darkgrayishorange: "hsl(35, 11%, 61%)",
    __bg2_key_text: "hsl(60, 10%, 19%)",
  },
  bg3: {
    __bg3_color_one: "hsl(268, 75%, 9%)",
    __bg3_color_two: "hsl(268, 71%, 12%) ",
    __bg3_toggleandkeybgcyan: "hsl(176, 100%, 44%)",
    __bg3_keybg: "hsl(268, 47%, 21%)",
    __bg3_keyshadow: "hsl(290, 70%, 36%)",
    __bg3_darkviolet: "hsl(281, 89%, 26%)",
    __bg3_magenta_shadow: "hsl(285, 91%, 52%)",
    __bg3_purecyan: "hsl(176, 100%, 44%)",
    __bg3_cyanshadow: " hsl(177, 92%, 70%)",
    __bg3_text: "hsl(52, 100%, 62%)",
    __bg3_darkblue_text: "hsl(198, 20%, 13%)",
  },
  __text_white: "hsl(0, 0%, 100%)",
};

function backgroundOne() {
  //Variables
  let body, toggleField, input, keysSection, buttons, del, reset, equal;
  body = document.getElementById("body");
  body.style.background = customStyles.bg1.__bg1_color_one;
  body.style.color = customStyles.__text_white;
  toggleField = document.getElementById("toggleField");
  toggleField.style.background = customStyles.bg1.__bg1_color_two;
  toggleBall.style.background = customStyles.bg1.__bg1_toggleandkeybg_red;
  input = document.getElementById("number");
  input.style.background = customStyles.bg1.__bg1_color_three;
  input.style.color = customStyles.__text_white;
  keysSection = document.getElementById("keysSection");
  keysSection.style.background = customStyles.bg1.__bg1_color_two;
  buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = customStyles.bg1.__bg1__key__text;
    buttons[i].style.background =
      customStyles.bg1.__bg1_keybg_lightgrayishorange;
    buttons[
      i
    ].style.boxShadow = `0px 4px 0px 2px ${customStyles.bg1.__bg1_keygrayishorange_shadow}`;
  }
  del = document.getElementById("del");
  reset = document.getElementById("reset");
  equal = document.getElementById("equal");
  del.style.background = customStyles.bg1.__bg1_key_bg;
  del.style.color = customStyles.__text_white;
  del.style.boxShadow = `0px 4px 0px 2px ${customStyles.bg1.__bg1_key_shadow}`;
  reset.style.background = customStyles.bg1.__bg1_key_bg;
  reset.style.color = customStyles.__text_white;
  reset.style.boxShadow = `0px 4px 0px 2px ${customStyles.bg1.__bg1_key_shadow}`;
  equal.style.color = customStyles.__text_white;
  equal.style.background = customStyles.bg1.__bg1_toggleandkeybg_red;
  equal.style.boxShadow = `0px 4px 0px 2px ${customStyles.bg1.__bg1_keyred_shadow}`;
}

function backgroundTwo() {
  //Variables
  let body, toggleField, input, keysSection, buttons, del, reset, equal;
  body = document.getElementById("body");
  body.style.background = customStyles.bg2.__bg2_color_one;
  body.style.color = customStyles.bg2.__bg2_key_text;
  toggleField = document.getElementById("toggleField");
  toggleField.style.background = customStyles.bg2.__bg2_color_two;
  toggleBall.style.background = customStyles.bg2.__bg2_toggleandkeybg_orange;
  input = document.getElementById("number");
  input.style.background = customStyles.bg2.__bg2_color_three;
  input.style.color = customStyles.bg2.__bg2_key_text;
  keysSection = document.getElementById("keysSection");
  keysSection.style.background = customStyles.bg2.__bg2_color_two;
  buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = customStyles.bg2.__bg2_key_text;
    buttons[i].style.background = customStyles.bg2.__bg2_lightgrayishyellow;
    buttons[
      i
    ].style.boxShadow = `0px 4px 0px 2px ${customStyles.bg2.__bg2_key_shadow_darkgrayishorange}`;
  }
  del = document.getElementById("del");
  reset = document.getElementById("reset");
  equal = document.getElementById("equal");
  del.style.background = customStyles.bg2.__bg2_key_bg;
  del.style.color = customStyles.__text_white;
  del.style.boxShadow = `0px 4px 0px 2px ${customStyles.bg2.__bg2_keycyan_shadow}`;
  reset.style.background = customStyles.bg2.__bg2_key_bg;
  reset.style.color = customStyles.__text_white;
  reset.style.boxShadow = `0px 4px 0px 2px ${customStyles.bg2.__bg2_keycyan_shadow}`;
  equal.style.color = customStyles.__text_white;
  equal.style.background = customStyles.bg2.__bg2_toggleandkeybg_orange;
  equal.style.boxShadow = `0px 4px 0px 2px ${customStyles.bg2.__bg2_keyshadow_orange}`;
}

function backgroundThree() {
  //Variables
  let body, toggleField, input, keysSection, buttons, del, reset, equal;
  body = document.getElementById("body");
  body.style.background = customStyles.bg3.__bg3_color_one;
  body.style.color = customStyles.bg3.__bg3_text;
  toggleField = document.getElementById("toggleField");
  toggleField.style.background = customStyles.bg3.__bg3_color_two;
  toggleBall.style.background = customStyles.bg3.__bg3_toggleandkeybgcyan;
  input = document.getElementById("number");
  input.style.background = customStyles.bg3.__bg3_color_two;
  input.style.color = customStyles.bg3.__bg3_text;
  keysSection = document.getElementById("keysSection");
  keysSection.style.background = customStyles.bg3.__bg3_color_two;
  buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = customStyles.bg3.__bg3_text;
    buttons[i].style.background = customStyles.bg3.__bg3_keybg;
    buttons[
      i
    ].style.boxShadow = `0px 4px 0px 2px ${customStyles.bg3.__bg3_keyshadow}`;
  }
  del = document.getElementById("del");
  reset = document.getElementById("reset");
  equal = document.getElementById("equal");
  del.style.background = customStyles.bg3.__bg3_darkviolet;
  del.style.color = customStyles.__text_white;
  reset.style.background = customStyles.bg3.__bg3_darkviolet;
  reset.style.color = customStyles.__text_white;
  equal.style.color = customStyles.bg3.__bg3_darkblue_text;
  equal.style.background = customStyles.bg3.__bg3_purecyan;
  equal.style.boxShadow = `0px 4px 0px 2px ${customStyles.bg3.__bg3_cyanshadow}`;
}

// Implementation of the calculation using the CALCULATOR
//TODO:
