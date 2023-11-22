import { setCssVar } from 'quasar'

export default function setBrand(brand: string) {

  setCssVar('primary', '#cd1182')
  setCssVar('secondary', '#695E93')
  window.document.documentElement.style.setProperty("--q-tertiary", "#8155BA");
  window.document.documentElement.style.setProperty("--q-quad", "#BEAFC2");

}
