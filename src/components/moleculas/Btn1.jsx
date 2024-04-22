import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
import { disable } from "workbox-navigation-preload";
import { Icon } from "@iconify/react/dist/iconify.js";
export function Btn1({
  texto,
  color1,
  color2,
  position,
  top,
  bottom,
  width,
  icono,
  funcion,
  disabled,color,index
}) {
  return (
    <Container key={index}
      disabled={disabled}
      onClick={funcion}
      $width={width}
      $top={top}
      $bottom={bottom}
      $position={position}
      $color1={color1}
      $color2={color2}
      $color={color}
      className="btn"
    >
      {texto}
      <Icon className="icono" icon={icono}></Icon>
    </Container>
  );
}


const Container = styled.button`
text-transform:uppercase;
  font-weight: 700;
  display: flex;
  font-size: 15px;
  padding: 10px 25px;
  border-radius: 16px;
  border: ${(props) => props.$border} solid rgba(50, 50, 50, 0.2);
  border-bottom: 5px solid rgba(50, 50, 50, 0.2);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;
  color: ${(props) => props.$color};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  overflow:hidden;
  background-image: linear-gradient(
     222deg,
   ${(props) => props.$color1} 0%,
     ${(props) => props.$color2} 100%
   );
  &::before {
    content: "";
    display: ${(props) => props.$decorador};
    width: 40px;
    height: 40px;
    background-color: rgba(251, 251, 251, 0.25);
    position: absolute;
    border-radius: 50%;
    bottom: -15px;
    right: -15px;
  }

  .content {
    display: flex;
    gap: 12px;
  }
  &:active {
    transform: translate(0, 0);
    border-bottom: ${(props) => props.$border} solid rgba(50, 50, 50, 0.2);
  }
  &[disabled] {
    background-color: #646464;
    cursor: no-drop;
    box-shadow: none;
  }
  gap:5px;
  .icono{
 font-size:2rem;
  }
`;