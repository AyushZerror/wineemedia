import SmoothScroll from "@/components/smoothscroll/SmoothScroll";
import Transition from "@/components/transition/Transition";
import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css'

export default function App({ Component, pageProps ,router}) {
  return (
      <SmoothScroll>
        <Transition>
        <Component key={router.route} {...pageProps} />
        </Transition>
      </SmoothScroll>
  );
}
