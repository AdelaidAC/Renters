import React from "react";
import Input from "./Input";

export default function CDate() {
  const cdate = new Date().toLocaleDateString();
  return(
    <Input value = {cdate} width = "80px" className = "text-center"/>
  )
}