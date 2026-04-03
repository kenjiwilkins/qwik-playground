import { component$ } from "@builder.io/qwik";

export interface RecentlyPlayedItemProps {
  imageUrl: string;
  title: string;
}

export const RecentlyPlayedItem = component$<RecentlyPlayedItemProps>((props) => {
  return (
    <div class="flex items-center gap-3 bg-surface-container-low p-2 rounded-lg hover:bg-surface-container-highest transition-colors cursor-pointer group">
      <div class="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 shadow-lg">
        <img
          alt={props.title}
          src={props.imageUrl}
          width={64}
          height={64}
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col overflow-hidden">
        <span class="text-sm font-medium text-on-surface truncate">{props.title}</span>
      </div>
    </div>
  );
});
