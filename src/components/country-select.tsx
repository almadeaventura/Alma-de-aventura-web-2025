"use client";

import * as React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type Country = {
  value: string;
  label: string;
  dialCode: string;
  icon: React.ReactNode;
};

const topCountries: Country[] = [
  { value: "CL", label: "Chile", dialCode: "56", icon: <Image src="/icons/cl.svg" alt="Chile" width={24} height={18} className="rounded-sm" /> },
  { value: "AR", label: "Argentina", dialCode: "54", icon: <Image src="/icons/ar.svg" alt="Argentina" width={24} height={18} className="rounded-sm" /> },
  { value: "BR", label: "Brasil", dialCode: "55", icon: <Image src="/icons/br.svg" alt="Brasil" width={24} height={18} className="rounded-sm" /> },
];

const allCountries: Country[] = [
  ...topCountries,
  { value: "CO", label: "Colombia", dialCode: "57", icon: <Image src="/icons/co.svg" alt="Colombia" width={24} height={18} className="rounded-sm" /> },
  { value: "EC", label: "Ecuador", dialCode: "593", icon: <Image src="/icons/ec.svg" alt="Ecuador" width={24} height={18} className="rounded-sm" /> },
  { value: "ES", label: "España", dialCode: "34", icon: <Image src="/icons/es.svg" alt="España" width={24} height={18} className="rounded-sm" /> },
  { value: "MX", label: "México", dialCode: "52", icon: <Image src="/icons/mx.svg" alt="México" width={24} height={18} className="rounded-sm" /> },
  { value: "PE", label: "Perú", dialCode: "51", icon: <Image src="/icons/pe.svg" alt="Perú" width={24} height={18} className="rounded-sm" /> },
  { value: "US", label: "United States", dialCode: "1", icon: <Image src="/icons/us.svg" alt="United States" width={24} height={18} className="rounded-sm" /> },
  { value: "UY", label: "Uruguay", dialCode: "598", icon: <Image src="/icons/uy.svg" alt="Uruguay" width={24} height={18} className="rounded-sm" /> },
  { value: "VE", label: "Venezuela", dialCode: "58", icon: <Image src="/icons/ve.svg" alt="Venezuela" width={24} height={18} className="rounded-sm" /> },
];


type CountrySelectProps = {
  onCountryChange: (country: Country | undefined) => void;
  variant?: 'default' | 'hero';
};

export function CountrySelect({ onCountryChange, variant = 'default' }: CountrySelectProps) {
  const [selectedCountryValue, setSelectedCountryValue] = React.useState("CL");

  React.useEffect(() => {
    onCountryChange(allCountries.find(c => c.value === selectedCountryValue));
  }, [selectedCountryValue, onCountryChange]);

  const handleValueChange = (value: string) => {
    setSelectedCountryValue(value);
  };

  const selectedCountry = allCountries.find(c => c.value === selectedCountryValue);

  return (
    <Select value={selectedCountryValue} onValueChange={handleValueChange}>
      <SelectTrigger
        className={cn(
          "w-auto gap-2 focus:ring-0 focus:ring-offset-0",
          variant === 'default' ? "h-10 border-input bg-background" : "border-0 bg-transparent shadow-none",
          variant === 'hero' && "pl-3 pr-2"
        )}
      >
        <SelectValue asChild>
          <div className="flex items-center gap-2">
            {selectedCountry?.icon}
            <span className="text-sm text-foreground/80">+{selectedCountry?.dialCode}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="max-h-64">
        {allCountries.map((country, index) => (
          <React.Fragment key={country.value}>
            {index === topCountries.length && <div className="my-1 h-px bg-border" />}
            <SelectItem value={country.value}>
              <div className="flex items-center gap-2">
                {country.icon}
                <span>{country.label} (+{country.dialCode})</span>
              </div>
            </SelectItem>
          </React.Fragment>
        ))}
      </SelectContent>
    </Select>
  );
}
