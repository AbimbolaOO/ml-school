// import facepaint from "facepaint";

const breakpoints = [360, 414, 896, 1200];

export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
