import anime from 'animejs'

export const animate = (finishAnimating: () => void) => {
    const loader = anime.timeline({
        complete: () => { finishAnimating() },
    })

    loader
        .add({
            targets: '#logo #square',
            delay: 300,
            duration: 1500,
            easing: 'easeInOutQuart',
            strokeDashoffset: [anime.setDashoffset, 0],
        })
        .add({
            targets: '#logo #k',
            duration: 700,
            easing: 'easeInOutQuart',
            opacity: 1,
        })
        .add({
            targets: '#logo',
            delay: 500,
            duration: 300,
            easing: 'easeInOutQuart',
            opacity: 0,
            scale: 0.1,
        })
        .add({
            targets: "#loader",
            duration: 200,
            easing: 'easeInOutQuart',
            opacity: 0,
            zIndex: -1,
        })
}
export default animate