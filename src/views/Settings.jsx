import { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();
  return dog;
};

export const Settings = () => {
  // uses data passed in the element as loader, in this case, the dataLoader
  const loadedData = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state == "loading") {
    return (
      <>
        {navigation.state}
        <h1>Settings</h1>
        <p>WAIT</p>
      </>
    );
  }
  return (
    <>
      {navigation.state}
      <h1>Settings</h1>
      {loadedData.url}
      <img src={loadedData.url}></img>
    </>
  );
};
