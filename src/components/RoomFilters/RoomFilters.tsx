"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

interface RoomFiltersProps {
  onFilterChange: (filters: {
    capacity?: number;
    bedType?: string;
    view?: string;
  }) => void;
}

export const RoomFilters = ({ onFilterChange }: RoomFiltersProps) => {
  const [capacity, setCapacity] = useState<number | undefined>(undefined);
  const [bedType, setBedType] = useState<string | undefined>(undefined);
  const [view, setView] = useState<string | undefined>(undefined);

  const handleApplyFilters = () => {
    onFilterChange({ capacity, bedType, view });
  };

  const handleResetFilters = () => {
    setCapacity(undefined);
    setBedType(undefined);
    setView(undefined);
    onFilterChange({}); // Reset filters
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      <div>
        <label
          htmlFor="capacity"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Capacidad
        </label>
        <Input
          id="capacity"
          type="number"
          placeholder="Ej. 2"
          value={capacity || ""}
          onChange={(e) =>
            setCapacity(
              e.target.value ? Number.parseInt(e.target.value) : undefined
            )
          }
          className="w-full"
        />
      </div>
      <div>
        <label
          htmlFor="bedType"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Tipo de Cama
        </label>
        <Select onValueChange={setBedType} value={bedType}>
          <SelectTrigger id="bedType" className="w-full">
            <SelectValue placeholder="Seleccionar tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="King">King</SelectItem>
            <SelectItem value="Queen">Queen</SelectItem>
            <SelectItem value="Twin">Twin</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label
          htmlFor="view"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Vista
        </label>
        <Select onValueChange={setView} value={view}>
          <SelectTrigger id="view" className="w-full">
            <SelectValue placeholder="Seleccionar vista" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Ocean">Océano</SelectItem>
            <SelectItem value="City">Ciudad</SelectItem>
            <SelectItem value="Garden">Jardín</SelectItem>
            <SelectItem value="Mountain">Montaña</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={handleApplyFilters}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        >
          <Search className="w-4 h-4 mr-2" />
          Buscar
        </Button>
        <Button
          onClick={handleResetFilters}
          variant="outline"
          className="w-full bg-transparent"
        >
          Restablecer
        </Button>
      </div>
    </div>
  );
};
