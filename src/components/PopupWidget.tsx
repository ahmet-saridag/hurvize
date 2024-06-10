"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

export function PopupWidget() {
  return (
    <div className="fixed bottom-10 right-10">
      <Link
        href="https://wa.me/905417474297/?text=Merhaba%20bilgi%20almak%20istiyorum%20süreç%20hakkında%20yardımcı%20olur%20musunuz?"
        target="_blank"
      >
        <div className="relative animate-bounce">
          <IoLogoWhatsapp className="h-20 w-20 cursor-pointer text-green-500" />

          <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </Link>
    </div>
  );
}
