import { Base } from "../../Base";
import Image2 from "../../../assets/Image2.png";
import Image3 from "../../../assets/Image3.png";
import Image4 from "../../../assets/Image4.png";
import Ilustration6 from "../../../assets/Ilustration6.svg";
import Ilustration7 from "../../../assets/Ilustration7.svg";
import Ilustration8 from "../../../assets/Ilustration8.png";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export const Session3 = () => {
  return (
    <Base>
      <div className="h-screen grid grid-cols-12 gap-10 relative !font-Sora">
        <img
          src={Ilustration6}
          alt=""
          className="absolute -right-10 opacity-30"
        />
        <img
          src={Ilustration7}
          alt=""
          className="hidden absolute right-0 w-48 top-10 opacity-30"
        />
        <div className="col-span-12">
          <h1 className="text-5xl font-normal font-Sora w-full text-center">
            Nossas áreas de{" "}
            <span className="italic font-bold underline">Atuação</span>
          </h1>
        </div>
        <div className="col-span-6 flex flex-col justify-between">
          <div className="flex gap-5">
            <div className="rounded-t-2xl relative">
              <img src={Ilustration8} className="absolute -right-3 -top-3" alt="" />
              <img src={Ilustration8} className="absolute -left-3 -bottom-3 rotate-180" alt="" />

              <div className="overflow-hidden rounded-2xl w-full  ">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-t-2xl "
                  src="https://lh6.googleusercontent.com/Kc_U4wdHPKH8EMu9H4ZQFi4ptC3hdkRrB6M6jl8yj6L7WLO11k_w82vmZrK_mCFDnpYr_d7i5aQ8xZLm3KdD4jXOXgXrAw2PK8pao4NN8lMHURs3KRGrzqdMl3cHqZHHaQ=w1280"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <h1 className="text-3xl font-bold">
                <span className="text-5xl font-light underline text-amber-500">
                  P
                </span>
                olítica
              </h1>
              <p className="font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                beatae voluptate, inventore non officiis recusandae cupiditate
                voluptatibus a saepe unde laborum sunt consequatur harum
                consectetur odio. Nemo vitae quos eius.
              </p>
              <button className="w-fit font-bold text-sm  text-amber-600 transition ease-in-out hover:scale-110 active:scale-95">
                Saiba Mais
                {/* <EventAvailableIcon sx={{ fontSize: 20 }} /> */}
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="rounded-t-2xl relative">
              <img src={Ilustration8} className="absolute -right-3 -top-3" alt="" />
              <img src={Ilustration8} className="absolute -left-3 -bottom-3 rotate-180" alt="" />
              <div className="overflow-hidden rounded-2xl w-full  ">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-t-2xl "
                  src={Image2}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <h1 className="text-3xl font-bold">
                <span className="text-5xl font-light underline text-amber-500">
                  S
                </span>
                ocioeconômia
              </h1>
              <p className="font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                beatae voluptate, inventore non officiis recusandae cupiditate
                voluptatibus a saepe unde laborum sunt consequatur harum
                consectetur odio. Nemo vitae quos eius.
              </p>
              <button className="w-fit font-bold text-sm  text-amber-600 transition ease-in-out hover:scale-110 active:scale-95">
                Saiba Mais
                {/* <EventAvailableIcon sx={{ fontSize: 20 }} /> */}
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex flex-col justify-between">
          <div className="flex gap-5">
            <div className="rounded-t-2xl relative">
              <img src={Ilustration8} className="absolute -right-3 -top-3" alt="" />
              <img src={Ilustration8} className="absolute -left-3 -bottom-3 rotate-180" alt="" />
              <div className="overflow-hidden rounded-2xl w-full  ">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-t-2xl "
                  src={Image3}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <h1 className="text-3xl font-bold">
                <span className="text-5xl font-light underline text-amber-500">
                M
                </span>
                ercado

              </h1>
              <p className="font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                beatae voluptate, inventore non officiis recusandae cupiditate
                voluptatibus a saepe unde laborum sunt consequatur harum
                consectetur odio. Nemo vitae quos eius.
              </p>
              <button className="w-fit font-bold text-sm  text-amber-600 transition ease-in-out hover:scale-110 active:scale-95">
                Saiba Mais
                {/* <EventAvailableIcon sx={{ fontSize: 20 }} /> */}
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="rounded-t-2xl relative">
              <img src={Ilustration8} className="absolute -right-3 -top-3" alt="" />
              <img src={Ilustration8} className="absolute -left-3 -bottom-3 rotate-180" alt="" />
              <div className="overflow-hidden rounded-2xl w-full  ">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-t-2xl "
                  src={Image4}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <h1 className="text-3xl font-bold">
                <span className="text-5xl font-light underline text-amber-500">
                  A
                </span>
                gronegócio
              </h1>
              <p className="font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                beatae voluptate, inventore non officiis recusandae cupiditate
                voluptatibus a saepe unde laborum sunt consequatur harum
                consectetur odio. Nemo vitae quos eius.
              </p>
              <button className="w-fit font-bold text-sm  text-amber-600 transition ease-in-out hover:scale-110 active:scale-95">
                Saiba Mais
                {/* <EventAvailableIcon sx={{ fontSize: 20 }} /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};
