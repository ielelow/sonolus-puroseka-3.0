import { slotEffect } from '../../components/slotEffect.mjs'
import { slotGlowEffect } from '../../components/slotGlowEffect.mjs'
import { effect } from '../../effect.mjs'
import { particle } from '../../particle.mjs'
import {
    playCircularNoteEffect,
    playDirectionalNoteEffect,
    playLaneEffects,
    playLinearNoteEffect,
} from '../../utils.mjs'

export const slideEndFlickNoteHit = {
    enter() {
        effect.clips.flickPerfect.play(0)

        playLinearNoteEffect(particle.effects.flickNoteLinear)
        playCircularNoteEffect(particle.effects.flickNoteCircular)
        playDirectionalNoteEffect(particle.effects.flickNoteDirectional)
        playLaneEffects()

        slotGlowEffect.show('flick')
        slotEffect.show('flick')
    },

    exit() {
        slotGlowEffect.clear()
        slotEffect.clear()
    },
}
