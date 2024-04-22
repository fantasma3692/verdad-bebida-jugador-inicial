import styled from "styled-components";
import { Btn1 } from "../moleculas/Btn1";
import { v } from "../../styles/variables";
import { useState } from "react";
import { Carousel } from "./Carousel";
import { Datapreguntas } from "../../utils/dataEstatica";
export function PantallaPlayVerdadBebida({ setState, selectNivel }) {
  const [stateAnimacion, setStateAnimacion] = useState(true);
  const [pregunta, setPregunta] = useState([]);
  function chocolatear() {
    const response =
      Datapreguntas[Math.floor(Math.random() * Datapreguntas.length)];
    setPregunta(response);
  }
  return (
    <Container>
      <section className="play">
        <Btn1
          color="rgba(0, 0, 0,0.5)"
          funcion={setState}
          icono={<v.iconoFlechabajo />}
          width="220px"
          color1={selectNivel.color_1}
          color2={selectNivel.color_2}
          texto={selectNivel.nombre}
        />

        <Carousel
          stateAnimacion={stateAnimacion}
          text={pregunta?.pregunta}
          bgcolor1={selectNivel.color_1}
          bgcolor2={selectNivel.color_2}
          icono={selectNivel.icono}
        />

        <Btn1
          color="#fff"
          funcion={() => {
            setStateAnimacion(true);
            chocolatear();
            setTimeout(function () {
              setStateAnimacion(false);
            }, 0.5 * 1000);
          }}
          width="320px"
          color1="#383838"
          color2="#111111"
          texto="Siguiente pregunta"
        />
      </section>
      <section className="tutorial" id="tutorial">
        <span className="titulo">Cómo jugar a “Verdad o bebida”</span>
        <p>
          Verdad o bebida puede ser jugado por 2 o más personas. Tomad turnos
          para obtener una pregunta al azar que leeréis a la otra persona. La
          otra persona debe responder a la pregunta con la verdad o se dispara.
        </p>
        <span className="titulo"> Qué es Verdad o bebida?</span>
        <p>
          Aunque Verdad o bebida puede ser jugado por dos personas, también
          funciona excepcionalmente bien cuando lo juega un grupo. Es una forma
          estupenda de romper el hielo y hacer que la gente se relaje!
        </p>
        <span className="titulo"> Versión online de “Verdad o bebida”</span>
        <p>
          En la versión online gratuita de{" "}
          <span className="textopintado">“Verdad o bebida”</span> , puedes
          elegir entre 4 categorías diferentes:
        </p>
        <span className="subtitulo">Modo normal</span>
        <p>
          Este es el modo casual para empezar. Sólo preguntas divertidas para
          averiguar cosas sobre los demás. También es seguro para el trabajo!
        </p>
        <span className="subtitulo">Modo fiesta</span>
        <p>
          El modo Fiesta de Verdad o bebida es perfecto para compartir algunas
          historias de fiestas salvajes mientras se es amable con los demás.
        </p>
        <span className="subtitulo">Modo puerco</span>
        <p>
          El título lo dice todo. Preguntas picantes y definitivamente NSFW (no
          seguro para el trabajo)!
        </p>
        <span className="subtitulo">Modo íntimo</span>
        <p>
          Para los buenos amigos y las parejas. Estas preguntas pondrán a prueba
          tus relaciones.
        </p>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  flex-direction: column;
  overflow-y: auto;

  height: 100%;

  justify-content: center;
  text-align: center;
  grid-template:
    "play" 100vh
    "tutorial" auto;
  z-index: 1;
  span {
    font-weight: 700;
  }
  .play {
    grid-area: play;
    /* background-color: rgba(42, 227, 10, 0.5); */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
  .tutorial {
    grid-area: tutorial;
    /* background-color: rgba(234, 17, 223, 0.5); */
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 25px;
    gap: 20px;
    .titulo {
      font-size: 24px;
    }
    p {
      font-size: 19px;
      color: hsl(247 10% 66%);
    }
    .subtitulo {
      font-size: 18.72px;
    }
    .textopintado {
      color: #fa891c;
    }
  }
`;
