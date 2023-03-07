import Grid from "@/components/common/Grid";
import HeroImage from "@/assets/images/Hero.png";
import React from "react";
import Button from "../common/Button";

export default function StepByStep() {
  return (
    <Grid>
      <section>
        <div
          className="w-full bg-center bg-cover h-full"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <Grid className="pt-10">
            <div className="w-[70%] p-[100px]">
              <div className="text-slate-200">
                <h3 className="text-base uppercase tracking-[.09em] py-4">
                  posted on <span className="font-bold">startup</span>
                </h3>
                <h1 className="text-5xl font-semibold">
                  Step-by-step guide to choosing great font pairs
                </h1>
                <p className="py-4">
                  By <span className="text-yellow-500">James West</span> | May
                  23, 2022
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <div className="my-12">
                  <Button variant="warning" className="py-3 px-10">
                    Read More{" "}
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </section>
    </Grid>
  );
}
