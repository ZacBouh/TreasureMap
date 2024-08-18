"use client";

import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().trim().email({ message: "Email non valide" }),
  password: z.string().min(6, {
    message: "Le mot de passe doit contenir au moins 6 caractères",
  }),
});

const AuthForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formHandler = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="min-w-[300px] w-[60%] ">
      <header className="mb-8">
        <div className="flex mb-10">
          <Image
            src={"/icons/logo.svg"}
            height={32}
            width={32}
            alt="logo Treasure Map"
          />
          <h1 className="font-ibm-plex-serif text-3xl font-bold">
            TreasureMap
          </h1>
        </div>
        <h2 className="font-semibold text-4xl mb-3">
          {type === "sign-in" ? "Connexion" : "Inscription"}
        </h2>
        <h3 className="text-base font-normal">
          {type === "sign-in" ? "Ravi de vous revoir 😊" : ""}
        </h3>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(formHandler)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="votre@email.fr"
                    {...field}
                    className="h-12"
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input type="password" {...field} className="h-12" />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-treasureMain w-full h-12 text-white"
          >
            Se connecter
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
