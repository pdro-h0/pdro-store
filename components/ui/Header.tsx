"use client";

import React from "react";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Card } from "./card";
import { Button } from "./button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "./sheet";
import { Separator } from "./separator";

import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
  LogOutIcon,
} from "lucide-react";

const Header = () => {
  const { status, data } = useSession();
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Boas Compras!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => signIn()}
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => signOut()}
              >
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            )}

            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">PDRO</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
