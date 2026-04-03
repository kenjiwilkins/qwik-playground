import { component$ } from "@builder.io/qwik";
import { RecentlyPlayedItem, RecentlyPlayedItemProps } from "~/components/player/recently-played-item";

const mockData:RecentlyPlayedItemProps[] = [{
  title: 'Daily Mix 1',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe1st5C3x6QFiJlTaoX213Ozm-4suDWo5hOIDqiAGcG4NAjpyGcMhYsB5KqeJ6YPavE4nkjJJ_bsNKzqGxbJHOOJvEUHEAmEBaebj24xer1jFQHfCpt82buZloGeyjbTJMSCYCjnPEQ3ApU49m7k0gxjk73Fvvu0-y5eCUSqDyJw7xJK0ALOQv_JOd9aevpVbJ55qzu4pLO4rv3QNMuSwvviz2dfDF93J1SBRlEdVsx0flfxvGTLuIbReB8KAgoy2d5YqQcgZxY_Q'
},
{
  title: 'After Hours',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCViKJlqLphtIjSMxR7K6q4_Bfb5dpLMMiUOyNO8WAOBnH5VC0aiCGMk8tzj4SvyMi41gmontV6N4F_LcmQwqplx6ujsx_fB98NRPCSLpK_wbBOh0RiR4teXuRepA9s2luj_Q19M1g1WvH5KJ0jDsR6MRx30LEWFA60j_6gCc2buwnXaKaNoIapySfNFurhgYqvSNZswcl2oapzs80rQr-xjasQrFX76NNpTu_rZfp3JADU-0-lLQcWdhcMJrdfLhUqbbDeKqnErvY'
}]

export default component$(() => {
  return (
    <main class="pt-24 pb-48 px-6 max-w-7xl mx-auto">
      <h2 class="font-headline font-bold text-xl mb-6 text-on-surface">Recently Played</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {
          mockData.map((rpi) => (
            <RecentlyPlayedItem title={rpi.title} imageUrl={rpi.imageUrl} />
          ))
        }
      </div>
    </main>
  )
})