import { useEffect } from "react"
import KEY_CODES from '../utils/keyCodes'

export const useFocusTrap = (
    buttonRef: React.RefObject<HTMLButtonElement>,
    navRef: React.RefObject<HTMLElement>,
    close: () => void) => {

    let menuFocusables: HTMLElement[]
    let firstFocusableEl: HTMLElement
    let lastFocusableEl: HTMLElement

    const setFocusables = () => {
        menuFocusables = [buttonRef.current!, ...Array.from(navRef.current!.querySelectorAll('a'))]
        firstFocusableEl = menuFocusables[0]
        lastFocusableEl = menuFocusables[menuFocusables.length - 1]
    }

    const handleBackwardTab = (e: KeyboardEvent) => {
        if (document.activeElement === firstFocusableEl) {
            e.preventDefault()
            lastFocusableEl.focus()
        }
    }

    const handleForwardTab = (e: KeyboardEvent) => {
        if (document.activeElement === lastFocusableEl) {
            e.preventDefault()
            firstFocusableEl.focus()
        }
    }

    const onKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
            case KEY_CODES.ESCAPE:
            case KEY_CODES.ESCAPE_IE11: {
                close()
                break
            }

            case KEY_CODES.TAB: {
                if (menuFocusables && menuFocusables.length === 1) {
                    e.preventDefault()
                    break
                }
                if (e.shiftKey) {
                    handleBackwardTab(e)
                } else {
                    handleForwardTab(e)
                }
                break
            }

            default: {
                break
            }
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)

        setFocusables()

        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }
        // eslint-disable-next-line
    }, [])
}

export default useFocusTrap