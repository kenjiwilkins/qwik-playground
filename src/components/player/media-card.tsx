import { component$ } from "@builder.io/qwik";

export interface MediaCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const MediaCard = component$<MediaCardProps>((props) => {
  return (
    <div class="flex-shrink-0 w-48 snap-start group cursor-pointer">
      <div class="relative aspect-square rounded-lg overflow-hidden mb-3">
        <img
          alt={props.title}
          class="w-full h-full object-cover group-hover:brightness-75 transition-all"
          src={props.imageUrl}
          width={192}
          height={192}
        />
      </div>
      <h3 class="font-headline font-bold text-base mb-1">{props.title}</h3>
      <p class="text-on-surface-variant text-xs">{props.description}</p>
    </div>
  );
});
