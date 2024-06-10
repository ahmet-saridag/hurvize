import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import PolonyaCalisma from "../../public/img/assets/polonya-calisma.jpeg";

import Ahmet from "../../public/img/assets/ahmet.jpeg";
import furkan from "../../public/img/assets/furkan.jpeg";
import safiye from "../../public/img/assets/safiye.jpg";
import korkmaz from "../../public/img/assets/oguzhan-korkmaz.jpeg";

const people: any = [
  {
    name: "Oğuzhan Korkmaz",
    role: "CEO & Kurucu Ortak",
    imageUrl: korkmaz,
  },
  {
    name: "Safiye Çelik",
    role: "Deneyimli Avukat",
    imageUrl: safiye,
  },
  {
    name: "Ahu Çelik",
    role: "Deneyimli Avukat",
    imageUrl: safiye,
  },
  {
    name: "Furkan Taş",
    role: "Sosyal Medya & Tasarım",
    imageUrl: furkan,
  },
  {
    name: "Ahmet Sarıdağ",
    role: "Yazılım Mühendisi & Teknoloji",
    imageUrl: Ahmet,
  },
  // More people...
];

export const Testimonials = () => {
  return (
    <Container>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Takımımız ile tanışın
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Alanında uzman kadromuz ihtaçlarınız için tek çözüm!
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person: any) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    src={person.imageUrl}
                    width="100"
                    height="100"
                    alt="Avatar"
                    placeholder="blur"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
