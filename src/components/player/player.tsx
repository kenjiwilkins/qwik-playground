import { component$, useComputed$, useStore } from "@builder.io/qwik";
import { LuTabletSmartphone, LuPlay, LuPause } from '@qwikest/icons/lucide'

export default component$(() => {
  const state = useStore({
    isPlaying: true
  })
  const isPlayerPlaying = useComputed$(() => {
    return state.isPlaying
  })
  return (
    <div class="fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-lg z-50 transition-all bg-teal-950 rounded-2xl">
      <div class="bg-surface-container-highest/70 backdrop-blur-3xl p-2 rounded-xl flex items-center gap-2 justify-between shadow-[0_8px_32px_rgba(0,0,0,0.6)] ">
        <div class="flex items-center gap-3 overflow-hidden">
          <img class="" width={60} height={60} alt="Summer Nights" data-alt="cinematic shot of city lights blurred at night with a dreamy cool blue and orange bokeh effect" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeN5PYz5eP41xfN-e-jROBmbHdUHOFV5FVr_QA4NOJWNtzba8Q2Oleo28BYUj8A7k6aCyrsr2Bz_sLtM0pKNcSLq2jKzcQZSAqa6_IpoIFYVptBT-LbAl_nFCn-ktJuX3FCcNBcIjCiPa0oLLI9GFhMh7qgswYrsLQoEqMAirxvzBD3c-ZTHXsxEW8Cb9srl4bjL8TVxCQKymeNYODcSSGRzfKmbX94qnb7BkgJVSXjHEU9wDEGJpQbgximi3H0owGLAPgW0ixy_A"/>
        </div>
        <div class="overflow-hidden py-2 flex flex-col justify-center gap-4">
          <h4 class="font-headline font-bold text-sm text-on-surface truncate">Midnight City</h4>
          <p class="text-on-surface-variant text-[10px] uppercase tracking-widest font-semibold">M83 • Summer Nights</p>
        </div>
              <div class="flex items-center gap-4 px-3">
        <button class="scale-95 active:scale-90 transition-transform text-2xl">
          <span class="sr-only">devices</span>
          <LuTabletSmartphone />
        </button>
        <button class="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center scale-95 active:scale-90 transition-transform text-2xl">
          <span class="sr-only" style="font-variation-settings: 'FILL' 1;">pause</span>
          {isPlayerPlaying ? <LuPlay /> : <LuPause />}
        </button>
      </div>
      </div>

        <div class="absolute bottom-0 left-0 h-0.5 bg-primary/30 w-full rounded-b-xl">
          <div class="h-full bg-primary w-1/3 rounded-full"></div>
        </div>
    </div>
  )
})