import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from '../../global.css?inline'

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      HOME
      <Slot />
    </>
  )
})