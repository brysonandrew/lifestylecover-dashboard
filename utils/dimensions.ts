import { IDimensions } from "../models"

let width, height, isWidthResizing, isHeightResizing

export const measureViewport = (): IDimensions => {
  const nextWidth = window.innerWidth
  const nextHeight = window.innerHeight
  isWidthResizing = nextWidth !== width
  isHeightResizing = nextHeight !== height
  width = nextWidth
  height = nextHeight
  const heightScreen = window.screen.height
  // document.body.style.height = `${nextHeight}px`; // This is to keep body size of viewport so mobile menus change page size
  return { width, height, heightScreen, isWidthResizing, isHeightResizing }
}

export function fitSizesInFrame(
  imageDimensions: number[],
  frameDimensions: number[]
): number[] {
  const [iw, ih] = imageDimensions
  const [fw, fh] = frameDimensions
  const scale = Math.min(fh / ih, fw / iw)
  return [iw * scale, ih * scale]
}
// https://math.stackexchange.com/questions/1169409/formula-to-best-fit-a-rectangle-inside-another-by-scaling
