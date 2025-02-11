# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug causes an infinite loop due to improper handling of state updates within the `useEffect` function.

## Bug Description
The `useEffect` hook in `bug.js` attempts to update the state variable `count` without specifying dependencies.  This causes the effect to run repeatedly, leading to an infinite loop and crashing the application.  The solution shows how to correct it.

## How to Reproduce
Clone this repository and run `npm start` or `yarn start`. You will observe the application crashing or behaving unexpectedly due to the infinite loop.

## Solution
The `bugSolution.js` demonstrates a corrected version of the `useEffect` hook that avoids this bug by correctly including the `count` variable in the dependency array.