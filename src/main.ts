import App from "./App.svelte";

import Controller from "./controller/Controller";

const controller = new Controller([
  "SCENE I. A desert place.",
  "Thunder and lightning. Enter three Witches ",
  "First Witch",
  "When shall we three meet again",
  "In thunder, lightning, or in rain?",
  "Second Witch",
  "When the hurlyburly's done,",
  "When the battle's lost and won.",
  "Third Witch",
  "That will be ere the set of sun.",
  "First Witch",
  "Where the place?",
  "Second Witch",
  "Upon the heath.",
  "Third Witch",
  "There to meet with Macbeth.",
  "First Witch",
  "I come, Graymalkin!",
  "Second Witch",
  "Paddock calls.",
  "Third Witch",
  "Anon.",
  "ALL",
  "Fair is foul, and foul is fair:",
  "Hover through the fog and filthy air.",
  "Exeunt",
]);

const app = new App({
  target: document.body,
  props: {
    controller,
  },
});

export default app;
