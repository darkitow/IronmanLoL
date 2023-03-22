import { writable } from "svelte/store";

const storedStep = localStorage.getItem("step");
export const step = writable(storedStep === null ? 0 : 1);

step.subscribe(value => {
    localStorage.setItem("step", value.toString() );
});