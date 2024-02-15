import { sectionMain } from "./Theme/constants";
// import { useContext } from "react";
// import { myContext } from "./context/Context";
import MainBackground from "./components/MainBackground";
import CardComponent from "./components/CardComponent";
export const App = () => {
  // const { price } = useContext(myContext);
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <section style={sectionMain}>
          <MainBackground />
          <CardComponent />
        </section>
      </main>
    </>
  );
};
