import { component$ } from "@builder.io/qwik";
import { LuHome, LuSearch, LuLibraryBig, LuGithub } from '@qwikest/icons/lucide'

export default component$(() => {
  return (
    <nav class="fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-8 px-4 bg-[#1c1c1c]/70 backdrop-blur-3xl z-50 rounded-t-[2rem] shadow-[0_-8px_32px_rgba(0,0,0,0.4)]">
      <a class="flex flex-col items-center justify-center text-[#72fe8f] transition-all duration-300 tap-highlight-none active:scale-90 group" href="#">
        <span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 1;">
          <LuHome />
        </span>
        <span class="font-['Inter'] text-[10px] font-medium">Home</span>
      </a>
      <a class="flex flex-col items-center justify-center text-[#adaaaa] hover:text-white transition-all tap-highlight-none active:scale-90 group" href="#">
        <span class="material-symbols-outlined mb-1">
          <LuSearch />
        </span>
        <span class="font-['Inter'] text-[10px] font-medium">Search</span>
      </a>
      <a class="flex flex-col items-center justify-center text-[#adaaaa] hover:text-white transition-all tap-highlight-none active:scale-90 group" href="#">
        <span class="material-symbols-outlined mb-1">
          <LuLibraryBig />
        </span>
        <span class="font-['Inter'] text-[10px] font-medium">Library</span>
      </a>
      <a class="flex flex-col items-center justify-center text-[#adaaaa] hover:text-white transition-all tap-highlight-none active:scale-90 group" href="#">
        <span class="material-symbols-outlined mb-1">
          <LuGithub />
        </span>
        <span class="font-['Inter'] text-[10px] font-medium">Star Me!</span>
      </a>
    </nav>
  )
})