import { Meteors } from "@/components/animation/meteor-review";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Review } from "@/lib/default";
import { ArrowRight } from "lucide-react";
import { ReviewHighlighter } from "./review-highlighter";

type MeteorsProps = {
  title: string;
  review: Review;
};

export function MeteorsDemo({ title, review }: MeteorsProps) {
  return (
    <div className="h-[350px]">
      <div className="w-[350px] h-[350px] relative max-w-xs">
        <div className="absolute inset-0 h-full w-full dark:bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] dark:bg-red-500 rounded-full blur-2xl" />
        <div className="flex relative shadow-xl dark:bg-gray-900 border  dark:border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex-col justify-between">
          <div>
            {" "}
            <div className="flex gap-4">
              <div className="p-1 rounded-full border flex items-center justify-center mb-4 dark:border-gray-500">
                <ArrowRight />
              </div>
              <h1 className="font-bold text-xl mb-4 z-50">{title}</h1>
            </div>
            <p className="font-normal text-base text-slate-500 mb-4 z-50 flex h-[180px]">
              <ReviewHighlighter review={review} />
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"outline"}>Read More</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle> {title}</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <ReviewHighlighter
                  review={review}
                  className="!overflow-y-auto"
                />
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
