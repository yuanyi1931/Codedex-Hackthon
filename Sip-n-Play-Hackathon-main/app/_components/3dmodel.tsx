import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BubbleTeaNCookies from "./models/BubbleTeaNCookies";
import CoffeeCup from "./models/CoffeeCup";
import CoffeeMug from "./models/CoffeeMug";
import Desserts from "./models/Desserts";
import Dice from "./models/Dice";

export type ModelName =
  | "Coffee Cup"
  | "Coffee Mug"
  | "Bubble Tea And Cookies"
  | "Desserts"
  | "Dice";

const ModelComponent = ({ model }: { model: ModelName }) => {
  return (
    <Stage environment={"city"}>
      {model === "Coffee Cup" && <CoffeeCup position={[0, -0.5, 2.5]} />}
      {model === "Coffee Mug" && <CoffeeMug position={[0, 0, 0]} />}
      {model === "Bubble Tea And Cookies" && (
        <BubbleTeaNCookies position={[0, -1, -1]} />
      )}
      {model === "Desserts" && <Desserts position={[0, 0, 0]} />}
      {model === "Dice" && <Dice position={[0, 0, 0]} />}
    </Stage>
  );
};

const Model = ({ model }: { model: ModelName }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <ModelComponent model={model} />
      <OrbitControls enableDamping dampingFactor={0.1} />
    </Canvas>
  );
};

export default Model;
