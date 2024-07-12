import { CircleHelp, Clock, Dices, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "./_components/ui/button";
import { Card } from "./_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./_components/ui/carousel";

const topboardGames: {
  name: string;
  description: string;
  imagePath: string;
}[] = [
  {
    name: "Bloomburrow Pre-release",
    description:
      "Continuing with Monday nights as everyone really enjoyed the extra day if the weekend ended up being busy. Enjoy the cutest set of the year!",
    imagePath: "/boardgame.png",
  },
  {
    name: "Disney trading card game",
    description:
      "We're hosting a Lorcana learn to play event on July 22nd 6pm! Just grab a starter deck at Sip & Play and we'll have players on hand to teach you.\nExcited to see you there!",
    imagePath: "/boardgame2.webp",
  },
];

export default function Home() {
  return (
    <div className="mx-auto mt-4 w-3/4">
      <Card className="p-6 flex justify-between items-center">
        <h1 className="text-xl">Reservations are open for any party size!🎉</h1>
        <div className="space-y-2 flex flex-col items-end">
          <Button asChild>
            <Link href="https://www.exploretock.com/sipnplay/">
              Reserve Now
            </Link>
          </Button>
          <p className="hidden text-xs xl:flex gap-1">
            <span>or email us at </span>
            <Link href="emailto:sipnplaynyc@gmail.com" className="text-primary">
              sipnplaynyc@gmail.com
            </Link>
          </p>
        </div>
      </Card>
      <div className="mt-6 grid xl:grid-cols-3 xl:gap-x-5 max-xl:gap-y-5">
        <div className="space-y-2">
          <h1 className="text-xl flex gap-1">
            <span className={"text-primary/90"}>Open</span> Now!
          </h1>
          <Card className="px-5 py-4 space-y-2">
            <h1 className="flex items-center gap-2 text-lg text-primary mb-1">
              <Clock className="w-[1em] h-[1em]" /> Opening Hours
            </h1>
            <p className="text-sm">
              Sunday: 10am-11pm
              <br />
              Monday-Thurday: 11am-11pm
              <br />
              Friday: 11am-12am
              <br />
              Saturday: 10am-12am
            </p>
            <p className="text-xs mt-1">
              <span className="text-primary/75">*</span> Our kitchen closes 2.5
              - 3 hours early
            </p>
            <h1 className="flex items-center gap-2 text-lg text-primary/75 mt-4 mb-1">
              <MapPin className="w-[1em] h-[1em]" /> Location
            </h1>
            <p className="text-sm">
              471 5th Ave.
              <br />
              Brooklyn, NY 11215
              <br />
              <Link href="emailto:sipnplaynyc@gmail.com">
                sipnplaynyc@gmail.com
              </Link>
              <br />
              718-971-1684
            </p>
            <div>
              <Link href="https://www.google.com/maps/dir/?api=1&destination=471%205th%20Ave,%20Brooklyn,%20NY%2011215,%20USA">
                <img src="/map.png" alt="Map" className="rounded-sm" />
              </Link>
            </div>
          </Card>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl">
            <span className="text-primary">New</span> Board Games
          </h1>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {topboardGames.map((game) => (
                <CarouselItem key={game.name}>
                  <div className="relative rounded-md overflow-hidden">
                    <img
                      src={game.imagePath}
                      alt="Game Poster"
                      className="w-full"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-black/80"></div>
                    <div className="absolute bottom-[1rem] left-0 space-y-2">
                      <h1 className="mt-4 mx-4 text-white text-lg font-bold">
                        {game.name}
                      </h1>
                      <p className="mx-4 text-white">{game.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl flex items-center gap-2">
            <CircleHelp className="w-[1em] h-[1em] text-primary" />
            FAQ
          </h1>
          <Card className="space-y-3 pb-4">
            <img
              src="/faq.webp"
              alt="Three Wise Monopoly Guys"
              className="rounded-md"
            />
            <div className="mx-4">
              <h1 className="flex items-center gap-2 text-lg text-primary mb-1">
                <Dices className="w-[1em] h-[1em]" /> How it works?
              </h1>
              <p className="text-sm">
                Come on in with your friends and family and play boardgames from
                our collection of over 500+ games! Just $10 a person for 3 hours
                of gameplay. ($12 a person Friday-Sunday and Holidays) Play
                while enjoying bubble tea, coffee, beer sandwiches or salads and
                have a great time! If you want to guarantee a table, you can
                make a reservation which is $15 a person for 3 hours of
                gameplay.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
