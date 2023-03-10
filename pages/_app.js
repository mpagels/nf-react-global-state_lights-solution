import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, isOn: false, name: "Living Room" },
  { id: 2, isOn: false, name: "Kitchen" },
  { id: 3, isOn: false, name: "Bedroom" },
  { id: 4, isOn: false, name: "Bathroom" },
  { id: 5, isOn: false, name: "Garage" },
  { id: 6, isOn: false, name: "Porch" },
  { id: 7, isOn: false, name: "Garden" },
  { id: 8, isOn: false, name: "Office" },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(lightId) {
    const updatedLightArray = lights.map((light) =>
      light.id === lightId ? { ...light, isOn: !light.isOn } : light
    );
    setLights(updatedLightArray);
  }

  function handleToggleAllOff() {
    const updatedLightArray = lights.map((light) => {
      return { ...light, isOn: false };
    });
    setLights(updatedLightArray);
  }
  function handleToggleAllOn() {
    const updatedLightArray = lights.map((light) => {
      return { ...light, isOn: true };
    });
    setLights(updatedLightArray);
  }

  const countOfLightsThatAreOn = lights.filter((light) => light.isOn).length;
  const isDimmed =
    lights.filter((light) => light.isOn === false).length === lights.length;

  console.log(isDimmed);
  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggle}
        countOfLightsThatAreOn={countOfLightsThatAreOn}
        handleToggleAllOff={handleToggleAllOff}
        handleToggleAllOn={handleToggleAllOn}
      />
    </Layout>
  );
}
