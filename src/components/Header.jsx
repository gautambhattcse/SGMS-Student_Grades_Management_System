import React from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="p-3 bg-white shadow-sm">
      <div className="mx-0 flex justify-between items-center px-6">
        <img src="./logo.png" alt="logo" width={90} height={90} className="w-[100px] h-[50px]" />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" className="text-white hover:bg-blue-700">Home</Button>
            </li>
            <li>
              <Button variant="ghost" className="text-white hover:bg-blue-700">About</Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
