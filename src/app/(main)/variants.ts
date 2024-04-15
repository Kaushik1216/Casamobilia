type FadeDirection = "up" | "down" | "left" | "right";
export const fadeIn = (direction:FadeDirection , del:number , distance:number) =>{
    return {
        hidden: {
            y: direction === "up" ? distance : direction === "down" ? -distance : 0,
            x: direction === "left" ? distance : direction === "right" ? -distance : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
              type: "tween",
              duration: 1.2,
              delay: del,
              ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    }
}