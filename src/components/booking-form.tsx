"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useToast } from "@/hooks/use-toast";
import { CountrySelect, type Country } from "./country-select";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  whatsapp: z.string().min(8, {
    message: "Please enter a valid WhatsApp number.",
  }),
});

type BookingFormValues = z.infer<typeof formSchema>;

export function BookingForm() {
    const { toast } = useToast();
    const [selectedCountry, setSelectedCountry] = useState<Country | undefined>();

    const form = useForm<BookingFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            whatsapp: "",
        },
    });

    function onSubmit(values: BookingFormValues) {
        const phone = selectedCountry ? selectedCountry.dialCode + values.whatsapp.replace(/\D/g, '') : values.whatsapp.replace(/\D/g, '');
        window.open(`https://wa.me/${phone}`, '_blank');
        toast({
            title: "¡Reserva enviada!",
            description: "Gracias por tu interés. Nos pondremos en contacto contigo pronto.",
        });
        form.reset();
  }

  return (
    <section id="book" className="px-4 pb-12 md:pb-20">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-card/90 dark:bg-card/80 p-6 md:p-8 rounded-xl shadow-lg">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tu número de WhatsApp</FormLabel>
                      <div className="flex items-center gap-2">
                          <CountrySelect onCountryChange={setSelectedCountry} />
                          <FormControl>
                            <Input placeholder="9 1234 5678" type="tel" {...field} />
                          </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full h-12 px-6 bg-primary text-primary-foreground text-base font-bold transition-transform hover:scale-105 rounded-full"
                >
                  Chatea y reserva ahora
                </Button>
              </form>
            </Form>
        </div>
      </div>
    </section>
  );
}
