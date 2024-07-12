"use client";

import { useState } from "react";
import Model, { ModelName } from "../_components/3dmodel";
import Heading from "../_components/heading";
import { Card } from "../_components/ui/card";

const menu: {
  [key: string]: {
    name: string;
    details: string;
    model: ModelName;
  }[];
} = {
  Coffee: [
    { name: "LATTE", details: `$4.75(H)/$5.25(C)`, model: "Coffee Cup" },
    { name: "CORTADO", details: `$4.25(H)/$4.75(C)`, model: "Coffee Mug" },
    {
      name: "DRIP COFFEE",
      details: `Small: $3(H)/$3.50(C)\nMedium: $3.50(H)\nLarge: $4(H)/$4.25(C)`,
      model: "Coffee Cup",
    },
    { name: "CAFE AU LAIT", details: `$3.25(H)`, model: "Coffee Mug" },
    { name: "CAPPUCINO", details: `$4.50(H)`, model: "Coffee Cup" },
    { name: "MOCHA", details: `$5.75(H)/$6.25(C)`, model: "Coffee Mug" },
    { name: "RED EYE", details: `$4.50(H)/$4.75(C)`, model: "Coffee Cup" },
    {
      name: "AMERICANO",
      details: `$3.75(H)/$4.25(C)`,
      model: "Coffee Mug",
    },
  ],
  "Speciality Drinks": [
    {
      name: "MATCHA LATTE",
      details: `$5.25(H)/$5.75(C)`,
      model: "Bubble Tea And Cookies",
    },
    {
      name: "HOT CHOCOLATE",
      details: `$4.50(H)\nS'mores: $5.50`,
      model: "Desserts",
    },
    {
      name: "NUTELLA LATTE",
      details: `$5.75(H)/$6.25(C)`,
      model: "Bubble Tea And Cookies",
    },
    {
      name: "CHAI",
      details: `$5.00(H)/$5.50(C)`,
      model: "Desserts",
    },
    {
      name: "DIRTY CHAI",
      details: `$6.25(H)/$6.75(C)`,
      model: "Bubble Tea And Cookies",
    },
    {
      name: "LAVENDAR LATTE",
      details: `$5.75(H)/$6.25(C)`,
      model: "Dice",
    },
    {
      name: "ROSE LATTE",
      details: `$5.75(H)/$6.25(C)`,
      model: "Bubble Tea And Cookies",
    },
    {
      name: "BROWN SUGAR LATTE",
      details: `$5.75(H)/$6.25(C)`,
      model: "Bubble Tea And Cookies",
    },
    {
      name: "BUMBLEBEE LATTE",
      details: "$6.25(H)/$6.75(C)",
      model: "Bubble Tea And Cookies",
    },
  ],
};

const Menu = () => {
  const [models, setModels] = useState<ModelName[]>([]);

  return (
    <div className="lg:mx-auto max-lg:mx-3 w-3/4 mt-4">
      <Heading name="Menu" />
      {Object.entries(menu).map(([category, items], i) => {
        return (
          <section
            className={`flex ${i % 2 == 1 && `flex-row-reverse`}`}
            key={i}
          >
            <Card className="rounded-md lg:px-12 max-lg:px-3 lg:py-10 max-lg:py-4 w-1/2">
              <SubHeading name={category} />
              <div className="grid lg:grid-cols-2 gap-y-4 gap-x-2 w-5/8">
                {items.map((item, j) => {
                  return (
                    <MenuItem
                      name={item.name}
                      details={item.details}
                      key={j}
                      onClick={() => {
                        setModels((prev) => {
                          const temp = [...prev];
                          temp[i] = item.model;
                          return temp;
                        });
                      }}
                    />
                  );
                })}
              </div>
            </Card>
            <div className="w-1/2">
              <Model model={models[i]} />
            </div>
          </section>
        );
      })}
    </div>
  );
};

function MenuItem({
  name,
  details,
  onClick = () => {},
}: {
  name: string;
  details: string;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick}>
      <h3 className="text-xl cursor-pointer">{name.toUpperCase()}</h3>
      {details.split("\n").map((detail, i) => (
        <p className="text-sm text-primary/75" key={i}>
          {detail}
        </p>
      ))}
    </div>
  );
}

function SubHeading({ name }: { name: string }) {
  return (
    <h2 className="mb-6 text-2xl font-bold text-foreground">
      {name}
      <hr className="w-8 border-2 border-primary mt-2 rounded-full" />
    </h2>
  );
}

export default Menu;
