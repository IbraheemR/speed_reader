import { writable, Writable } from "svelte/store";

export default class Controller {
  currentIndex = -1;
  lastLineTimestamp: number;
  startTimestamp: number;
  finishTimestamp: number;
  wpmHistory: number[] = [];
  totalWords = 0;

  state = State.READY;

  store: Writable<Controller>;
  subscribe: (
    run: (value: Controller) => void,
    invalidate?: (value?: Controller) => void
  ) => () => void;

  constructor(public words: string[]) {
    this.store = writable(this);
    this.subscribe = this.store.subscribe;

    window.addEventListener("keydown", (event) => {
      if (event.code == "Space") this.onPlayerInput();
    });
  }

  private onPlayerInput() {
    switch (this.state) {
      case State.READY:
        this.state = State.IN_PROGRESS;
        this.onStart();
        this.onPlayerInput();
        break;

      case State.IN_PROGRESS:
        this.onLineEnd();
        if (this.currentIndex < this.words.length - 1) {
          this.currentIndex++;
        } else {
          this.state = State.FINISHED;
          this.onFinish();
        }
        break;

      case State.FINISHED:
        break;
    }

    this.store.set(this);
  }

  private onStart() {
    this.startTimestamp = Date.now();
  }

  private onLineEnd() {
    let now = Date.now();
    if (this.lastLineTimestamp) {
      let diff = now - this.lastLineTimestamp;
      let words = this.currentLine.split(" ").length;

      this.totalWords += words;

      let wpm = words / (diff / 1000 / 60);

      this.wpmHistory.push(wpm);
    }

    this.lastLineTimestamp = now;
  }

  private onFinish() {
    this.finishTimestamp = Date.now();
  }

  get prevLine() {
    return this.words[this.currentIndex - 1];
  }
  get currentLine() {
    return this.words[this.currentIndex];
  }
  get nextLine() {
    return this.words[this.currentIndex + 1];
  }
  get lastWpm() {
    return this.wpmHistory[this.wpmHistory.length - 1];
  }
  get totalWpm() {
    let wpm = this.totalWords / ((this.finishTimestamp ?? Date.now()) - this.startTimestamp) * 1000 * 60
    return Number.isNaN(wpm) ? undefined : wpm;
  }
}

export enum State {
  READY,
  IN_PROGRESS,
  FINISHED,
}
