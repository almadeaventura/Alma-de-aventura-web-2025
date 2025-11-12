
"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "./ui/button";

type VideoDialogProps = {
  videoUrl: string;
  videoTitle: string;
  trigger: React.ReactNode;
};

export function VideoDialog({
  videoUrl,
  videoTitle,
  trigger,
}: VideoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="p-0 border-0 max-w-3xl bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{videoTitle}</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full aspect-video rounded-lg"
          />
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-10 right-0 h-8 w-8 rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
