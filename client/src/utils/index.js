import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
    const randomIndex = MAh.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}