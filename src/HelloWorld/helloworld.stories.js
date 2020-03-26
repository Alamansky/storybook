import React from "react";
import { HelloWorld } from "./HelloWorld";

export default { title: "HelloWorld" };

export const Basic = () => <HelloWorld />;
export const WithText = () => <HelloWorld>Text</HelloWorld>;
