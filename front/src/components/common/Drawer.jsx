import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import styled, {css} from "styled-components";
import useMountTransition from "../../hooks/useMountTransition";
import FocusTrap from 'focus-trap-react'
import {useSelector} from "react-redux";
import {getTheme} from "../../redux/selects/auth";
import {theme} from "../../styles/theme";

const createRootElement = () => {
    let rootElement = document.createElement('div')
    rootElement.setAttribute('id', 'root-modal')
    return rootElement
}

const Drawer = ({visible, children, onClose}) => {
    const refBody = useRef(document.querySelector('body'))
    const portalRootRef = useRef(
        document.getElementById('root-modal') || createRootElement()
    )
    const isTransitioning = useMountTransition(visible, 3000)
    const tempTheme = useSelector((state) => getTheme(state))

    useEffect(() => {
        refBody.current.appendChild(portalRootRef.current)
        const portal = portalRootRef.current

        return () => {
            portal.remove()
        }
    }, [])

    return createPortal(
        <FocusTrap active={visible}>
            <DrawerContainer
                aria-hidden={visible ? "false" : "true"}>
                <SDrawer temp={tempTheme} isTransitioning={isTransitioning}
                         visible={visible} role="dialog">
                    {children}
                </SDrawer>
                <Backdrop isTransitioning={isTransitioning}
                          visible={visible} onClick={onClose} />
            </DrawerContainer>
         </FocusTrap>,
        portalRootRef.current
    )
}

export default Drawer

const DrawerContainer = styled.div`
  --transition-speed: 0.3s;
`
const SDrawer = styled.div`
  background: var(${({temp}) => theme[temp].background2});
  width: 42%;
  height: 100%;
  overflow: auto;
  position: fixed;
  box-shadow: 0 0 15px var(${({temp}) => theme[temp].background});
  transition: transform var(--transition-speed) ease;
  top: 0;
  right: 0;
  z-index: 1000;
   transform: ${({ visible, isTransitioning }) => {
    if (visible && isTransitioning) {
        return 'translateX(0)';
    }
    return 'translateX(100%)';
}};
`

const Backdrop = styled.div`
  visibility: hidden;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity var(--transition-speed) ease,
  visibility var(--transition-speed) ease;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  pointer-events: none;
  z-index: 0;
  ${({visible, isTransitioning}) => {
    if (visible && isTransitioning) {
        return css`
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
          z-index: 999;
        `;
    }
    return '';
}};
`
