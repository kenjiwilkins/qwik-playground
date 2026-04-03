import { component$ } from "@builder.io/qwik";
import { RecentlyPlayedItem, RecentlyPlayedItemProps } from "~/components/player/recently-played-item";
import { MediaCard, MediaCardProps } from "~/components/player/media-card";
import { faker } from '@faker-js/faker';

const mockRecent:RecentlyPlayedItemProps[] = new Array(6).fill({}).map(() => ({
  title: faker.music.songName(),
  imageUrl: faker.image.url({width: 300, height: 300})
}))

const mockMadeForYou: MediaCardProps[] = new Array(5).fill({}).map(() => ({
  title: faker.music.songName(),
  description: faker.music.genre(),
  imageUrl: faker.image.url({width: 300, height: 300})
}))

const mockPopularPlaylists: MediaCardProps[] = new Array(5).fill({}).map(() => ({
  title: faker.music.songName(),
  description: faker.music.genre(),
  imageUrl: faker.image.url({width: 300, height: 300})
}))

const mockNewReleases: MediaCardProps[] = new Array(5).fill({}).map(() => ({
  title: faker.music.songName(),
  description: faker.music.genre(),
  imageUrl: faker.image.url({width: 300, height: 300})
}))

export default component$(() => {
  return (
    <main class="pt-24 pb-48 px-4 max-w-7xl mx-auto">
      <h2 class="font-headline font-bold text-xl mb-6 text-on-surface">Recently Played</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {
          mockRecent.map((rpi, index) => (
            <RecentlyPlayedItem key={`rpi-${index}`} title={rpi.title} imageUrl={rpi.imageUrl} />
          ))
        }
      </div>
      {/* Made For You Section */}
      <section class="mb-12">
        <div class="flex justify-between items-end mb-6">
          <h2 class="font-headline font-bold text-2xl text-on-surface">Made For You</h2>
          <span class="text-green-500 text-sm font-bold cursor-pointer hover:underline">See all</span>
        </div>
        <div class="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
          {
            mockMadeForYou.map((mfy, index) => (
              <MediaCard 
                key={`mfy-${index}`}
                title={mfy.title}
                description={mfy.description}
                imageUrl={mfy.imageUrl}
              />
            ))
          }
        </div>
      </section>
      {/* Popular Playlists */}
      <section>
        <div class="flex justify-between items-end mb-6">
          <h2 class="font-headline font-bold text-2xl text-on-surface">Popular Playlists</h2>
          <span class="text-green-500 text-sm font-bold cursor-pointer hover:underline">See all</span>
        </div>
        <div class="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
          {
            mockPopularPlaylists.map((pp, index) => (
              <MediaCard 
                key={`pp-${index}`}
                title={pp.title}
                description={pp.description}
                imageUrl={pp.imageUrl}
              />
            ))
          }
        </div>
      </section>
      {/* New Releases */}
      <section class="mt-12">
        <div class="flex justify-between items-end mb-6">
          <h2 class="font-headline font-bold text-2xl text-on-surface">New Releases</h2>
          <span class="text-green-500 text-sm font-bold cursor-pointer hover:underline">See all</span>
        </div>
        <div class="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
          {
            mockNewReleases.map((nr, index) => (
              <MediaCard 
                key={`nr-${index}`}
                title={nr.title}
                description={nr.description}
                imageUrl={nr.imageUrl}
              />
            ))
          }
        </div>
      </section>
    </main>
  )
})