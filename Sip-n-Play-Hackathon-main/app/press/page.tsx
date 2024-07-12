import Link from "next/link";
import Heading from "../_components/heading";
import { Button } from "../_components/ui/button";
import { Card } from "../_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../_components/ui/carousel";

const Press = () => {
  return (
    <div className="mx-auto mt-4 w-3/4">
      <Heading name="News" />
      <div className="space-y-4">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <VideoCard
                headline="SIP, PLAY AND STAY AT THIS PARK SLOPE CAFE"
                date="January 15, 2020"
                imagePath="/press.png"
                pressLogoPath="/NY1.png"
                videoLink="https://ny1.com/nyc/all-boroughs"
              />
            </CarouselItem>
            <CarouselItem>
              <VideoCard
                headline="PARK SLOPE CAFE OFFERS BOARD GAMES IN ADDITION TO COFFEE DRINKS"
                date="January 9, 2020"
                imagePath="/press_2.png"
                pressLogoPath="/brooklyn.png"
                videoLink="https://brooklyn.news12.com/park-slope-cafe-offers-board-games-in-addition-to-coffee-drinks-41541088"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <LinkCard
                headline="THIS NEW BOARD GAME CAFE IN PARK SLOPE HAS OVER 200 GAMES"
                date="January 7, 2020"
                imagePath="/press_3.png"
                excerpt={`Shaye Weaver from TimeOut  Sip & Play's affordable food options and flexible space."... Sip & Play has a full cafe that whips up coffee and specialty drinks, including boba tea, and tasty bites like chicken tenders, fries, avocado toast and bagels mostly priced under $10.Sip & Play isn't just for gamers, though... it's for everyone who needs place to get their morning coffee or to just sit and read, study or work.`}
                articleLink="https://www.timeout.com/newyork/news/this-new-board-game-cafe-in-park-slope-has-over-200-games-010720"
              />
            </CarouselItem>
            <CarouselItem>
              <LinkCard
                headline="'BOARD GAME CAFE' OPENS ON PARK SLOPE'S FIFTH AVENUE"
                date="January 2, 2020"
                imagePath="/press_4.png"
                excerpt={`Anna Quinn from Patch discusses how Sip & Play plans to build upon the foundation it has laid for the concept. "He spent the last few months completely revamping the space inside, adding large tables for optimal game play and building out a menu he says offers more than many board game cafes ..." "The 200-game catalogue of board games available to borrow might also grow... Customers are welcome to make suggestions about games they'd like to see him add."`}
                articleLink="https://www.timeout.com/newyork/news/this-new-board-game-cafe-in-park-slope-has-over-200-games-010720"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

function VideoCard({
  headline,
  date,
  videoLink,
  imagePath,
  pressLogoPath,
}: {
  headline: string;
  date: string;
  videoLink: string;
  imagePath: string;
  pressLogoPath: string;
}) {
  return (
    <Card className="flex max-lg:flex-col overflow-hidden h-fit lg:max-h-[400px] relative w-full">
      <img
        src={imagePath}
        alt="Published Image"
        className="lg:max-w-[40%] min-w-[40%] object-cover"
      />
      <div className="lg:my-8 lg:mx-10 max-lg:mx-2 max-lg:my-2 space-y-5 h-full">
        <img src={pressLogoPath} alt="Press Channel" className="w-[120px]" />
        <h2 className="text-2xl text-wrap w-3/4">{headline}</h2>
        <p>{date}</p>
        <Button asChild>
          <Link href={videoLink}>Watch the Video</Link>
        </Button>
      </div>
    </Card>
  );
}

function LinkCard({
  imagePath,
  headline,
  date,
  articleLink,
  excerpt,
}: {
  imagePath: string;
  headline: string;
  date: string;
  excerpt: string;
  articleLink: string;
}) {
  return (
    <Card className="flex max-lg:flex-col overflow-hidden h-fit lg:max-h-[400px] relative w-full">
      <img
        src={imagePath}
        alt="Published Image"
        className="lg:max-w-[40%] min-w-[40%] object-cover"
      />
      <div className="lg:my-8 lg:mx-10 max-lg:mx-2 max-lg:my-2 space-y-5">
        <Link href={articleLink} className="text-2xl text-wrap w-3/4 underline">
          {headline}
        </Link>
        <p>{date}</p>
        <div className="text-sm w-3/4 space-x-2">
          <span>{excerpt}</span>
          <span className="text-primary cursor-pointer">Read more</span>
        </div>
      </div>
    </Card>
  );
}

export default Press;
