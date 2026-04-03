import { component$ } from '@builder.io/qwik'
import Player from '../../components/player/player'
import BottomNavbar from '~/components/player/bottom-navbar'
import HomeView from './home'

export default component$(() => {
  return (
    <div class="relative min-h-screen">
      <HomeView />
      <Player />
      <BottomNavbar />
    </div>
  )
})